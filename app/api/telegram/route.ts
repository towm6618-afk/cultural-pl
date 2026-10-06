export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { artworks } from "@/app/golosuvannya/artworks"
import { artworks as auctionArtworks } from "@/app/aukcions/artworks"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

// Telegram ID адміністраторів(через кому), яким показуємо телефон/email учасників аукціону.
// Усі інші бачать лише суми. Свій ID можна дізнатись у бота @userinfobot.
const ADMIN_IDS = (process.env.TELEGRAM_ADMIN_IDS ?? "")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean)
const isAdmin = (userId: number) => ADMIN_IDS.includes(String(userId))

interface TelegramUpdate {
  update_id: number
  message?: {
    message_id: number
    from: { id: number; first_name: string; username?: string }
    chat: { id: number; type: string }
    text?: string
  }
  callback_query?: {
    id: string
    from: { id: number; first_name: string }
    message: { chat: { id: number } }
    data: string
  }
}

async function sendMessage(chatId: number, text: string, replyMarkup?: object) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", reply_markup: replyMarkup }),
  })
}

async function getVotingResults() {
  const supabase = await createClient()

  // Узнаем точное количество строк в базе
  const { count: exactCount } = await supabase
    .from("votes")
    .select("*", { count: "exact", head: true })

  let allData: any[] = []
  let from = 0
  const step = 1000
  let fetchMore = true

  while (fetchMore) {
    const { data, error } = await supabase
      .from("votes")
      .select("id, artwork_id, email") // ❗️ ТЕПЕРЬ ID ЕСТЬ В ЗАПРОСЕ
      .order("id", { ascending: true })
      .range(from, from + step - 1)

    if (error) {
      console.error("Error fetching votes:", error)
      break
    }

    if (data && data.length > 0) {
      allData = allData.concat(data)
      from += step
      if (data.length < step) {
        fetchMore = false
      }
    } else {
      fetchMore = false
    }
  }

  const votesByArtwork: Record<string, { count: number }> = {}

  allData.forEach((vote) => {
    if (!votesByArtwork[vote.artwork_id]) {
      votesByArtwork[vote.artwork_id] = { count: 0 }
    }
    votesByArtwork[vote.artwork_id].count += 1
  })

  const sorted = Object.entries(votesByArtwork)
    .sort(([, a], [, b]) => b.count - a.count)
    .map(([id, data], index) => ({
      position: index + 1,
      artworkId: id,
      votes: data.count,
    }))

  return {
    results: sorted,
    totalVotes: allData.length,
    exactDbCount: exactCount || 0,
  }
}

const escapeHtml = (str: string) =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

const fmtMoney = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ")

async function answerCallback(callbackId: string) {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ callback_query_id: callbackId }),
  })
}

// Telegram обмежує повідомлення 4096 символами — ділимо на частини по блоках
async function sendChunked(chatId: number, blocks: string[], replyMarkup?: object) {
  const LIMIT = 3800
  const chunks: string[] = []
  let current = ""
  for (const block of blocks) {
    if (current && (current + block).length > LIMIT) {
      chunks.push(current)
      current = ""
    }
    current += block
  }
  if (current) chunks.push(current)

  for (let i = 0; i < chunks.length; i++) {
    await sendMessage(chatId, chunks[i], i === chunks.length - 1 ? replyMarkup : undefined)
  }
}

async function getAuctionBids() {
  const supabase = await createClient()

  let all: any[] = []
  let from = 0
  const step = 1000

  while (true) {
    const { data, error } = await supabase
      .from("bids")
      .select("id, artwork_id, amount, phone, email, created_at")
      .order("id", { ascending: true })
      .range(from, from + step - 1)

    if (error) {
      console.error("Error fetching bids:", error)
      return null
    }
    if (!data || data.length === 0) break
    all = all.concat(data)
    if (data.length < step) break
    from += step
  }

  return all
}

function buildAuctionBlocks(bids: any[], admin: boolean) {
  const byArtwork = new Map<string, any[]>()
  bids.forEach((bid) => {
    const key = String(bid.artwork_id)
    if (!byArtwork.has(key)) byArtwork.set(key, [])
    byArtwork.get(key)!.push(bid)
  })

  let leadersTotal = 0
  let withBids = 0

  const lines = auctionArtworks.map((artwork) => {
    const list = byArtwork.get(artwork.id) ?? []
    const head = `🖼 <b>ID#${artwork.id}</b> ${escapeHtml(artwork.title)} — ${escapeHtml(artwork.artist)}\n`

    if (list.length === 0) {
      return head + `⚪ Ставок немає (старт ${fmtMoney(artwork.startPrice)} грн)\n\n`
    }

    // Лідер — найвища ставка (при рівності — рання)
    const leader = list.reduce((best, b) => {
      const a = Number(b.amount)
      const m = Number(best.amount)
      if (a > m) return b
      if (a === m && new Date(b.created_at) < new Date(best.created_at)) return b
      return best
    })

    leadersTotal += Number(leader.amount)
    withBids += 1

    let text = head + `💰 Лідер: <b>${fmtMoney(Number(leader.amount))} грн</b> · ставок: ${list.length}\n`
    if (admin) {
      text += `📞 ${escapeHtml(String(leader.phone ?? "—"))}`
      if (leader.email) text += ` · ✉️ ${escapeHtml(String(leader.email))}`
      text += `\n`
    }
    return text + `\n`
  })

  const header =
    `<b>🔨 Результати аукціону</b>\n\n` +
    `Всього ставок: <b>${bids.length}</b>\n` +
    `Робіт зі ставками: <b>${withBids}</b> з ${auctionArtworks.length}\n` +
    `Сума лідируючих ставок: <b>${fmtMoney(leadersTotal)} грн</b>\n\n`

  return [header, ...lines]
}

async function sendAuctionResults(chatId: number, userId: number) {
  const refreshButton = { inline_keyboard: [[{ text: "🔄 Оновити", callback_data: "get_auction" }]] }
  const bids = await getAuctionBids()

  if (!bids) {
    await sendMessage(chatId, "Не вдалося завантажити ставки. Спробуйте пізніше.", refreshButton)
    return
  }

  await sendChunked(chatId, buildAuctionBlocks(bids, isAdmin(userId)), refreshButton)
}

export async function POST(request: NextRequest) {
  try {
    const update: TelegramUpdate = await request.json()

    if (update.message?.text === "/start") {
      const chatId = update.message.chat.id
      const firstName = update.message.from.first_name
      await sendMessage(
        chatId,
        `Вітаю, ${firstName}! 👋\n\nЦе бот Культурної Платформи "Поліська Казка".\n\nОберіть, які результати показати.`,
        {
          inline_keyboard: [
            [{ text: "📊 Результати голосування", callback_data: "get_results" }],
            [{ text: "🔨 Результати аукціону", callback_data: "get_auction" }],
          ],
        }
      )
    }

    if (update.message?.text === "/results") {
      const chatId = update.message.chat.id
      const results = await getVotingResults()

      if (!results || results.results.length === 0) {
        await sendMessage(chatId, "Поки що немає голосів.")
      } else {
        // ❗️ ИСПРАВЛЕННЫЙ ТЕКСТ СООБЩЕНИЯ
        let message = `<b>📊 Результати голосування</b>\n\n`
        message += `Всього голосів (скачано): <b>${results.totalVotes}</b>\n`
        message += `Всього в базі даних: <b>${results.exactDbCount}</b>\n\n`

        results.results.slice(0, 20).forEach((item) => {
          const medal = item.position === 1 ? "🥇" : item.position === 2 ? "🥈" : item.position === 3 ? "🥉" : `${item.position}.`
          message += `${medal} <b>Картина #${item.artworkId}</b>: ${item.votes} голосів\n`
        })

        if (results.results.length > 20) message += `\n... та ще ${results.results.length - 20} картин`
        await sendMessage(chatId, message)
      }
    }

    if (update.callback_query?.data === "get_results") {
      const chatId = update.callback_query.message.chat.id
      const results = await getVotingResults()

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: update.callback_query.id }),
      })

      if (!results || results.results.length === 0) {
        await sendMessage(chatId, "Поки що немає голосів.", {
          inline_keyboard: [[{ text: "🔄 Оновити", callback_data: "get_results" }]],
        })
      } else {
        // ❗️ ИСПРАВЛЕННЫЙ ТЕКСТ СООБЩЕНИЯ №2
        let message = `<b>📊 Результати голосування</b>\n\n`
        message += `Всього голосів (скачано): <b>${results.totalVotes}</b>\n`
        message += `Всього в базі даних: <b>${results.exactDbCount}</b>\n\n`

        results.results.slice(0, 20).forEach((item) => {
          const artwork = artworks.find(a => a.id.toString() === item.artworkId.toString())
          if (artwork) {
            const medal = item.position === 1 ? "🥇" : item.position === 2 ? "🥈" : item.position === 3 ? "🥉" : `${item.position}.`
            message += `${medal} <b>ID#${item.artworkId}</b> <b>${artwork.title}</b> — ${artwork.artist}: ${item.votes} голосів\n\n`
          }
        })

        if (results.results.length > 20) message += `... та ще ${results.results.length - 20} картин`
        await sendMessage(chatId, message, {
          inline_keyboard: [[{ text: "🔄 Оновити", callback_data: "get_results" }]],
        })
      }
    }

    if (update.message?.text === "/auction") {
      await sendAuctionResults(update.message.chat.id, update.message.from.id)
    }

    if (update.callback_query?.data === "get_auction") {
      await answerCallback(update.callback_query.id)
      await sendAuctionResults(update.callback_query.message.chat.id, update.callback_query.from.id)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Telegram webhook error:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get("action")

  if (action === "setWebhook") {
    const webhookUrl = `${request.nextUrl.origin}/api/telegram`
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: webhookUrl }),
    })
    return NextResponse.json(await response.json())
  }
  return NextResponse.json({ message: "Telegram  Bot API", actions: ["setWebhook"] })
}

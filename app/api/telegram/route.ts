import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { artworks } from "@/app/golosuvannya/artworks"
export const dynamic = 'force-dynamic'
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

interface TelegramUpdate {
  update_id: number
  message?: {
    message_id: number
    from: {
      id: number
      first_name: string
      username?: string
    }
    chat: {
      id: number
      type: string
    }
    text?: string
  }
  callback_query?: {
    id: string
    from: {
      id: number
      first_name: string
    }
    message: {
      chat: {
        id: number
      }
    }
    data: string
  }
}

async function sendMessage(chatId: number, text: string, replyMarkup?: object) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      reply_markup: replyMarkup,
    }),
  })
}

async function getVotingResults() {
  const supabase = await createClient()

  let allData: any[] = []
  let from = 0
  const step = 1000
  let fetchMore = true

  // Запрашиваем все данные из Supabase, пока они не закончатся
  while (fetchMore) {
    const { data, error } = await supabase
      .from("votes")
      .select("artwork_id, email")
      // Сортировка обязательна для пагинации! Без неё база может отдавать одно и то же
      .order("artwork_id", { ascending: true })
      .range(from, from + step - 1)

    if (error) {
      console.error("Error fetching votes:", error)
      return null
    }

    if (data && data.length > 0) {
      allData = allData.concat(data)
      from += step

      // Если пришло меньше 1000, значит это конец
      if (data.length < step) {
        fetchMore = false
      }
    } else {
      fetchMore = false
    }
  }

  // Считаем голоса
  const votesByArtwork: Record<string, { count: number; emails: string[] }> = {}

  allData.forEach((vote) => {
    if (!votesByArtwork[vote.artwork_id]) {
      votesByArtwork[vote.artwork_id] = { count: 0, emails: [] }
    }
    votesByArtwork[vote.artwork_id].count += 1
    // Добавляем email только если его еще нет (защита от дублей)
    if (!votesByArtwork[vote.artwork_id].emails.includes(vote.email)) {
      votesByArtwork[vote.artwork_id].emails.push(vote.email)
    }
  })

  // Сортируем от большего к меньшему
  const sorted = Object.entries(votesByArtwork)
    .sort(([, a], [, b]) => b.count - a.count)
    .map(([id, data], index) => ({
      position: index + 1,
      artworkId: id,
      votes: data.count,
      emails: data.emails,
    }))

  return {
    results: sorted,
    totalVotes: allData.length, // Теперь тут 100% реальное количество
  }
}

export async function POST(request: NextRequest) {
  try {
    const update: TelegramUpdate = await request.json()

    // Обробка команди /start
    if (update.message?.text === "/start") {
      const chatId = update.message.chat.id
      const firstName = update.message.from.first_name

      await sendMessage(
        chatId,
        `Вітаю, ${firstName}! 👋\n\nЦе бот Культурної Платформи "Поліська Казка".\n\nНатисніть кнопку нижче, щоб отримати результати голосування.`,
        {
          inline_keyboard: [
            [{ text: "📊 Отримати результати", callback_data: "get_results" }],
          ],
        }
      )
    }

    // Обробка команди /results
    if (update.message?.text === "/results") {
      const chatId = update.message.chat.id
      const results = await getVotingResults()

      if (!results || results.results.length === 0) {
        await sendMessage(chatId, "Поки що немає голосів.")
      } else {
        let message = `<b>📊 Результати голосування</b>\n\n`
        message += `Всього голосів: <b>${results.totalVotes}</b>\n\n`

        results.results.slice(0, 20).forEach((item) => {
          const medal = item.position === 1 ? "🥇" : item.position === 2 ? "🥈" : item.position === 3 ? "🥉" : `${item.position}.`
          message += `${medal} <b>Картина #${item.artworkId}</b>: ${item.votes} голосів\n`
          message += `   📧 ${item.emails.join(", ")}\n\n`
        })

        if (results.results.length > 20) {
          message += `\n... та ще ${results.results.length - 20} картин`
        }

        await sendMessage(chatId, message)
      }
    }

    // Обробка натискання кнопки
    if (update.callback_query?.data === "get_results") {
      const chatId = update.callback_query.message.chat.id
      const results = await getVotingResults()

      // Відповідь на callback
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: update.callback_query.id }),
      })

      if (!results || results.results.length === 0) {
        await sendMessage(chatId, "Поки що немає голосів.", {
          inline_keyboard: [
            [{ text: "🔄 Оновити", callback_data: "get_results" }],
          ],
        })
      } else {
        let message = `<b>📊 Результати голосування</b>\n\n`
        message += `Всього голосів: <b>${results.totalVotes}</b>\n\n`

        results.results.slice(0, 20).forEach((item) => {
          const artwork = artworks.find(a => a.id.toString() === item.artworkId.toString())
          if (artwork) {
            const medal =
              item.position === 1 ? "🥇" :
                item.position === 2 ? "🥈" :
                  item.position === 3 ? "🥉" :
                    `${item.position}.`

            message += `${medal} <b>ID#${item.artworkId}</b> <b>${artwork.title}</b> — ${artwork.artist}: ${item.votes} голосів\n`
            message += "\n"
          }
        })

        if (results.results.length > 20) {
          message += `\n... та ще ${results.results.length - 20} картин`
        }

        await sendMessage(chatId, message, {
          inline_keyboard: [
            [{ text: "🔄 Оновити", callback_data: "get_results" }],
          ],
        })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Telegram webhook error:", error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

// GET запит для встановлення webhook
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get("action")

  if (action === "setWebhook") {
    const webhookUrl = `${request.nextUrl.origin}/api/telegram`

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setWebhook`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: webhookUrl }),
      }
    )

    const result = await response.json()
    return NextResponse.json(result)
  }

  if (action === "getWebhookInfo") {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getWebhookInfo`
    )
    const result = await response.json()
    return NextResponse.json(result)
  }

  return NextResponse.json({
    message: "Telegram Bot API",
    actions: ["setWebhook", "getWebhookInfo"]
  })
}
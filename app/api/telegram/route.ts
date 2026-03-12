import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

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
  
  const { data, error } = await supabase
    .from("votes")
    .select("artwork_id")
  
  if (error) {
    console.error("Error fetching votes:", error)
    return null
  }
  
  // Підрахунок голосів за кожну картину
  const voteCounts: Record<string, number> = {}
  data.forEach((vote) => {
    voteCounts[vote.artwork_id] = (voteCounts[vote.artwork_id] || 0) + 1
  })
  
  // Сортування за кількістю голосів
  const sorted = Object.entries(voteCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([id, count], index) => ({
      position: index + 1,
      artworkId: id,
      votes: count,
    }))
  
  return {
    results: sorted,
    totalVotes: data.length,
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
          message += `${medal} Картина #${item.artworkId}: <b>${item.votes}</b> голосів\n`
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
          const medal = item.position === 1 ? "🥇" : item.position === 2 ? "🥈" : item.position === 3 ? "🥉" : `${item.position}.`
          message += `${medal} Картина #${item.artworkId}: <b>${item.votes}</b> голосів\n`
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

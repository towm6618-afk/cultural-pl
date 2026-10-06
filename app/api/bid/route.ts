import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { artworks, BID_STEP } from "@/app/aukcions/artworks"
import nodemailer from "nodemailer"

// Телефон: приймаємо українські номери у форматах
// +380671234567 / 380671234567 / 0671234567 / з пробілами й тире
const PHONE_REGEX = /^(\+?38)?0\d{9}$/

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function normalizePhone(raw: string) {
  return raw.replace(/[\s\-()]/g, "")
}

// GET /api/bid?artworkId=1&limit=50
// Повертає ставки для роботи, від найновішої до найстарішої.
// Телефон НІКОЛИ не повертається клієнту — вибираємо лише потрібні поля.
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const artworkId = searchParams.get("artworkId")
    const limit = Math.min(Number(searchParams.get("limit")) || 50, 200)

    if (!artworkId) {
      return NextResponse.json({ error: "artworkId обов'язковий" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error, count } = await supabase
      .from("bids")
      .select("id, message, amount, created_at", { count: "exact" })
      .eq("artwork_id", artworkId)
      .order("amount", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Bid GET error:", error)
      return NextResponse.json({ error: "Помилка при завантаженні ставок" }, { status: 500 })
    }

    const highestBid = data && data.length > 0 ? data[0].amount : null

    return NextResponse.json({
      bids: data ?? [],
      total: count ?? (data?.length || 0),
      highestBid,
    })
  } catch (error) {
    console.error("Bid GET error:", error)
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 })
  }
}

// POST /api/bid  { artworkId, phone, message, amount }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    let { artworkId, phone, email, message, amount } = body ?? {}

    if (!artworkId || !phone || !email || amount === undefined || amount === null) {
      return NextResponse.json({ error: "Заповніть телефон, email і суму ставки" }, { status: 400 })
    }

    const artwork = artworks.find((a) => a.id === String(artworkId))
    if (!artwork) {
      return NextResponse.json({ error: "Роботу не знайдено" }, { status: 400 })
    }

    phone = normalizePhone(String(phone).trim())
    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: "Введіть коректний номер телефону, наприклад 0671234567" },
        { status: 400 },
      )
    }

    email = String(email).toLowerCase().trim()
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Введіть коректний email" }, { status: 400 })
    }

    const numericAmount = Number(amount)
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      return NextResponse.json({ error: "Некоректна сума ставки" }, { status: 400 })
    }

    message = message ? String(message).trim().slice(0, 500) : null

    const supabase = await createClient()

    // Перевіряємо поточну найвищу ставку по цій роботі
    const { data: existingBids, error: fetchError } = await supabase
      .from("bids")
      .select("amount, email")
      .eq("artwork_id", String(artworkId))
      .order("amount", { ascending: false })
      .limit(1)

    if (fetchError) {
      console.error("Bid fetch current error:", fetchError)
      return NextResponse.json({ error: "Помилка при перевірці ставок" }, { status: 500 })
    }

    const currentHighest = existingBids && existingBids.length > 0 ? existingBids[0].amount : artwork.startPrice
    const minAllowed = existingBids && existingBids.length > 0 ? currentHighest + BID_STEP : artwork.startPrice

    if (numericAmount < minAllowed) {
      return NextResponse.json(
        {
          error:
            existingBids && existingBids.length > 0
              ? `Мінімальна ставка — ${minAllowed} грн (поточна ${currentHighest} грн + крок ${BID_STEP} грн)`
              : `Ставка не може бути меншою за стартову ціну (${artwork.startPrice} грн)`,
        },
        { status: 400 },
      )
    }

    // Ставка має відповідати кроку: стартова ціна + N * BID_STEP
    if ((numericAmount - artwork.startPrice) % BID_STEP !== 0) {
      return NextResponse.json(
        { error: `Ставка має бути кратною кроку ${BID_STEP} грн (наприклад, ${minAllowed} грн)` },
        { status: 400 },
      )
    }

    const { error: insertError } = await supabase.from("bids").insert({
      artwork_id: String(artworkId),
      phone,
      email,
      message,
      amount: numericAmount,
    })

    if (insertError) {
      console.error("Bid insert error:", insertError)
      return NextResponse.json({ error: "Помилка при збереженні ставки" }, { status: 500 })
    }

    // Сповіщаємо попереднього лідера, якого щойно перебили (якщо в нього є email
    // і це не та сама людина). Помилка пошти НЕ ламає ставку.
    const previousLeaderEmail =
      existingBids && existingBids.length > 0 ? (existingBids[0].email as string | null) : null

    if (previousLeaderEmail && previousLeaderEmail !== email) {
      try {
        await sendOutbidEmail({
          to: previousLeaderEmail,
          artworkTitle: artwork.title,
          oldAmount: currentHighest,
          newAmount: numericAmount,
          minNextBid: numericAmount + BID_STEP,
          auctionUrl: `${new URL(req.url).origin}/aukcions`,
        })
      } catch (mailError) {
        console.error("Outbid email error:", mailError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Bid POST error:", error)
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

async function sendOutbidEmail(opts: {
  to: string
  artworkTitle: string
  oldAmount: number
  newAmount: number
  minNextBid: number
  auctionUrl: string
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const title = escapeHtml(opts.artworkTitle)

  await transporter.sendMail({
    from: `"Аукціон" <${process.env.GMAIL_USER}>`,
    to: opts.to,
    subject: `Вашу ставку перебили — «${opts.artworkTitle}»`,
    html: `
      <div style="font-family: sans-serif; text-align: center; padding: 20px;">
        <h2 style="color: #333;">Вашу ставку перебили</h2>
        <p style="color: #555; font-size: 16px;">
          На роботу «${title}» зроблено нову ставку —
          <b>${opts.newAmount} грн</b> (ваша була ${opts.oldAmount} грн).
        </p>
        <p style="color: #555;">Щоб повернути лідерство, зробіть ставку від ${opts.minNextBid} грн.</p>
        <a href="${opts.auctionUrl}"
           style="display: inline-block; margin-top: 10px; padding: 12px 24px; background: #111; color: #fff; border-radius: 8px; text-decoration: none;">
          Перейти до аукціону
        </a>
      </div>
    `,
  })
}

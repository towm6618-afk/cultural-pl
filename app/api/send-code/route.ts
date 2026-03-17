import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    const supabase = await createClient()

    // 1. Проверка на дубликат голосования
    const { data: existingVote } = await supabase
      .from("votes")
      .select("email")
      .eq("email", email)
      .maybeSingle()

    if (existingVote) {
      return NextResponse.json({ error: "Ви вже проголосували!" }, { status: 403 })
    }

    // 2. Генерация 4-значного кода
    const code = Math.floor(1000 + Math.random() * 9000).toString()
    const expiresAt = new Date(Date.now() + 10 * 60000).toISOString()

    // 3. Сохранение кода в Supabase
    const { error: upsertError } = await supabase.from("verification_codes").upsert(
      { email, code, expires_at: expiresAt },
      { onConflict: 'email' }
    )

    if (upsertError) throw upsertError

    // 4. Настройка Nodemailer (Твой Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // 5. Отправка
    await transporter.sendMail({
      from: `"Поліська Казка" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Код для голосування: " + code,
      html: `
        <div style="font-family: sans-serif; text-align: center; padding: 20px;">
          <h2 style="color: #333;">Ваш код підтвердження:</h2>
          <div style="font-size: 32px; font-weight: bold; background: #f3f4f6; padding: 15px; border-radius: 8px; display: inline-block; letter-spacing: 4px;">
            ${code}
          </div>
          <p style="color: #666; margin-top: 15px;">Код дійсний протягом 10 хвилин.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Send Code Error:", error)
    return NextResponse.json({ error: "Не вдалося надіслати код" }, { status: 500 })
  }
}
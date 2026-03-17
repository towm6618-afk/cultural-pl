import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    let { email } = await req.json()
    if (!email) return NextResponse.json({ error: "Email обов'язковий" }, { status: 400 })

    email = email.toLowerCase().trim()
    const supabase = await createClient()

    // 1. Перевірка, чи цей email вже є в таблиці votes
    const { data: existingVote } = await supabase
      .from("votes")
      .select("id")
      .eq("email", email)
      .maybeSingle()

    if (existingVote) {
      return NextResponse.json({ error: "Ви вже проголосували. Один email = один голос." }, { status: 400 })
    }

    // 2. Генерація 4-значного коду
    const code = Math.floor(1000 + Math.random() * 9000).toString()
    const expiresAt = new Date(Date.now() + 10 * 60000).toISOString() // Код діє 10 хвилин

    // 3. Збереження коду в БД (оновимо, якщо такий email вже запитував код)
    const { error: upsertError } = await supabase
      .from("verification_codes")
      .upsert({ email, code, expires_at: expiresAt }, { onConflict: 'email' })

    if (upsertError) {
      console.error("DB Error:", upsertError)
      return NextResponse.json({ error: "Помилка бази даних при збереженні коду" }, { status: 500 })
    }

    // 4. Відправка листа
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // ТУТ МАЄ БУТИ ПАРОЛЬ ДОДАТКУ (16 символів), а не звичайний пароль!
      },
    })

    await transporter.sendMail({
      from: `"Народне голосування" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Код підтвердження: ${code}`,
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
  } catch (error) {
    console.error("Send Code Error:", error)
    return NextResponse.json({ error: "Помилка відправки листа. Перевірте налаштування пошти." }, { status: 500 })
  }
}
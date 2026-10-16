import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { appendRowToSheet } from "@/lib/google-sheets"
import {
  ALLOWED_EXTENSIONS,
  CATEGORIES,
  MAX_FILES,
  MESSENGERS,
  isSubmissionOpen,
} from "@/app/zayavka/config"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max)

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function kyivTimestamp() {
  // Формат як у Google Forms: 01.11.2026 14:05:33
  const parts = new Intl.DateTimeFormat("uk-UA", {
    timeZone: "Europe/Kyiv",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ""
  return `${get("day")}.${get("month")}.${get("year")} ${get("hour")}:${get("minute")}:${get("second")}`
}

// Приймаємо лише посилання на наші завантаження у Vercel Blob (папка applications/)
function isOurBlobUrl(raw: string) {
  try {
    const u = new URL(raw)
    return (
      u.protocol === "https:" &&
      u.hostname.endsWith(".public.blob.vercel-storage.com") &&
      decodeURIComponent(u.pathname).startsWith("/applications/") &&
      ALLOWED_EXTENSIONS.some((ext) => decodeURIComponent(u.pathname).toLowerCase().endsWith(ext))
    )
  } catch {
    return false
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isSubmissionOpen()) {
      return NextResponse.json({ error: "Прийом заявок ще не відкрито" }, { status: 403 })
    }

    const body = await req.json()

    // Honeypot: бот заповнив приховане поле — вдаємо, що все гаразд
    if (body?.website) return NextResponse.json({ success: true })

    const fullName = clean(body.fullName, 150)
    const city = clean(body.city, 150)
    const ageNum = Number(body.age)
    const category = body.category as keyof typeof CATEGORIES
    const email = clean(body.email, 254).toLowerCase()
    const phone = clean(body.phone, 30)
    const messenger = clean(body.messenger, 20)
    const socials = clean(body.socials, 500)
    const motivation = clean(body.motivation, 5000)
    const files: { name: string; url: string }[] = Array.isArray(body.files) ? body.files : []

    if (fullName.split(/\s+/).length < 2) {
      return NextResponse.json({ error: "Вкажіть прізвище, ім'я та по батькові" }, { status: 400 })
    }
    if (!Number.isInteger(ageNum) || ageNum < 16 || ageNum > 30) {
      return NextResponse.json({ error: "Участь беруть художники віком від 16 до 30 років" }, { status: 400 })
    }
    if (!city) return NextResponse.json({ error: "Вкажіть місто проживання" }, { status: 400 })
    if (!(category in CATEGORIES)) {
      return NextResponse.json({ error: "Оберіть категорію: художник чи аматор" }, { status: 400 })
    }
    if (!EMAIL_REGEX.test(email)) return NextResponse.json({ error: "Введіть коректний email" }, { status: 400 })

    const digits = phone.replace(/\D/g, "")
    if (digits.length < 9 || digits.length > 15) {
      return NextResponse.json({ error: "Введіть коректний номер телефону" }, { status: 400 })
    }
    if (!(MESSENGERS as readonly string[]).includes(messenger)) {
      return NextResponse.json({ error: "Оберіть месенджер" }, { status: 400 })
    }
    if (files.length < 1 || files.length > MAX_FILES) {
      return NextResponse.json({ error: `Додайте від 1 до ${MAX_FILES} робіт` }, { status: 400 })
    }
    if (!files.every((f) => f && typeof f.url === "string" && isOurBlobUrl(f.url))) {
      return NextResponse.json({ error: "Некоректні файли. Завантажте роботи ще раз" }, { status: 400 })
    }
    if (body.agreeContract !== true || body.agreePersonalData !== true) {
      return NextResponse.json({ error: "Потрібні обидві згоди" }, { status: 400 })
    }

    // Порядок колонок = порядок у таблиці (A:J)
    const row = [
      kyivTimestamp(),
      `${fullName}, ${ageNum} ${ageWord(ageNum)}, ${city}`,
      CATEGORIES[category],
      email,
      `${phone}, ${messenger}`,
      socials,
      files.map((f) => `${clean(f.name, 200)} — ${f.url}`).join("\n"),
      motivation,
      "Так",
      "Так",
    ]

    // Якщо запис у таблицю не вдався — віддаємо помилку, щоб людина могла повторити
    try {
      await appendRowToSheet(row, files.map((f) => f.url))
    } catch (sheetError) {
      console.error("Application sheet error:", sheetError)
      return NextResponse.json({ error: "Не вдалося зберегти заявку. Спробуйте ще раз за кілька хвилин" }, { status: 500 })
    }

    // Лист-підтвердження. Помилка пошти НЕ ламає заявку.
    try {
      await sendConfirmationEmail({
        to: email,
        name: fullName,
        worksCount: files.length,
        siteUrl: new URL(req.url).origin,
      })
    } catch (mailError) {
      console.error("Application email error:", mailError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Application POST error:", error)
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 })
  }
}

function ageWord(n: number) {
  const last = n % 10
  const lastTwo = n % 100
  if (lastTwo >= 11 && lastTwo <= 14) return "років"
  if (last === 1) return "рік"
  if (last >= 2 && last <= 4) return "роки"
  return "років"
}

async function sendConfirmationEmail(opts: { to: string; name: string; worksCount: number; siteUrl: string }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  })

  const firstName = opts.name.split(/\s+/)[1] ?? opts.name

  await transporter.sendMail({
    from: `"Поліська Казка" <${process.env.GMAIL_USER}>`,
    to: opts.to,
    subject: "Вашу заявку на конкурс «Поліська Казка» прийнято",
    html: `
      <div style="font-family: sans-serif; text-align: center; padding: 20px;">
        <h2 style="color: #333;">Заявку прийнято ✔</h2>
        <p style="color: #555; font-size: 16px;">
          ${escapeHtml(firstName)}, дякуємо за участь у другому Національному конкурсі народного мистецтва «Поліська Казка»!
        </p>
        <p style="color: #555; font-size: 16px;">
          Ми отримали вашу заявку та робіт: <b>${opts.worksCount}</b>.
        </p>
        <p style="color: #555;">Новини конкурсу та умови участі — на нашому сайті.</p>
        <a href="${opts.siteUrl}/konkurs"
           style="display: inline-block; margin-top: 10px; padding: 12px 24px; background: #111; color: #fff; border-radius: 8px; text-decoration: none;">
          Перейти на сайт
        </a>
      </div>
    `,
  })
}

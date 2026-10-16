import { createSign } from "crypto"

// Додає рядок у Google Таблицю через Sheets API.
// Працює без додаткових бібліотек: сервісний акаунт → JWT → access token.
//
// Потрібні змінні середовища:
//   GOOGLE_SERVICE_ACCOUNT_EMAIL  — email сервісного акаунта
//   GOOGLE_PRIVATE_KEY            — приватний ключ з JSON (можна з \n)
//   GOOGLE_SHEET_ID               — ID таблиці з її URL
//   GOOGLE_SHEET_TAB              — назва аркуша (необов'язково; без неї береться перший аркуш)

// Приводить приватний ключ до коректного PEM, як би його не вставили у Vercel:
// з лапками, з буквальними "\\n", в один рядок, з пробілами замість переносів
// або навіть цілим JSON-файлом ключа.
function normalizePrivateKey(raw: string) {
  let key = raw.trim()

  if (key.startsWith("{")) {
    try {
      key = String(JSON.parse(key).private_key ?? "")
    } catch {
      /* залишаємо як є */
    }
  }

  key = key.replace(/^["']|["']$/g, "")

  const match = key.match(/-----BEGIN ([A-Z ]*PRIVATE KEY)-----([\s\S]*?)-----END \1-----/)
  if (!match) throw new Error("GOOGLE_PRIVATE_KEY: не знайдено блок BEGIN/END PRIVATE KEY")

  const body = match[2].replace(/\\n/g, "").replace(/[^A-Za-z0-9+/=]/g, "")
  const lines = body.match(/.{1,64}/g)?.join("\n") ?? ""
  return `-----BEGIN ${match[1]}-----\n${lines}\n-----END ${match[1]}-----\n`
}

let cachedToken: { value: string; expiresAt: number } | null = null

function base64url(input: string | Buffer) {
  return Buffer.from(input).toString("base64url")
}

async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const rawKey = process.env.GOOGLE_PRIVATE_KEY
  if (!email || !rawKey) throw new Error("Не налаштовано GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY")

  const privateKey = normalizePrivateKey(rawKey)
  const now = Math.floor(Date.now() / 1000)

  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))
  const claim = base64url(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  )
  const signature = createSign("RSA-SHA256").update(`${header}.${claim}`).sign(privateKey, "base64url")

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claim}.${signature}`,
    }),
  })

  if (!res.ok) throw new Error(`Google OAuth помилка: ${res.status} ${await res.text()}`)
  const data = await res.json()
  cachedToken = { value: data.access_token, expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000 }
  return cachedToken.value
}

export async function appendRowToSheet(row: string[]) {
  const sheetId = process.env.GOOGLE_SHEET_ID
  if (!sheetId) throw new Error("Не налаштовано GOOGLE_SHEET_ID")

  // Якщо GOOGLE_SHEET_TAB не задано — пишемо в ПЕРШИЙ аркуш таблиці (як би він не називався)
  const tab = process.env.GOOGLE_SHEET_TAB?.trim()
  const range = encodeURIComponent(tab ? `'${tab.replace(/'/g, "''")}'!A:J` : "A:J")
  const token = await getAccessToken()

  // RAW — значення записуються як текст (захист від формул типу =IMPORTXML(...))
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [row] }),
    },
  )

  if (!res.ok) throw new Error(`Google Sheets помилка: ${res.status} ${await res.text()}`)
}

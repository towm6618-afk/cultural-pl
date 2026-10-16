// ============================================================
// НАЛАШТУВАННЯ ФОРМИ ЗАЯВКИ
// ============================================================

// Коли відкривається прийом заявок (київський час, UTC+2 у листопаді).
// До цієї дати форма на сайті заблокована, а сервер відхиляє заявки.
// Щоб відкрити форму одразу — постав null.
export const SUBMISSIONS_OPEN_FROM: string | null = "2026-10-15T00:00:00+02:00"

export const MAX_FILES = 3
export const MAX_FILE_SIZE_MB = 20
export const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024

export const ALLOWED_TYPES = ["image/png", "image/jpeg"]
export const ALLOWED_EXTENSIONS = [".png", ".jpg", ".jpeg"]

export const MESSENGERS = ["WhatsApp", "Telegram", "Viber"] as const

export const CATEGORIES = {
  professional: "Художник (з професійною освітою)",
  amateur: "Аматор",
} as const

export function isSubmissionOpen(now = Date.now()) {
  if (!SUBMISSIONS_OPEN_FROM) return true
  return now >= new Date(SUBMISSIONS_OPEN_FROM).getTime()
}

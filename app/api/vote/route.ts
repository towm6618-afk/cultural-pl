import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    const { email, code, artworkId } = await req.json()

    if (!email || !code || !artworkId) {
      return NextResponse.json({ error: "Недостатньо даних" }, { status: 400 })
    }

    // Инициализируем клиент ПРАВИЛЬНО (асинхронно и без ручных URL/KEY)
    const supabase = await createClient()

    // Преобразуем artworkId в число
    const parsedArtworkId = parseInt(artworkId, 10)

    // 1. Ищем код в базе. 
    // Используем .maybeSingle(), чтобы избежать ошибки 500, если кода нет
    const { data: record, error: fetchError } = await supabase
      .from("verification_codes")
      .select("*")
      .eq("email", email)
      .maybeSingle()

    if (fetchError || !record) {
      return NextResponse.json({ error: "Код не знайдено или вичерпано. Запросіть новий." }, { status: 400 })
    }

    // 2. Проверяем код
    if (record.code !== code) {
      return NextResponse.json({ error: "Невірний код" }, { status: 400 })
    }

    // 3. Проверка времени
    if (new Date(record.expires_at) < new Date()) {
      return NextResponse.json({ error: "Час дії коду вичерпано." }, { status: 400 })
    }

    // 4. Сохраняем голос
    const { error: insertError } = await supabase
      .from("votes")
      .insert({
        email: email,
        artwork_id: parsedArtworkId
      })

    if (insertError) {
      if (insertError.code === '23505') {
        return NextResponse.json({ error: "Ви вже проголосували!" }, { status: 403 })
      }
      throw insertError
    }

    // 5. Удаляем код
    await supabase
      .from("verification_codes")
      .delete()
      .eq("email", email)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Vote API Error:", error)
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 })
  }
}
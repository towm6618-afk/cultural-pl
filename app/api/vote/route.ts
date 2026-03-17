import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    let { email, code, artworkId } = await req.json()
    if (!email || !code || !artworkId) {
      return NextResponse.json({ error: "Недостатньо даних" }, { status: 400 })
    }

    email = email.toLowerCase().trim()
    const supabase = await createClient()

    // 1. Шукаємо код в базі
    const { data: record, error: fetchError } = await supabase
      .from("verification_codes")
      .select("*")
      .eq("email", email)
      .maybeSingle()

    if (fetchError || !record) {
      return NextResponse.json({ error: "Код не знайдено. Поверніться і надішліть новий." }, { status: 400 })
    }

    // 2. Перевіряємо чи код співпадає
    if (record.code !== code) {
      return NextResponse.json({ error: "Невірний код." }, { status: 400 })
    }

    // 3. Перевіряємо час дії
    if (new Date(record.expires_at).getTime() < Date.now()) {
      return NextResponse.json({ error: "Час дії коду вичерпано. Надішліть новий." }, { status: 400 })
    }

    // 4. Зберігаємо голос
    const { error: insertError } = await supabase
      .from("votes")
      .insert({ email, artwork_id: artworkId })

    if (insertError) {
      if (insertError.code === '23505') {
        return NextResponse.json({ error: "Ви вже проголосували!" }, { status: 400 })
      }
      return NextResponse.json({ error: "Помилка при збереженні голосу" }, { status: 500 })
    }

    // 5. Видаляємо використаний код
    await supabase.from("verification_codes").delete().eq("email", email)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Vote API Error:", error)
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 })
  }
}
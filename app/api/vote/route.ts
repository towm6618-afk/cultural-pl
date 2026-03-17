import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { email, code, artworkId } = await req.json()

    if (!email || !code || !artworkId) {
      return NextResponse.json({ error: "Недостатньо даних" }, { status: 400 })
    }

    // Перетворюємо artworkId в число, бо у твоїй базі це INTEGER
    const parsedArtworkId = parseInt(artworkId, 10)

    // 1. Шукаємо код у базі Supabase
    const { data: record, error: fetchError } = await supabase
      .from("verification_codes")
      .select("*")
      .eq("email", email)
      .single()

    if (fetchError || !record) {
      return NextResponse.json({ error: "Код не знайдено. Запросіть новий." }, { status: 400 })
    }

    // 2. Перевіряємо, чи код співпадає
    if (record.code !== code) {
      return NextResponse.json({ error: "Невірний код" }, { status: 400 })
    }

    // 3. Перевіряємо, чи не закінчився час (10 хвилин)
    if (new Date(record.expires_at) < new Date()) {
      return NextResponse.json({ error: "Час дії коду вичерпано. Запросіть новий." }, { status: 400 })
    }

    // 4. Зберігаємо голос у ТВОЮ таблицю votes
    const { error: insertError } = await supabase
      .from("votes")
      .insert({
        email: email,
        artwork_id: parsedArtworkId
      })

    // Обробляємо твій UNIQUE(email, artwork_id)
    if (insertError) {
      // Код 23505 означає порушення унікальності в PostgreSQL
      if (insertError.code === '23505') {
        return NextResponse.json({ error: "Ви вже проголосували за цю картину!" }, { status: 403 })
      }
      throw insertError // Якщо інша помилка — кидаємо далі
    }

    // 5. Видаляємо використаний код
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
import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// GET /api/bid/highest
// Повертає найвищу ставку по КОЖНІЙ роботі одразу — щоб показати
// актуальну ціну в сітці робіт, без відкриття картки.
// Формат відповіді: { highest: { [artworkId]: number } }
export async function GET() {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("bids")
      .select("artwork_id, amount")
      .order("amount", { ascending: false })

    if (error) {
      console.error("Bid highest GET error:", error)
      return NextResponse.json({ error: "Помилка при завантаженні ставок" }, { status: 500 })
    }

    const highest: Record<string, number> = {}
    for (const row of data ?? []) {
      // Дані відсортовані за спаданням amount, тому перше входження
      // для кожного artwork_id і є найвищою ставкою.
      if (!(row.artwork_id in highest)) {
        highest[row.artwork_id] = row.amount
      }
    }

    return NextResponse.json({ highest })
  } catch (error) {
    console.error("Bid highest GET error:", error)
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 })
  }
}
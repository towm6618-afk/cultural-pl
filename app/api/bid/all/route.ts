import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// GET /api/bid/all?limit=5
// Повертає для КОЖНОЇ роботи останні ставки (топ `limit` за сумою) та
// загальну кількість ставок — одним запитом, замість окремого запиту
// на кожну роботу. Потрібно, бо тепер ставки показуються одразу на
// сторінці під кожною роботою, а не тільки при відкритті картки.
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const limit = Math.min(Number(searchParams.get("limit")) || 5, 50)

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("bids")
      .select("id, artwork_id, message, amount, created_at")
      .order("amount", { ascending: false })
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Bid ALL GET error:", error)
      return NextResponse.json({ error: "Помилка при завантаженні ставок" }, { status: 500 })
    }

    const byArtwork: Record<
      string,
      { bids: { id: string; message: string | null; amount: number; created_at: string }[]; total: number }
    > = {}

    for (const row of data ?? []) {
      const key = row.artwork_id
      if (!byArtwork[key]) byArtwork[key] = { bids: [], total: 0 }
      byArtwork[key].total += 1
      // Дані вже відсортовані за спаданням amount, тому просте обрізання
      // до `limit` елементів на роботу зберігає правильний порядок.
      if (byArtwork[key].bids.length < limit) {
        byArtwork[key].bids.push({
          id: row.id,
          message: row.message,
          amount: row.amount,
          created_at: row.created_at,
        })
      }
    }

    return NextResponse.json({ byArtwork })
  } catch (error) {
    console.error("Bid ALL GET error:", error)
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 })
  }
}
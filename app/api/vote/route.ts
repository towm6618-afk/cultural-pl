import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    let { email, artworkId } = await request.json()

    if (email) {
      email = email.toLowerCase().trim()
    }
    if (!email || !artworkId) {
      return NextResponse.json(
        { error: "Email та ID картини обов'язкові" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Невірний формат email" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Check if this email already voted for ANY artwork
    const { data: existingVote } = await supabase
      .from("votes")
      .select("id, artwork_id")
      .eq("email", email)
      .single()

    if (existingVote) {
      return NextResponse.json(
        { error: "Ви вже проголосували. Один email може голосувати лише один раз." },
        { status: 400 }
      )
    }

    // Insert the vote
    const { error } = await supabase.from("votes").insert({
      email,
      artwork_id: artworkId,
    })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: "Помилка при збереженні голосу" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: "Дякуємо за ваш голос!" })
  } catch (error) {
    console.error("Vote error:", error)
    return NextResponse.json(
      { error: "Внутрішня помилка сервера" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const supabase = await createClient()

    // Get vote counts for each artwork
    const { data, error } = await supabase
      .from("votes")
      .select("artwork_id")

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Помилка при отриманні даних" }, { status: 500 })
    }

    // Count votes per artwork
    const voteCounts: Record<string, number> = {}
    data?.forEach((vote) => {
      voteCounts[vote.artwork_id] = (voteCounts[vote.artwork_id] || 0) + 1
    })

    return NextResponse.json({ voteCounts })
  } catch (error) {
    console.error("Get votes error:", error)
    return NextResponse.json(
      { error: "Внутрішня помилка сервера" },
      { status: 500 }
    )
  }
}
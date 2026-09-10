"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Check, Loader2, ChevronDown, ChevronUp, Gavel } from "lucide-react"
import { artworks, type AuctionArtwork } from "./artworks"

interface Bid {
  id: string
  message: string | null
  amount: number
  created_at: string
}

const VISIBLE_BIDS = 5

function formatPrice(value: number) {
  return new Intl.NumberFormat("uk-UA").format(value) + " грн"
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export default function AuctionPage() {
  const [selected, setSelected] = useState<AuctionArtwork | null>(null)

  // Найвища ставка по кожній роботі — для відображення прямо в сітці,
  // без відкриття картки.
  const [highestBids, setHighestBids] = useState<Record<string, number>>({})

  useEffect(() => {
    fetch("/api/bid/highest")
      .then((res) => res.json())
      .then((data) => {
        if (data?.highest) setHighestBids(data.highest)
      })
      .catch(() => {
        // мовчки ігноруємо — сітка все одно покаже стартові ціни
      })
  }, [])

  // Ставки/повідомлення обраної роботи
  const [bids, setBids] = useState<Bid[]>([])
  const [isLoadingBids, setIsLoadingBids] = useState(false)
  const [showAllBids, setShowAllBids] = useState(false)

  // Форма ставки
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [amount, setAmount] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const currentHighest = bids.length > 0 ? bids[0].amount : null

  const loadBids = async (artworkId: string) => {
    setIsLoadingBids(true)
    try {
      const res = await fetch(`/api/bid?artworkId=${artworkId}&limit=100`)
      const data = await res.json()
      if (res.ok) {
        setBids(data.bids || [])
      }
    } catch {
      // мовчки ігноруємо — форма ставки все одно працює
    } finally {
      setIsLoadingBids(false)
    }
  }

  useEffect(() => {
    if (selected) {
      loadBids(selected.id)
    }
  }, [selected])

  const openArtwork = (artwork: AuctionArtwork) => {
    setSelected(artwork)
    setBids([])
    setShowAllBids(false)
    setPhone("")
    setMessage("")
    setAmount("")
    setSubmitStatus("idle")
    setErrorMessage("")
  }

  const closeDialog = () => {
    setSelected(null)
  }

  const handleSubmitBid = async () => {
    if (!selected || !phone || !amount) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const res = await fetch("/api/bid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artworkId: selected.id,
          phone,
          message,
          amount: Number(amount),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Помилка при відправці ставки")
        return
      }

      setSubmitStatus("success")
      setHighestBids((prev) => ({ ...prev, [selected.id]: Number(amount) }))
      setPhone("")
      setMessage("")
      setAmount("")
      await loadBids(selected.id)
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Помилка з'єднання з сервером. Спробуйте пізніше.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const visibleBids = showAllBids ? bids : bids.slice(0, VISIBLE_BIDS)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gavel className="w-4 h-4" />
              Благодійний аукціон
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Аукціон робіт
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Натисніть на роботу, щоб побачити деталі та зробити ставку.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {artworks.map((artwork) => (
                <button
                  key={artwork.id}
                  onClick={() => openArtwork(artwork)}
                  className="group text-left rounded-xl border border-border overflow-hidden bg-card hover:border-primary transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden bg-secondary/10">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium truncate">{artwork.title}</p>
                    <p className="text-xs text-muted mt-1">
                      {highestBids[artwork.id]
                        ? `Ставка: ${formatPrice(highestBids[artwork.id])}`
                        : `Старт: ${formatPrice(artwork.startPrice)}`}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) closeDialog()
        }}
      >
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">
              {selected?.title}
            </DialogTitle>
          </DialogHeader>

          {selected && (
            <div className="space-y-4">
              <div className="relative w-full h-[35vh] min-h-[220px] flex items-center justify-center rounded-lg overflow-hidden bg-secondary/10">
                <img
                  src={selected.image || "/placeholder.svg"}
                  alt={selected.title}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>

              <div className="text-sm text-muted space-y-1">
                <p>{selected.size}</p>
                <p>{selected.materials}</p>
              </div>

              <div className="flex items-center justify-between bg-secondary/20 rounded-lg px-4 py-3">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">
                    {currentHighest ? "Поточна ставка" : "Стартова ціна"}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {formatPrice(currentHighest ?? selected.startPrice)}
                  </p>
                </div>
                <Badge variant="secondary">
                  {bids.length} {bids.length === 1 ? "ставка" : "ставок"}
                </Badge>
              </div>

              {/* Список останніх ставок/повідомлень */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Останні ставки</p>

                {isLoadingBids ? (
                  <div className="flex items-center gap-2 text-sm text-muted py-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Завантаження...
                  </div>
                ) : bids.length === 0 ? (
                  <p className="text-sm text-muted py-2">
                    Поки що немає ставок. Будьте першими!
                  </p>
                ) : (
                  <div className="space-y-2">
                    {visibleBids.map((bid) => (
                      <div
                        key={bid.id}
                        className="border border-border rounded-lg px-3 py-2 text-sm"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-foreground">
                            {formatPrice(bid.amount)}
                          </span>
                          <span className="text-xs text-muted shrink-0">
                            {formatDate(bid.created_at)}
                          </span>
                        </div>
                        {bid.message && (
                          <p className="text-muted mt-1">{bid.message}</p>
                        )}
                      </div>
                    ))}

                    {bids.length > VISIBLE_BIDS && (
                      <button
                        onClick={() => setShowAllBids((v) => !v)}
                        className="w-full flex items-center justify-center gap-1 text-sm text-primary hover:underline py-1"
                      >
                        {showAllBids ? (
                          <>
                            Згорнути <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Показати всі ({bids.length}) <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Форма ставки */}
              {submitStatus === "success" ? (
                <div className="flex items-center justify-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg">
                  <Check className="w-5 h-5" />
                  <span>Дякуємо! Вашу ставку прийнято.</span>
                </div>
              ) : (
                <div className="space-y-3 pt-2 border-t border-border">
                  <p className="text-sm font-medium text-foreground pt-3">Зробити ставку</p>

                  <Input
                    type="tel"
                    placeholder="Ваш номер телефону, напр. 0671234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isSubmitting}
                  />

                  <Input
                    type="number"
                    placeholder={`Сума ставки (грн), від ${formatPrice(
                      (currentHighest ?? selected.startPrice) + (currentHighest ? 1 : 0),
                    )}`}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={isSubmitting}
                  />

                  <Textarea
                    placeholder="Ваше повідомлення (необов'язково)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                    maxLength={500}
                  />

                  {submitStatus === "error" && (
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  )}

                  <Button
                    onClick={handleSubmitBid}
                    disabled={!phone || !amount || isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Відправка...
                      </>
                    ) : (
                      "Зробити ставку"
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
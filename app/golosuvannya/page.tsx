"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { X, Check, Loader2 } from "lucide-react"

// Временные картинки для тестирования (8 штук)
const artworks = [
  {
    id: "1",
    title: "Робота №1",
    artist: "Художник 1",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Робота №2",
    artist: "Художник 2",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Робота №3",
    artist: "Художник 3",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Робота №4",
    artist: "Художник 4",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Робота №5",
    artist: "Художник 5",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Робота №6",
    artist: "Художник 6",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=400&fit=crop",
  },
  {
    id: "7",
    title: "Робота №7",
    artist: "Художник 7",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    id: "8",
    title: "Робота №8",
    artist: "Художник 8",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&h=400&fit=crop",
  },
]

export default function VotingPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleVote = async () => {
    if (!selectedArtwork || !email) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          artworkId: selectedArtwork.id,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Помилка при голосуванні")
        return
      }

      setSubmitStatus("success")
      setTimeout(() => {
        setSelectedArtwork(null)
        setEmail("")
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Помилка з'єднання")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Народне голосування
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Допоможіть обрати переможців першого національного конкурсу народного мистецтва для молодих художників.
            </p>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Натисніть на картину, щоб проголосувати за улюблений твір
            </p>
          </div>
        </section>

        {/* Artworks Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
              {artworks.map((artwork) => (
                <button
                  key={artwork.id}
                  onClick={() => setSelectedArtwork(artwork)}
                  className="group relative aspect-square overflow-hidden rounded-lg border-2 border-transparent hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-left">
                      <p className="text-xs font-medium truncate">{artwork.title}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Vote Dialog */}
      <Dialog open={!!selectedArtwork} onOpenChange={(open) => !open && setSelectedArtwork(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Голосування</DialogTitle>
            <DialogDescription>
              Введіть ваш email, щоб проголосувати за цю роботу
            </DialogDescription>
          </DialogHeader>

          {selectedArtwork && (
            <div className="space-y-4">
              <div className="aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-lg">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="font-medium">{selectedArtwork.title}</h3>
                <p className="text-sm text-muted">{selectedArtwork.artist}</p>
              </div>

              {submitStatus === "success" ? (
                <div className="flex items-center justify-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg">
                  <Check className="w-5 h-5" />
                  <span>Дякуємо за ваш голос!</span>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                    {submitStatus === "error" && (
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                  </div>

                  <Button
                    onClick={handleVote}
                    disabled={!email || isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Обробка...
                      </>
                    ) : (
                      "Проголосувати"
                    )}
                  </Button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

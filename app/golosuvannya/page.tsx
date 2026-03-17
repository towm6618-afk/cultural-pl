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

// Временные картинки для тестирования (83 штуки)
const artworks = [
  { id: "1", title: "Ба й корівка", artist: "Черничко Марія, 23 роки", image: "/konkurs/1.webp" },
  { id: "2", title: "Без назви (Краказяблікі)", artist: "Трішневська Дар'я", image: "/konkurs/2.webp" },
  { id: "3", title: "Без назви", artist: "Заглада Дар'я, 19 років", image: "/konkurs/3.webp" },
  { id: "4", title: "Без назви", artist: "Заглада Дар'я, 19 років", image: "/konkurs/4.webp" },
  { id: "5", title: "Без назви", artist: "Запнивітренко Єлизавета, 19 років", image: "/konkurs/5.webp" },
  { id: "6", title: "Без назви", artist: "Ковальчук Єва, 16р", image: "/konkurs/6.webp" },
  { id: "7", title: "Без назви", artist: "Кулібаба Аделіна, 19 років", image: "/konkurs/7.webp" },
  { id: "8", title: "Без назви", artist: "Мельниченко Анастасія, 16 років", image: "/konkurs/8.webp" },
  { id: "9", title: "Без назви", artist: "Покиньборода Софія, 17 років", image: "/konkurs/9.webp" },
  { id: "10", title: "Без назви", artist: "Покиньборода Софія, 17 років", image: "/konkurs/10.webp" },
  { id: "11", title: "Без назви", artist: "Трофімчук Тетяна", image: "/konkurs/11.webp" },
  { id: "12", title: "Без назви", artist: "Трофімчук Тетяна", image: "/konkurs/12.webp" },
  { id: "13", title: "Берегиня", artist: "Коренська Ангеліна, 16 років", image: "/konkurs/13.webp" },
  { id: "14", title: "Біжить заєць", artist: "Оцвей Єлізавєта, 19 років", image: "/konkurs/14.webp" },
  { id: "15", title: "Вартова нічних зір", artist: "Литвин Марія, 30 років", image: "/konkurs/15.webp" },
  { id: "16", title: "Без назви", artist: "Власенко Катерина, 19 років", image: "/konkurs/16.webp" },
  { id: "17", title: "Гірський козлик", artist: "Волошенко Олена, 27 років", image: "/konkurs/17.webp" },
  { id: "18", title: "Глечик", artist: "Ємець Ігор, 24 роки", image: "/konkurs/18.webp" },
  { id: "19", title: "Голуб Миру", artist: "Гончаренко Поліна, 20 років", image: "/konkurs/19.webp" },
  { id: "20", title: "Гоноровий", artist: "Ворохта Ольга, 27 р", image: "/konkurs/20.webp" },
  { id: "21", title: "Дикий сіроманець", artist: "Вовк Данільченко Дарина, 16р", image: "/konkurs/21.webp" },
  { id: "22", title: "Дівчина з коником", artist: "Олексієнко Нікіта, 17 років", image: "/konkurs/22.webp" },
  { id: "23", title: "Довіра", artist: "Кулаковська Діана, 17 років", image: "/konkurs/23.webp" },
  { id: "24", title: "Дракони", artist: "Давиденко Дарина, 20 років", image: "/konkurs/24.webp" },
  { id: "25", title: "Друзі", artist: "Іроденко Вікторія, 17 років", image: "/konkurs/25.webp" },
  { id: "26", title: "Едем, поліщучка, чудасія", artist: "Трубнікова Олеся, 24 роки", image: "/konkurs/26.webp" },
  { id: "27", title: "Жар птиця у квітах", artist: "Нестеренко Андрій, 29 років", image: "/konkurs/27.webp" },
  { id: "28", title: "Живе життя і сили ще таїть", artist: "Свирида Софія, 25 років", image: "/konkurs/28.webp" },
  { id: "29", title: "Жоржини", artist: "Калатур Кароліна, 18 років", image: "/konkurs/29.webp" },
  { id: "30", title: "З вірою у перемогу", artist: "Кулик Софія, 16 років", image: "/konkurs/30.webp" },
  { id: "31", title: "Звір наїв", artist: "Калініченко Катерина", image: "/konkurs/31.webp" },
  { id: "32", title: "Золота яблуня", artist: "Кустікова Тетяна, 28 років", image: "/konkurs/32.webp" },
  { id: "33", title: "Золотавий кінь", artist: "Петренко Карина, 18 років", image: "/konkurs/33.webp" },
  { id: "34", title: "Івана Купала", artist: "Драбинка Вікторія, 20 років", image: "/konkurs/34.webp" },
  { id: "35", title: "Казкові вогняні коники", artist: "Костікова Аліна, 26 років", image: "/konkurs/35.webp" },
  { id: "36", title: "Казкові квіти", artist: "Падалка Юлія, 20 років", image: "/konkurs/36.webp" },
  { id: "37", title: "Калейдоскоп Барв", artist: "Єськова Маргарита, 20 років", image: "/konkurs/37.webp" },
  { id: "38", title: "Квітковий звірокруг", artist: "Ребрій Даріна, 16 років", image: "/konkurs/38.webp" },
  { id: "39", title: "Козак Мамай", artist: "Биканова Христина, 30 років", image: "/konkurs/39.webp" },
  { id: "40", title: "Кольорові мрії", artist: "Троян Юлія, 21 рік", image: "/konkurs/40.webp" },
  { id: "41", title: "Крутивус", artist: "Носаль Катерина, 17 років", image: "/konkurs/41.webp" },
  { id: "42", title: "Курйози", artist: "Григораш Катерина, 27 років", image: "/konkurs/42.webp" },
  { id: "43", title: "Лисиця і лелека", artist: "Шульга Тетяна, 19 років", image: "/konkurs/43.webp" },
  { id: "44", title: "Мавка", artist: "Левчин Софія, 17 років", image: "/konkurs/44.webp" },
  { id: "45", title: "Магічний твіст", artist: "Мілінчук Софія, 18 років", image: "/konkurs/45.webp" },
  { id: "46", title: "Маланка", artist: "Костоглодова Карина, 21 рік", image: "/konkurs/46.webp" },
  { id: "47", title: "Малиновий індик футболіст", artist: "Шлапчинська Марія, 24 роки", image: "/konkurs/47.webp" },
  { id: "48", title: "Маріїні мрії", artist: "Кутова Анна, 16 років", image: "/konkurs/48.webp" },
  { id: "49", title: "Мешканець казкового лісу", artist: "Штепа Лілія, 17 років", image: "/konkurs/49.webp" },
  { id: "50", title: "Молодик", artist: "Лісова Марія, 17 років", image: "/konkurs/50.webp" },
  { id: "51", title: "Не роби з мухи слона", artist: "Павлюк Юлія, 26 років", image: "/konkurs/51.webp" },
  { id: "52", title: "Образ", artist: "Суббота Катерина, 18 років", image: "/konkurs/52.webp" },
  { id: "53", title: "Ой на соняху дві пташечки щебечуть", artist: "Тосіч Діана, 27 років", image: "/konkurs/53.webp" },
  { id: "54", title: "Остання чверть", artist: "Лісова Марія, 17 років", image: "/konkurs/54.webp" },
  { id: "55", title: "Павутина почута", artist: "Мазур Дана, 21 рік", image: "/konkurs/55.webp" },
  { id: "56", title: "Півні", artist: "Сагайдачна Софія, 23 роки", image: "/konkurs/56.webp" },
  { id: "57", title: "Пісня для коханої", artist: "Швайко Катерина, 23 роки", image: "/konkurs/57.webp" },
  { id: "58", title: "Планета казкових коней", artist: "Мартинюк Надія, 17 років", image: "/konkurs/58.webp" },
  { id: "59", title: "Про гору що верхом сягала неба", artist: "Різак Марія-Анастасія, 22 роки", image: "/konkurs/59.webp" },
  { id: "60", title: "Райські пави", artist: "Науменко Софія, 18 років", image: "/konkurs/60.webp" },
  { id: "61", title: "Рибки", artist: "Рибак Максим, 16 років", image: "/konkurs/61.webp" },
  { id: "62", title: "Рогатий шепіт лісу", artist: "Нестерук Аріанна, 18 років", image: "/konkurs/62.webp" },
  { id: "63", title: "Святвечір", artist: "Боровик Софія, 18 років", image: "/konkurs/63.webp" },
  { id: "64", title: "Святий Юрій", artist: "Месюр Андрій", image: "/konkurs/64.webp" },
  { id: "65", title: "Сила українського духу", artist: "Холод Іванна, 20 років", image: "/konkurs/65.webp" },
  { id: "66", title: "Синій птах", artist: "Касьян Наталія, 27 років", image: "/konkurs/66.webp" },
  { id: "67", title: "Сонячний левик", artist: "Петрик Ірина, 25 років", image: "/konkurs/67.webp" },
  { id: "68", title: "Сонячний Сон", artist: "Мельничук Костянтин, 16 років", image: "/konkurs/68.webp" },
  { id: "69", title: "Сотворення світу", artist: "Степась Ксенія, 29 років", image: "/konkurs/69.webp" },
  { id: "70", title: "Таємниці купальської ночі", artist: "Петренко Анна, 16 років", image: "/konkurs/70.webp" },
  { id: "71", title: "Танцювала Риба з Раком", artist: "Близнюк Альона, 20 років", image: "/konkurs/71.webp" },
  { id: "72", title: "Творці", artist: "Ваврик Тетяна, 29 років", image: "/konkurs/72.webp" },
  { id: "73", title: "Ти виростеш ще більшою квіткою", artist: "Волошенко Олена, 27 років", image: "/konkurs/73.webp" },
  { id: "74", title: "Триптих «Полин»", artist: "Ваганова Надія, 26 років", image: "/konkurs/74.webp" },
  { id: "75", title: "Тур", artist: "Журавінська Софія, 26 років", image: "/konkurs/75.webp" },
  { id: "76", title: "Тягнись до світла", artist: "Фалюш Вікторія", image: "/konkurs/76.webp" },
  { id: "77", title: "Фантастичне спадщина Марії Приймаченко", artist: "Станищук Софія, 19 років", image: "/konkurs/77.webp" },
  { id: "78", title: "Хранитель поліського мороку", artist: "Дмитренко Валерія, 22 роки", image: "/konkurs/78.webp" },
  { id: "79", title: "Хранителька рідної хати", artist: "Бабаніязова Лейлі, 16 років", image: "/konkurs/79.webp" },
  { id: "80", title: "Цап та баран", artist: "Онопа Тетяна, 24 роки", image: "/konkurs/80.webp" },
  { id: "81", title: "Чугайстер", artist: "Мегеря Ксенія, 23 роки", image: "/konkurs/81.webp" },
  { id: "82", title: "Червіній кінь", artist: "Левченко Євгенія, 26 років", image: "/konkurs/82.webp" },
  { id: "83", title: "Чортове озеро", artist: "Куліченко Софія, 17 років", image: "/konkurs/83.webp" },
];

export default function VotingPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null)

  // ДОБАВЛЕНО ДЛЯ ДВУХЭТАПНОЙ ВЕРИФИКАЦИИ
  const [step, setStep] = useState<"email" | "code">("email")
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // ФУНКЦИЯ 1: Отправка кода на почту
  const handleSendCode = async () => {
    // Простейшая проверка почты
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setSubmitStatus("error")
      setErrorMessage("Введіть коректний email")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error("Помилка відправки коду")

      // Если все ок - переключаемся на шаг ввода кода
      setStep("code")
    } catch (error) {
      // ПРИМЕЧАНИЕ: Для тестов, пока нет API, просто переключаем на шаг кода
      // В реальном проекте это нужно закомментировать и раскомментировать код ниже:
      //setStep("code")

      setSubmitStatus("error")
      setErrorMessage("Помилка відправки коду. Спробуйте ще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // ФУНКЦИЯ 2: Подтверждение кода и голосование
  const handleVote = async () => {
    if (!selectedArtwork || !email || verificationCode.length < 4) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Отправляем и email, и введенный код
        body: JSON.stringify({
          email,
          code: verificationCode,
          artworkId: selectedArtwork.id,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Невірний код або помилка при голосуванні")
        return
      }

      setSubmitStatus("success")
      setTimeout(() => {
        closeDialog()
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Помилка з'єднання")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Функция для правильного закрытия диалога и сброса шагов
  const closeDialog = () => {
    setSelectedArtwork(null)
    setTimeout(() => {
      setStep("email")
      setEmail("")
      setVerificationCode("")
      setSubmitStatus("idle")
      setErrorMessage("")
    }, 300)
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
      <Dialog
        open={!!selectedArtwork}
        onOpenChange={(open) => {
          if (!open) closeDialog()
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">Голосування</DialogTitle>
            <DialogDescription>
              {step === "email"
                ? "Введіть ваш email, щоб проголосувати за цю роботу."
                : "Введіть код, який ми надіслали на ваш email."}
            </DialogDescription>
          </DialogHeader>

          {selectedArtwork && (
            <div className="space-y-4">
              <div className="relative w-full h-[50vh] min-h-[300px] flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
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
                <div className="space-y-4 pt-2">

                  {step === "email" ? (
                    // ШАГ 1: Ввод почты
                    <>
                      <div className="space-y-2">
                        <Input
                          type="email"
                          placeholder="Ваш email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value.toLowerCase())}
                          disabled={isSubmitting}
                        />
                        {submitStatus === "error" && (
                          <p className="text-sm text-red-500 text-center">{errorMessage}</p>
                        )}
                      </div>

                      <Button
                        onClick={handleSendCode}
                        disabled={!email || isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Обробка...
                          </>
                        ) : (
                          "Отримати код"
                        )}
                      </Button>
                    </>
                  ) : (
                    // ШАГ 2: Ввод кода
                    <>
                      <div className="space-y-2">
                        <p className="text-xs text-center text-muted-foreground">
                          Код надіслано на <strong>{email}</strong>
                        </p>
                        <Input
                          type="text"
                          maxLength={6}
                          placeholder="Введіть код"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))} // Только цифры
                          disabled={isSubmitting}
                          className="text-center text-xl tracking-widest font-mono"
                        />
                        {submitStatus === "error" && (
                          <p className="text-sm text-red-500 text-center">{errorMessage}</p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button
                          onClick={handleVote}
                          disabled={verificationCode.length < 4 || isSubmitting}
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
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setStep("email")
                            setSubmitStatus("idle")
                            setErrorMessage("")
                          }}
                          disabled={isSubmitting}
                          className="w-full text-muted-foreground"
                        >
                          Змінити email
                        </Button>
                      </div>
                    </>
                  )}

                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
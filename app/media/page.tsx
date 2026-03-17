import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Медіа | Культурна Платформа «Поліська Казка»",
  description: "Публікації про Культурну Платформу «Поліська Казка» в українських та міжнародних медіа.",
}

const mediaItems = [
  {
    source: "Interfax-Україна",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-0C4lcAwfIzgDWgC1we7KydLLmmPre4.jpg",
    title: "В Україні стартує національний конкурс народної творчості \"Поліська Казка\"",
    description: "Всеукраїнська культурна платформа оголосила про старт першого національного конкурсу...",
    url: "https://interfax.com.ua"
  },
  {
    source: "OBOZ.UA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oboz_ua-n7B1jVvagbJ6fi3ZD3a9qciLJERAXT.png",
    title: "Національний конкурс з малювання \"Поліська казка\"",
    description: "Стипендії 25 000 грн/місяць протягом року для молодих українських митців...",
    url: "https://oboz.ua"
  },
  {
    source: "#ШОТАМ",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00_jpg-BwxnnK5bWrf7KkHFbo1pJyAA0vTFeN.webp",
    title: "Стартує конкурс народної творчості з призовим фондом 300 000 грн",
    description: "Платформа «Поліська Казка» запрошує молодих художників віком 16-30 років...",
    url: "https://shotam.info"
  },
  {
    source: "РУБРИКА",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile_edited-RvY5TxcZ6TTdFTbNJ88xr1T1vrOnZM.jpg",
    title: "«Поліська Казка»: як підтримують молодих українських митців",
    description: "Інтерв'ю із засновницею платформи Маргаритою Бондарєвою...",
    url: "https://rubryka.com"
  },
  {
    source: "online.ua",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-ru_64f8e67c93-6aeYLGpDvYIkrlSPQAO8iJGpTgfUzO.jpg",
    title: "Конкурс для молодих художників з річними стипендіями",
    description: "НАОМА та «Поліська Казка» шукають таланти серед молодих митців...",
    url: "https://online.ua"
  },
  {
    source: "ТиКиїв",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-01-30%20%D0%B2%2012_24_54-64tjUZ72pqvn9YIO64Y0tRzwB0QD12.png",
    title: "Мистецький конкурс «Поліська Казка» чекає на учасників",
    description: "Унікальна можливість для молодих митців отримати підтримку та визнання...",
    url: "https://tykyiv.com"
  },
]

export default function MediaPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Медіа
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Публікації про Культурну Платформу «Поліська Казка»
                в українських та міжнародних медіа
              </p>
            </div>
          </div>
        </section>

        {/* Media Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-secondary flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.logo}
                          alt={item.source}
                          className="max-w-full max-h-full object-contain p-1"
                        />
                      </div>
                      <span className="font-medium text-foreground">{item.source}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Читати далі
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Media Partners */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Медіа-партнери
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {mediaItems.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-background rounded-xl">
                  <img
                    src={item.logo}
                    alt={item.source}
                    className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Для преси
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Якщо ви представляєте медіа та хочете написати про нас,
                будь ласка, зв&apos;яжіться з нами
              </p>
              <Link
                href="mailto:poliskakazka.info@gmail.com"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
              >
                poliskakazka.info@gmail.com
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const mediaItems = [
  {
    title: "Культурна платформа «Поліська казка» та НАОМА проведуть конкурс для молодих художників",
    source: "Interfax-Україна",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-0C4lcAwfIzgDWgC1we7KydLLmmPre4.jpg",
    url: "https://interfax.com.ua",
  },
  {
    title: "В Україні стартує конкурс молодих художників зі стипендією 300 000 грн",
    source: "OBOZ.UA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oboz_ua-n7B1jVvagbJ6fi3ZD3a9qciLJERAXT.png",
    url: "https://oboz.ua",
  },
  {
    title: "Молоді митці зможуть отримати стипендію на рік від «Поліської казки»",
    source: "#ШОТАМ",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00_jpg-BwxnnK5bWrf7KkHFbo1pJyAA0vTFeN.webp",
    url: "https://shotam.info",
  },
  {
    title: "НАОМА та культурна платформа оголосили про новий конкурс для художників",
    source: "РУБРИКА",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile_edited-RvY5TxcZ6TTdFTbNJ88xr1T1vrOnZM.jpg",
    url: "https://rubryka.com",
  },
  {
    title: "Культурна ініціатива підтримає молодих українських художників",
    source: "online.ua",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-ru_64f8e67c93-6aeYLGpDvYIkrlSPQAO8iJGpTgfUzO.jpg",
    url: "https://online.ua",
  },
  {
    title: "Як молодому художнику отримати стипендію 300 тисяч гривень",
    source: "ТиКиїв",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-01-30%20%D0%B2%2012_24_54-64tjUZ72pqvn9YIO64Y0tRzwB0QD12.png",
    url: "https://tykyiv.com",
  },
]

export function Media() {
  return (
    <section id="media" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Медіа
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Ми в медіа
          </h2>
          <p className="text-muted leading-relaxed">
            Публікації про нашу діяльність у провідних українських медіа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 relative rounded overflow-hidden bg-secondary flex-shrink-0">
                    <Image
                      src={item.logo}
                      alt={item.source}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-xs font-medium text-primary">
                    {item.source}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <h3 className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}



const strategicPartners = [
  {
    name: "НАОМА",
    fullName: "Національна академія образотворчого мистецтва і архітектури",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-7-ZqmUXXg5IJhdL8KSw39hxTUKKZD1YX.png",
  },
]

const mediaPartners = [
  {
    name: "Interfax-Україна",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-0C4lcAwfIzgDWgC1we7KydLLmmPre4.jpg",
  },
  {
    name: "OBOZ.UA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oboz_ua-n7B1jVvagbJ6fi3ZD3a9qciLJERAXT.png",
  },
  {
    name: "#ШОТАМ",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00_jpg-BwxnnK5bWrf7KkHFbo1pJyAA0vTFeN.webp",
  },
  {
    name: "РУБРИКА",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile_edited-RvY5TxcZ6TTdFTbNJ88xr1T1vrOnZM.jpg",
  },
  {
    name: "online.ua",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-ru_64f8e67c93-6aeYLGpDvYIkrlSPQAO8iJGpTgfUzO.jpg",
  },
  {
    name: "ТиКиїв",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-01-30%20%D0%B2%2012_24_54-64tjUZ72pqvn9YIO64Y0tRzwB0QD12.png",
  },
]

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Партнери
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Наші партнери
          </h2>
          <p className="text-muted leading-relaxed">
            Ми співпрацюємо з провідними культурними інституціями України
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-lg font-semibold text-center text-foreground mb-8">
            Стратегічний партнер
          </h3>
          <div className="flex justify-center">
            {strategicPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl border border-border p-10 text-center max-w-md hover:border-primary/50 transition-colors"
              >
                <div className="h-48 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-44 w-auto object-contain"
                  />
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {partner.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-center text-foreground mb-8">
            Медіа-партнери
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mediaPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border p-4 flex items-center justify-center h-20 hover:border-primary/50 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
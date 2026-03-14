import { ExternalLink } from "lucide-react"

const mediaItems = [
  {
    title: "Конкурс народного мистецтва «Поліська Казка» продовжено. Молоді художники мають шанс отримати річні стипендії",
    source: "Interfax-Україна",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-0C4lcAwfIzgDWgC1we7KydLLmmPre4.jpg",
    url: "https://interfax.com.ua/news/culture/1135702.html",
  },
  {
    title: "В Україні стартував Національний конкурс народного мистецтва «Поліська Казка»",
    source: "OBOZ.UA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oboz_ua-n7B1jVvagbJ6fi3ZD3a9qciLJERAXT.png",
    url: "https://www.obozrevatel.com/ukr/novosti-obschestvo/v-ukraini-startuvav-natsionalnij-konkurs-narodnogo-mistetstva-poliska-kazka.htm",
  },
  {
    title: "Річна стипендія до 300 000 гривень: Культурна Платформа «Поліська казка» продовжує конкурс для молодих художників",
    source: "#ШОТАМ",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00_jpg-BwxnnK5bWrf7KkHFbo1pJyAA0vTFeN.webp",
    url: "https://shotam.info/kulturna-platforma-poliska-kazka-prodovzhuie-konkurs-dlia-molodykh-khudozhnykiv/",
  },
  {
    title: "Триває національний конкурс народного мистецтва «Поліська казка»: як він підтримає молодих художників?",
    source: "РУБРИКА",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile_edited-RvY5TxcZ6TTdFTbNJ88xr1T1vrOnZM.jpg",
    url: "https://rubryka.com/2025/12/23/tryvaye-natsionalnyj-konkurs-narodnogo-mystetstva-poliska-kazka-yak-vin-pidtrymaye-molodyh-hudozhnykiv/",
  },
  {
    title: "Національний конкурс для молодих художників «Поліська казка» продовжує прийом заявок — як доєднатися",
    source: "online.ua",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-ru_64f8e67c93-6aeYLGpDvYIkrlSPQAO8iJGpTgfUzO.jpg",
    url: "https://news.online.ua/nacionalnii-konkurs-dlia-molodix-xudoznikiv-poliska-kazka-prodovzhuie-priiom-zaiavok-iak-dojednatisia-900632/",
  },
  {
    title: "В Україні стартував національний конкурс народного мистецтва «Поліська казка»",
    source: "ТиКиїв",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-01-30%20%D0%B2%2012_24_54-64tjUZ72pqvn9YIO64Y0tRzwB0QD12.png",
    url: "https://tykyiv.com/news/v-ukrayini-startuvav-natsionalnii-konkurs-narodnogo-mistetstva-poliska-kazka/",
  },
]

export function Media() {
  return (
    <section id="media" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            Ми в медіа
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-80 [perspective:1000px] cursor-pointer"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Лицьова сторона — тільки логотип на всю площу */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/90 shadow-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/70 to-background/80">
                    <img
                      src={item.logo}
                      alt={item.source}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Зворотна сторона — заголовок + посилання */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-background shadow-2xl flex flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-medium leading-tight text-foreground line-clamp-[6] mb-auto">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-medium text-primary/90">{item.source}</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      Читати <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { ExternalLink } from "lucide-react"
import { Ornament, Strip } from "@/components/brand"

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
    url: "https://news.online.ua/nacionalnii-konkurs-dlia-molodix-xudoznikiv-poliska-kazka-prodovzuje-priiom-zaiavok-iak-dojednatisia-900632/",
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
    <section id="media" className="relative pt-24 md:pt-32 pb-20 md:pb-32 bg-background">
      <Strip kind="dash" className="absolute top-0 left-0 -translate-y-1/2 z-10" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative text-center mb-16 md:mb-24">
          <Ornament name="brush-yellow" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] md:w-[24rem] max-w-none" />
          <h2 className="relative text-5xl md:text-6xl text-ink">
            Ми в медіа
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className="group relative h-80 [perspective:1000px] cursor-pointer focus:outline-none"
            >

              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  group-focus:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                {/* Лицьова сторона — тільки логотип на всю площу */}
                <div className="absolute inset-0 [backface-visibility:hidden] frame frame-green overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <img
                      src={item.logo}
                      alt={item.source}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Зворотна сторона — заголовок + посилання */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] frame frame-orange text-ink flex flex-col p-2 sm:p-4">
                  <h3 className="font-serif text-xl font-bold leading-tight text-ink line-clamp-[6] mb-auto">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-bold text-primary">{item.source}</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-orange transition-colors font-bold"
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
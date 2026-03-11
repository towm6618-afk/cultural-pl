import { ExternalLink } from "lucide-react"

const mediaItems = [
  {
    title: "В Україні стартував Національний конкурс народного мистецтва «Поліська казка»",
    source: "Новини культури",
  },
  {
    title: "Триває національний конкурс народного мистецтва «Поліська Казка»: як він підтримає молодих художників?",
    source: "Культурний портал",
  },
  {
    title: "Річна стипендія до 300 000 гривень: Культурна Платформа «Поліська казка» продовжує конкурс для молодих художників",
    source: "Мистецькі новини",
  },
  {
    title: "Національний конкурс для молодих художників «Поліська Казка» продовжує прийом заявок — як доєднатися",
    source: "Арт-медіа",
  },
  {
    title: "Конкурс народного мистецтва «Поліська Казка» продовжено. Молоді художники мають шанс отримати річні стипендії",
    source: "Культурний огляд",
  },
  {
    title: "В Україні стартував національний конкурс народного мистецтва «Поліська казка»",
    source: "Національні новини",
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
            <article
              key={index}
              className="group bg-background rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.source}
                </span>
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <h3 className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

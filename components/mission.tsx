import { Heart, Globe, Palette, Shield } from "lucide-react"

const missionItems = [
  {
    icon: Heart,
    title: "Підтримка митців",
    description: "Фінансові та мистецькі програми для молодих українських художників",
  },
  {
    icon: Globe,
    title: "Популяризація мистецтва",
    description: "Просування українського мистецтва в Україні та за кордоном",
  },
  {
    icon: Palette,
    title: "Культурний простір",
    description: "Формування сучасного культурного простору на основі народної традиції",
  },
  {
    icon: Shield,
    title: "Збереження спадщини",
    description: "Збереження та розвиток національної культурної спадщини",
  },
]

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Наша місія
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Чому це важливо сьогодні?
          </h2>
          <p className="text-muted leading-relaxed">
            В умовах війни культура стає опорою для збереження національної ідентичності, 
            простором для діалогу та джерелом внутрішньої сили. Ми переконані, що підтримка 
            мистецтва — це інвестиція в майбутнє України.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Competition highlight */}
        <div className="mt-16 bg-background rounded-3xl border border-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Національний конкурс народного мистецтва
              </h3>
              <p className="text-muted leading-relaxed">
                Першим проєктом платформи став національний конкурс народного мистецтва 
                «Поліська Казка», реалізований у партнерстві з Національною академією 
                образотворчого мистецтва і архітектури (НАОМА).
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
              >
                Взяти участь
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

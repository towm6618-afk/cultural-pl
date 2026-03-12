import Link from "next/link"

export function Mission() {
  const missionPoints = [
    "підтримка молодих митців через фінансові та мистецькі програми;",
    "популяризація українського мистецтва в Україні та за кордоном;",
    "формування сучасного культурного простору, заснованого на народній традиції;",
    "збереження та розвиток національної культурної спадщини.",
  ]

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Наша місія */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Наша місія
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-8 text-balance">
              Що ми робимо
            </h2>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-muted leading-relaxed pt-1">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Чому це важливо */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-sm">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Важливість
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-6 text-balance">
              Чому це важливо сьогодні?
            </h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                В умовах війни культура стає опорою для збереження національної 
                ідентичності, простором для діалогу та джерелом внутрішньої сили.
              </p>
              <p>
                Ми переконані, що <strong className="text-foreground">підтримка мистецтва — це інвестиція в майбутнє України</strong>.
              </p>
              <p>
                Першим проєктом платформи став національний конкурс народного мистецтва 
                «Поліська Казка», реалізований у партнерстві з{" "}
                <strong className="text-foreground">Національною академією образотворчого мистецтва і архітектури (НАОМА)</strong>.
              </p>
            </div>
            <Link
              href="/konkurs"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Дізнатися більше про конкурс
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

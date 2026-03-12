

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Про нас
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Всеукраїнська культурна ініціатива
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Всеукраїнська культурна платформа «Поліська Казка» — це соціальна
                культурна ініціатива, заснована у 2025 році <strong className="text-foreground">Маргаритою Бондарєвою</strong> для
                того, щоб підтримати сучасних українських митців.
              </p>
              <p>
                Ми даємо можливість молодим митцям творити, розвиватися та бути
                почутими, навіть у складні для країни часи.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-secondary border-3 border-background flex items-center justify-center"
                  >
                    <span className="text-primary font-serif font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted">
                <span className="text-foreground font-semibold">Десятки митців</span>
                <br />
                вже долучились до платформи
              </div>
            </div>
          </div>

          <div id="competition" className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-7-ZqmUXXg5IJhdL8KSw39hxTUKKZD1YX.png"
                alt="НАОМА"
                className="h-16 w-auto"
              />
            </div>
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              Спільно з НАОМА
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Національний конкурс молодих художників
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              Культурна Платформа «Поліська Казка» спільно з Національною академією
              образотворчого мистецтва і архітектури проводить щорічний конкурс для
              молодих художників.
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                Стипендія переможцю — 300 000 грн на рік
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                Персональна виставка в Києві
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                Менторська підтримка від провідних митців
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

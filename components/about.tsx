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

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="font-serif text-xl text-foreground italic">
                    «Підтримка мистецтва — це інвестиція в майбутнє України»
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

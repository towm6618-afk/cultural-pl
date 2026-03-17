import { Palette, Briefcase, HeartHandshake } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ЛІВА ЧАСТИНА */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Про нас
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Всеукраїнська культурна ініціатива
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Всеукраїнська культурна платформа «Поліська Казка» — соціальна ініціатива, заснована громадською діячкою <strong className="text-foreground">Маргаритою Бондарєвою</strong> у 2025 році.
              </p>
              <p>
                Мета діяльності — підтримка молодих художників, митців, скульпторів, розвиток культурного простору та популяризація українського мистецтва як в Україні, так і за її межами.
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

          {/* ПРАВА ЧАСТИНА (Оновлений компактний дизайн) */}
          <div className="bg-secondary/40 rounded-[2rem] p-8 md:p-10 border border-border/50 h-full flex flex-col justify-center">

            <h3 className="font-serif text-2xl font-bold text-foreground mb-8 leading-snug">
              «Поліська Казка» — це простір у якому поєднується три складові: митці, бізнес, філантропія.
            </h3>

            {/* Компактний список замість великих карток */}
            <div className="space-y-6">

              {/* Пункт 1: Митці */}
              <div className="flex items-start gap-5 group">
                <div className="bg-background shadow-sm w-12 h-12 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1 font-serif group-hover:text-primary transition-colors">
                    Митці
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Платформа надає можливості молодим митцям знайти ресурси для розвитку, отримати інструменти для популяризації власної творчості та донести свої ідеї до суспільства.
                  </p>
                </div>
              </div>

              {/* Пункт 2: Бізнес */}
              <div className="flex items-start gap-5 group">
                <div className="bg-background shadow-sm w-12 h-12 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1 font-serif group-hover:text-primary transition-colors">
                    Бізнес
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Отримує можливість та колаборації з художниками, скульпторами, акторами, поетами та іншими представниками культури.
                  </p>
                </div>
              </div>

              {/* Пункт 3: Філантропія */}
              <div className="flex items-start gap-5 group">
                <div className="bg-background shadow-sm w-12 h-12 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1 font-serif group-hover:text-primary transition-colors">
                    Філантропія
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Всі, хто готовий вкладали кошти у збереження та розвиток української культури та українських цінностей у майбутньому.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
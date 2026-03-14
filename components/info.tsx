import {
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export function Info() {
  return (
    <section id="mission" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Заголовок секції */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Наша місія
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Простір, де поєднуються три сили
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Всеукраїнська культурна платформа «Поліська Казка» — це місце, де митці, бізнес та філантропія працюють разом для збереження та розвитку української культури.
          </p>
        </div>

        {/* Три колонки з картками */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Митці */}
          <div className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-8 md:p-10 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span> {/* або заміни на svg/іконку */}
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Митці
              </h3>

              <p className="text-muted leading-relaxed text-base">
                Платформа надає можливості молодим митцям знайти ресурси для розвитку, отримати інструменти для популяризації власної творчості та донести свої ідеї до суспільства.
              </p>
            </div>
          </div>

          {/* Бізнес */}
          <div className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-8 md:p-10 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">💼</span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Бізнес
              </h3>

              <p className="text-muted leading-relaxed text-base">
                Отримує можливість та колаборації з художниками, скульпторами, акторами, поетами та іншими представниками культури.
              </p>
            </div>
          </div>

          {/* Філантропія */}
          <div className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-8 md:p-10 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Філантропія
              </h3>

              <p className="text-muted leading-relaxed text-base">
                Всі, хто готовий вкладати кошти у збереження та розвиток української культури та українських цінностей у майбутньому.
              </p>
            </div>
          </div>

          {/* Додатковий блок знизу (опціонально) */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Три складові — одна мета: зберегти, розвинути та популяризувати українську культуру через творчість, партнерства та підтримку.
            </p>
          </div>
        </div>
    </section>
  )
}
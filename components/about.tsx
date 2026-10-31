import { Ornament, Strip } from "@/components/brand"

const pillars = [
  {
    icon: "star-red",
    title: "Митці",
    text: "Платформа надає можливості молодим митцям знайти ресурси для розвитку, отримати інструменти для популяризації власної творчості та донести свої ідеї до суспільства.",
  },
  {
    icon: "cross-orange",
    title: "Бізнес",
    text: "Отримує можливість та колаборації з художниками, скульпторами, акторами, поетами та іншими представниками культури.",
  },
  {
    icon: "flower-red",
    title: "Філантропія",
    text: "Всі, хто готовий вкладали кошти у збереження та розвиток української культури та українських цінностей у майбутньому.",
  },
]

export function About() {
  return (
    <section id="about" className="relative pb-24 bg-background">
      <Strip kind="step" className="mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ЛІВА ЧАСТИНА */}
          <div>
            <span className="pill pill-brush pill-brush-orange">Про нас</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-ink mt-5 mb-6 text-balance leading-[1.1]">
              Всеукраїнська культурна ініціатива
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Всеукраїнська культурна платформа «Поліська Казка» — соціальна ініціатива, заснована громадською діячкою <strong className="text-ink">Маргаритою Бондарєвою</strong> у 2025 році.
              </p>
              <p>
                Мета діяльності — підтримка молодих художників, митців, скульпторів, розвиток культурного простору та популяризація українського мистецтва як в Україні, так і за її межами.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex items-end gap-1" aria-hidden="true">
                <Ornament name="diamond-blue" className="h-16 w-auto" />
                <Ornament name="diamond-orange" className="h-16 w-auto" />
                <Ornament name="diamond-purple" className="h-16 w-auto" />
              </div>
              <div className="text-sm text-muted">
                <span className="text-ink font-bold font-serif text-base">Десятки митців</span>
                <br />
                вже долучились до платформи
              </div>
            </div>
          </div>

          {/* ПРАВА ЧАСТИНА */}
          <div className="relative h-full">
          <div aria-hidden="true" className="absolute inset-[5px] bg-primary [clip-path:polygon(22px_0,calc(100%-22px)_0,100%_22px,100%_calc(100%-22px),calc(100%-22px)_100%,22px_100%,0_calc(100%-22px),0_22px)]" />
          <div className="frame frame-green-solid relative h-full">
          <div className="relative text-primary-foreground p-2 md:p-4 h-full flex flex-col justify-center overflow-hidden">
            <Ornament name="arch-outline" className="absolute -right-10 -top-6 w-40 opacity-25" />
            <h3 className="relative text-2xl text-cream mb-8 leading-snug">
              «Поліська Казка» — це простір у якому поєднується три складові: митці, бізнес, філантропія.
            </h3>

            <div className="relative space-y-6">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-5">
                  <Ornament name={p.icon} className="w-12 h-12 object-contain shrink-0" />
                  <div>
                    <h4 className="text-lg text-yellow mb-1">{p.title}</h4>
                    <p className="text-cream/85 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

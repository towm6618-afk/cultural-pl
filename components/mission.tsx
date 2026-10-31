import Link from "next/link"
import { Ornament, Strip } from "@/components/brand"

export function Mission() {
  const missionPoints = [
    "підтримка молодих митців через фінансові та мистецькі програми;",
    "популяризація українського мистецтва в Україні та за кордоном;",
    "формування сучасного культурного простору, заснованого на народній традиції;",
    "збереження та розвиток національної культурної спадщини.",
  ]

  return (
    <section className="relative pb-24 bg-secondary overflow-hidden">
      <Strip kind="stripes" className="mb-20" />
      <Ornament name="rainbow-blue" className="hidden lg:block absolute -left-16 -bottom-10 w-72 opacity-90" />
      <Ornament name="sun-yellow" className="hidden lg:block absolute right-6 top-0 w-56" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Наша місія */}
          <div>
            <span className="pill pill-brush pill-brush-orange">Наша місія</span>
            <h2 className="text-3xl sm:text-4xl text-ink mt-5 mb-8 text-balance">
              Що ми робимо
            </h2>
            <ul className="space-y-6">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Ornament name="chevrons" className="w-11 h-auto mt-1 shrink-0" />
                  <p className="text-muted leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Чому це важливо */}
          <div className="frame frame-green p-3 md:p-6">
            <span className="pill pill-brush pill-brush-orange">Важливість</span>
            <h3 className="text-2xl md:text-3xl text-ink mt-5 mb-6 text-balance">
              Чому це важливо сьогодні?
            </h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>В умовах війни культура стає:</p>
              <ul className="space-y-2 ml-4">
                <li>• опорою національної ідентичності</li>
                <li>• джерелом натхнення та внутрішньої сили нації</li>
                <li>• інструментом культурної дипломатії</li>
              </ul>
              <p>Підтримка мистецтва — це інвестиція в майбутнє України.</p>
            </div>
            <Link
              href="/konkurs"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-serif font-bold hover:bg-orange transition-colors"
            >
              Дізнатися більше про конкурс
<Ornament name="arrow-orange" className="w-9 h-auto" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

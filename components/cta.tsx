import Link from "next/link"
import { Ornament } from "@/components/brand"

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-20">
      <Ornament name="arch-outline" className="hidden md:block absolute left-4 -bottom-8 w-44 opacity-30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <span className="pill">Конкурс</span>
          <h2 className="text-3xl sm:text-4xl text-cream mt-5 mb-5 text-balance leading-[1.1]">
            Національний конкурс народного мистецтва
          </h2>
          <p className="text-cream/85 leading-relaxed max-w-xl mb-8">
            Стипендії та підтримка для молодих художників віком від 16 до 30 років.
          </p>
          <Link
            href="/konkurs"
            className="inline-flex items-center gap-3 bg-yellow text-ink px-7 py-3.5 rounded-full font-serif font-bold hover:bg-orange hover:text-cream transition-colors"
          >
            Про конкурс
            <Ornament name="arrow-green" className="w-9 h-auto" />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-xs aspect-[4/5]">
          <Ornament name="tex-gradient" className="absolute inset-0 w-full h-full object-cover" />
          <Ornament name="star-red" className="absolute -left-6 -top-6 w-24" />
          <Ornament name="cross-orange" className="absolute -right-5 bottom-8 w-20" />
        </div>
      </div>
    </section>
  )
}

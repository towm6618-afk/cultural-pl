import Link from "next/link"
import { Logo, Ornament, Strip } from "@/components/brand"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-6 items-center">
          <div className="text-center lg:text-left">
            <Logo tone="green" className="mx-auto lg:mx-0 mb-8 w-full max-w-sm" />

            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-ink mb-6 text-balance leading-[1.1]">
              Поліська Казка — Всеукраїнська культурна платформа
            </h1>

            <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-10 text-balance leading-relaxed">
              Популяризуємо українське мистецтво, підтримуємо молодих митців
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/news"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-serif font-bold hover:bg-orange transition-colors"
              >
                Дізнатися більше
              </Link>
              <Link
                href="/konkurs"
                className="bg-orange text-cream px-8 py-4 rounded-full font-serif font-bold hover:bg-pink transition-colors"
              >
                Конкурс народного мистецтва
              </Link>
            </div>
          </div>

          {/* Колаж з елементів брендбуку */}
          <div aria-hidden="true" className="relative w-full max-w-[460px] mx-auto aspect-[5/6]">
            <Ornament name="arch-orange" className="absolute left-[2%] bottom-0 w-[46%]" />
            <Ornament name="rainbow-blue" className="absolute right-0 bottom-0 w-[52%]" />
            <Ornament name="arch-outline" className="absolute left-[22%] bottom-0 w-[56%]" />
            <Ornament name="star-red" className="absolute left-[4%] top-[3%] w-[26%]" />
            <Ornament name="sun-orange" className="absolute right-[4%] top-[6%] w-[22%]" />
            <Ornament name="checker" className="absolute left-[40%] top-[22%] w-[20%]" />
            <Ornament name="cross-purple" className="absolute right-[12%] top-[40%] w-[17%]" />
            <Ornament name="chevrons" className="absolute left-[3%] bottom-[3%] w-[26%]" />
          </div>
        </div>
      </div>

      <Strip kind="arrows" className="absolute bottom-0 left-0" />
    </section>
  )
}

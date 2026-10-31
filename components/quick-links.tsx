import Link from "next/link"
import { Ornament } from "@/components/brand"

const tiles = [
  { href: "/news", label: "Новини та анонси", icon: "icon-anonsy" },
  { href: "/konkurs", label: "Конкурс", icon: "icon-konkursy" },
  { href: "/aukcions", label: "Аукціон", icon: "icon-vystavky" },
  { href: "/#media", label: "Ми в медіа", icon: "icon-media" },
  { href: "/#partners", label: "Партнери", icon: "icon-partnery" },
  { href: "/kontakty", label: "Питання", icon: "icon-pytannia" },
]

export function QuickLinks() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink text-center mb-12 text-balance">
          Традиції оживають сьогодні
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href} className="group block">
              <div className="overflow-hidden rounded-sm">
                <Ornament
                  name={t.icon}
                  ext="webp"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <span className="mt-3 flex items-center gap-3 font-serif font-bold text-primary group-hover:text-pink transition-colors">
                <span aria-hidden="true" className="h-px flex-1 bg-primary/40" />
                {t.label}
                <span aria-hidden="true" className="h-px flex-1 bg-primary/40" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">


        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BC%D0%B8%D1%81%D1%82%D0%B5%D1%86%D1%82%D0%B2%D0%BE%2C%20%D0%BA%D0%BE%D0%BF%D1%96%D1%8F-omvlCV4W3nKGq9vFPbgQMH5FG47jMo.png"
          alt="Поліська Казка"
          className="mx-auto mb-8 w-full max-w-md"
        />

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
          Поліська Казка — Всеукраїнська культурна платформа
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
          Популяризуємо українське мистецтво, підтримуємо молодих митців
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#about"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-accent transition-colors shadow-lg shadow-primary/25"
          >
            Дізнатися більше
          </Link>
          <Link
            href="/blog/konkurs"
            className="bg-background text-foreground px-8 py-4 rounded-full text-base font-medium border border-border hover:border-primary transition-colors"
          >
            Конкурс народного мистецтва
          </Link>
        </div>


      </div>


    </section>
  )
}

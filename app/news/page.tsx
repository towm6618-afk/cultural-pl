import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"

const posts = [
  {
    slug: "poliska-kazka-results",
    category: "Підсумки",
    title: "Від Донеччини до В’єтнаму: понад 1000 робіт на конкурсі народного мистецтва “Поліська Казка”",
    excerpt: "12 лютого 2026 року завершився прийом робіт. Конкурс об’єднав творчу молодь в Україні та за її межами, ставши масштабним культурним явищем.",
    date: "14 лютого 2026",
    image: "/blog/IMG_3542.webp",
  },
  {
    slug: "press-conference",
    category: "Подія",
    title: "У Києві відбулася пресконференція національного конкурсу народного мистецтва “Поліська Казка”",
    excerpt: "Захід пройшов у пресцентрі Інтерфакс-Україна та зібрав ініціаторів конкурсу, членів журі й представників культурної спільноти.",
    date: "3 лютого 2026",
    image: "/blog/IMG_3541.webp",
  },
  {
    slug: "konkurs",
    category: "Анонс",
    title: "Стартував Національний конкурс народного мистецтва «Поліська Казка»",
    excerpt: "Молоді митці 16–30 років можуть отримати річні стипендії до 25 000 грн/місяць. Прийом робіт відкрито.",
    date: "22 грудня 2025",
    image: "/blog/IMG_3543.webp",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Заголовок */}
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Блог та новини
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Новини та події
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Актуальні оновлення про діяльність платформи «Поліська Казка», перебіг конкурсів, виставки та історії наших митців.
            </p>
          </div>

          {/* Сітка з картками */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-card rounded-[2rem] border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Блок з картинкою */}
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Затемнення для читабельності тексту на фото */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Тег категорії (Ефект матового скла) */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Дата на фото */}
                  <div className="absolute bottom-8 left-6 right-6 flex items-center gap-2 text-white/90 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>

                {/* Текстовий блок картки */}
                <div className="flex flex-col flex-grow bg-card p-6 md:p-8 -mt-6 relative z-10 rounded-t-[2rem]">
                  <h2 className="text-xl md:text-2xl font-serif font-bold mb-4 mt-4 text-foreground group-hover:text-primary transition-colors line-clamp-3">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Кнопка внизу картки */}
                  <div className="flex items-center justify-between border-t border-border pt-5 mt-auto text-primary font-medium">
                    <span className="group-hover:text-primary/80 transition-colors">Читати статтю</span>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
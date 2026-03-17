import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Globe,
  Sparkles,
  Users,
  Palette,
  ArrowRight,
  Quote
} from "lucide-react"

export const metadata: Metadata = {
  title: "Від Донеччини до В’єтнаму: понад 1000 робіт на конкурсі “Поліська Казка”",
  description: "Підсумки прийому робіт на перший національний конкурс народного мистецтва для молодих художників. Географія, учасники та несподівані формати.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">

        {/* Єдиний широкий контейнер для всієї статті */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Кнопка назад */}
          <div className="pb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Назад до новин
            </Link>
          </div>

          {/* 1. ВЕЛИКА КАРТИНКА ОБКЛАДИНКИ */}
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-secondary mb-10 relative group shadow-md">
            <img
              src="/news/IMG_3542.webp"
              alt="Малюнки учасників конкурсу Поліська Казка"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* 2. ТЕГИ ТА ДАТА */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Підсумки конкурсу
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>14 Лютого 2026</span>
            </div>
          </div>

          {/* 3. ЖУРНАЛЬНИЙ ЗАГОЛОВОК */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2] text-balance">
            Від Донеччини до В’єтнаму: понад 1000 робіт на конкурсі народного мистецтва “Поліська Казка”
          </h1>

          {/* 4. ОСНОВНИЙ ТЕКСТ (ДОСЛІВНО) */}
          <div className="prose-lg">

            {/* Лід-абзац */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              12 лютого 2026 року завершився прийом робіт на перший національний конкурс народного мистецтва для молодих художників “Поліська Казка”. Ініціатива Всеукраїнської культурної платформи “Поліська Казка”, реалізована у партнерстві з Національна академія образотворчого мистецтва і архітектури, вже на етапі подачі заявок переросла формат конкурсу та стала масштабним культурним явищем.
            </p>

            {/* Врізка-посилання на минулу статтю */}
            <div className="bg-secondary/50 border border-border rounded-2xl p-6 my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-foreground mb-1">Про умови участі та місію конкурсу ми детально розповідали тут.</h4>
                <p className="text-muted-foreground text-sm"></p>
              </div>
              <Link
                href="/news/konkurs"
                className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                Читати статтю <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              За три місяці організатори отримали понад 1000 художніх робіт, створених молодими українськими митцями в Україні та за її межами. Попри війну, вимушену еміграцію й щоденні виклики, конкурс об’єднав українську творчу молодь у спільному культурному просторі.
            </p>

            {/* Географія */}
            <div className="mt-12 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Географія “Поліської Казки”: Україна і світ
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              До участі долучилися художники з усіх регіонів України — від Одещини, Київщини та Львівщини до Донеччини. Не було жодної області, з якої не надійшла б хоча б одна конкурсна робота.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Водночас “Поліська Казка” стала містком між Україною та світом. Свої твори надсилали українці, які через війну були змушені залишити домівки. Малюнки “летіли” з Німеччини, Польщі, Грузії, Китаю та навіть В’єтнаму.
            </p>

            {/* Цитата */}
            <blockquote className="my-12 relative overflow-hidden bg-secondary rounded-3xl p-8 md:p-10">
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-background/50 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  «Коли у листопаді 2025 року ми оголосили старт національного конкурсу для молодих художників, ми не очікували такого потужного відгуку. Конкурс пробудив у молоді бажання вивчати власну спадщину, творити, фантазувати й переосмислювати народне мистецтво. Ми вдячні кожному учаснику. У цій творчості живе й розвивається українська мистецька традиція. Попереду — відбір фіналістів і народне голосування, але вже зараз очевидно, наскільки важливо в часи війни ініціювати такі культурні проєкти»
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-12-17%20at%2011_edited_edited-rLGHB0sYLNwQz2zKLQEDmRwMh3wzkW.jpg"
                      alt="Маргарита Бондарєва"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Маргарита Бондарєва</div>
                    <div className="text-sm text-primary">Засновниця платформи</div>
                  </div>
                </div>
              </div>
            </blockquote>

            {/* Інтерпретація */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Як молоді художники інтерпретують “Поліську Казку”
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Серед образів, які найчастіше з’являлися у роботах конкурсантів, — <strong>мавки, дивоптахи, чарівні квіти та поліські відьми</strong>. Молоді митці активно працюють із поліською міфологією, поєднуючи традиційні символи із сучасною візуальною мовою.
            </p>

            <div className="bg-background border border-border p-6 rounded-2xl my-6 shadow-sm">
              <p className="text-foreground text-lg">
                ❄️ <strong className="font-bold">Неочікуваний тренд:</strong> авторські вертепи — ймовірно, натхненні затяжною зимою та різдвяною атмосферою.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Кожна робота — це не просто ілюстрація, а особистий діалог із традицією. Через казкові образи художники осмислюють досвід війни, втрати, надії та відродження.
            </p>

            {/* Статистика учасників */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Хто творить сучасну народну казку
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              До конкурсу долучилися митці віком від 16 до 30 років. Найбільше робіт надійшло від художників віком 16–23 роки. Переважну частину учасників становлять професійні художники та студенти мистецьких закладів, однак серед аматорів також є по-справжньому сильні й самобутні роботи.
            </p>

            {/* Інтерактивні картки статистики */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-secondary/50 border border-border p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">11<span className="text-2xl"> років</span></div>
                <div className="text-sm text-foreground font-medium">Наймолодшому автору</div>
              </div>
              <div className="bg-secondary/50 border border-border p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">15<span className="text-2xl"> років</span></div>
                <div className="text-sm text-foreground font-medium">Значна кількість заявок</div>
              </div>
              <div className="bg-secondary/50 border border-border p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">71<span className="text-2xl"> рік</span></div>
                <div className="text-sm text-foreground font-medium">Найстаршому митцю</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Через вікові обмеження ці роботи не можуть брати участь в оцінюванні, однак вони стали окремим джерелом натхнення для команди проєкту.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Близько <strong>80% конкурсних робіт створені жінками</strong>, що відображає реалії воєнного часу. Водночас організатори отримали й кілька робіт від військових, які знаходять можливість творити навіть на фронті.
            </p>

            {/* Матеріали та форма */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Palette className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Експерименти з формою: “металева казка”
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Найчастіше учасники працювали з гуашшю, аквареллю та олівцем. Водночас конкурс відкрив і несподівані експерименти з матеріалами — зокрема, серед робіт є твір, <strong>виконаний на металі</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Такі приклади демонструють, що сучасне українське народне мистецтво може сміливо виходити за межі звичних форматів, зберігаючи при цьому глибокий зв’язок із традицією.
            </p>

            {/* Call to action (Фіналісти) */}
            <div className="mt-16 bg-primary rounded-[2rem] p-8 md:p-12 text-center text-primary-foreground relative overflow-hidden shadow-lg mb-8">
              <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder.jpg')] opacity-10 mix-blend-overlay object-cover w-full h-full" />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Коли оголосять імена фіналістів конкурсу?
                </h2>
                <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  Вже <strong>5 березня</strong> всеукраїнська культурна платформа “Поліська Казка” спільно з Національною академією образотворчого мистецтва і архітектури оголосять імена фіналістів, чиї роботи роботи буде презентовано на виставці в НАОМА.
                </p>
                <Link
                  href="/konkurs#jury"
                  className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary transition-colors shadow-sm"
                >
                  Детальніше познайомитися з членами журі можна тут
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
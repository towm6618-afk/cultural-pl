import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Palette,
  CheckCircle2,
  CalendarDays,
  Quote,
  MapPin,
  Clock,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: "У Києві відкрилася виставка народного мистецтва",
  description: "Виставка народного мистецтва: Марія Примаченко та фіналісти конкурсу “Поліська Казка” у НАОМА.",
}

export default function VistavkaNaomaPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">

        {/* Контейнер max-w-4xl для всієї статті */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Навігація */}
          <div className="pb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Назад до новин
            </Link>
          </div>

          {/* 1. КАРТИНКА СВЕРХУ */}
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-secondary mb-10 relative shadow-md">
            {/* Ви можете замінити це посилання на реальне фото з виставки */}
            <img
              src="https://i.ibb.co/kgb0ZSRg/IMG-3543.webp"
              alt="Виставка народного мистецтва у НАОМА"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. ТЕГИ ТА ДАТА */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Новина
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>20 Березня 2026</span>
            </div>
          </div>

          {/* 3. ЗАГОЛОВОК */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2]">
            У Києві відкрилася виставка народного мистецтва: Марія Примаченко та фіналісти конкурсу “Поліська Казка”
          </h1>

          {/* 4. ОСНОВНИЙ ТЕКСТ */}
          <div className="prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Виставка народного мистецтва: Марія Примаченко та фіналісти конкурсу “Поліська Казка”, що об’єднує роботи легендарної художниці та сучасних митців, відкрилася 19 березня 2026 року в Національній академії образотворчого мистецтва і архітектури.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Експозиція стала однією з ключових культурних подій весни 2026 року в Україні, адже поєднує українське народне мистецтво, сучасне мистецтво та унікальну спадщину Марія Примаченко.
            </p>

            {/* Секція: Традиція та сучасність */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Palette className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Виставка народного мистецтва: поєднання традиції та сучасності
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              В експозиції представлено понад 80 робіт фіналістів конкурсу “Поліська Казка”, які експонуються разом із творами Марії Примаченко. Це створює унікальний діалог поколінь у мистецтві та демонструє, як трансформується народне мистецтво України сьогодні.
            </p>

            <blockquote className="my-12 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/10 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  “Це можливість здійснити мистецьку подорож у часі — від класики до сучасних інтерпретацій народного мистецтва”, — <span className="not-italic text-lg text-muted-foreground font-medium">зазначила Маргарита Бондарєва, засновиця всеукраїнської культурної платформи “Поліська Казка”.</span>
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Особливістю виставки є те, що роботи Примаченко надані з приватних колекцій і стали доступними для публічного перегляду вперше.
            </p>

            {/* Секція: Конкурс */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Конкурс “Поліська Казка”: нові імена українського мистецтва
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Нагадаємо, що Національний конкурс народного мистецтва “Поліська Казка” стартував у листопаді 2025 року та об’єднав тисячі молодих художників з усієї України.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Фіналісти конкурсу представили сучасне бачення народного мистецтва, переосмислюючи:
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "фантазійні світи",
                "фольклорні образи",
                "символіку народного мистецтва"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              У межах виставки оголошено старт другого етапу — народного голосування. Відвідувачі можуть проголосувати за найкращі роботи{" "}
              <Link href="/golosuvannya" className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-all">
                ось тут
              </Link>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За результатами голосування буде визначено переможців у двох категоріях:
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "професійній",
                "аматорській"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Лауреати отримають річні стипендії від 15 000 до 25 000 гривень.
            </p>

            {/* Секція: Відкриття виставки */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Відкриття виставки: культурна подія у Києві
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Урочисте відкриття зібрало представників політичної, дипломатичної, культурної, та медійної спільноти, серед яких — Юлія Тимошенко, народна депутатка, голова депутатської фракції політичної партії “Всеукраїнське об’єднання “Батьківщина”, Міхаель Бродський, — Надзвичайний і повноважний посол держави Ізраїль, Ромен Дестьо, керівник торгового відділу посольства Французької Республіки, Пауліна Ланг - Перший секретар, Керівник відділу комунікацій та публічної дипломатії Посольства Республіки Польща у Києві, Марона ван дер Хеувел, прес - аташе посольства Королівства Нідерландів, Алан Бадоєв — український режисер, Валерій Харчишин — лідер гурту Друга Ріка, Тетяна Гончарова — телеведуча, волонтерка, Олександр Преподобний —- ведучий каналу 1+1, Олена Тополя — українська співачка, Сергій Войток — галерист та інші.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Виставку відкрили ректор НАОМА Олександр Цугорка та засновниця платформи «Поліська Казка» Маргарита Бондарєва.
            </p>

            {/* Блок з інформацією (стилізований як у прикладі) */}
            <div className="bg-secondary/50 border border-primary/20 rounded-3xl p-8 md:p-12 mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-background p-3 rounded-xl text-primary shadow-sm">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Де і коли відвідати виставку Марія Примаченко та фіналісти конкурсу “Поліська Казка”
                </h2>
              </div>

              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="text-foreground font-bold text-lg block mb-1">Локація:</span>
                    <span className="text-lg text-muted-foreground">Національна академія образотворчого мистецтва і архітектури, Київ</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="text-foreground font-bold text-lg block mb-1">Дати:</span>
                    <span className="text-lg text-muted-foreground">20 березня — 20 квітня 2026 року</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="text-foreground font-bold text-lg block mb-1">Графік роботи:</span>
                    <span className="text-lg text-muted-foreground block">вівторок — п’ятниця: 10:00–17:00</span>
                    <span className="text-lg text-muted-foreground block">субота — неділя: 10:00–16:00</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="text-foreground font-bold text-lg block mb-1">Вхід:</span>
                    <span className="text-lg text-muted-foreground">безкоштовний за попередньою реєстрацією.</span>
                  </div>
                </li>
              </ul>

              <div className="h-px w-full bg-border my-8"></div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Також, щонеділі, окрім Великодня тривають кураторські екскурсії, які продять відомі мистецтвознавці та викладачі НАОМА.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">▪️</span>
                  <span className="text-lg text-muted-foreground">22.03.2026 о 12:30 — Леонід Павленко, художник, старший викладач кафедри живопису і композиції</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">▪️</span>
                  <span className="text-lg text-muted-foreground">29.03.2026 — Марія Кукіль, дизайнерка, мистецтвознавиця, старший викладач кафедри дизайну</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">▪️</span>
                  <span className="text-lg text-muted-foreground">05.04.2026 — Марія Бурлаченко, мистецтвознавиця, аспірантка кафедри теорії та історії мистецтва</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-0.5">▪️</span>
                  <span className="text-lg text-muted-foreground">19.04.2026 — Дмитро Соловйов, мистецтвознавець, аспірант кафедри теорії та історії мистецтва</span>
                </li>
              </ul>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm text-center">
                <p className="text-xl font-medium text-foreground">
                  <Link href="https://forms.gle/Xr8imFSKCd8MEKZ27" className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-all">
                    Зареєструватися можна тут.
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
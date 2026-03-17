import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Mic,
  Users,
  Quote,
  Calendar,
  Camera,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Пресконфереція | Культурна Платформа «Поліська Казка»",
  description: "У Києві відбулася пресконференція національного конкурсу народного мистецтва “Поліська Казка”.",
}

export default function PressConferencePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">

        {/* Єдиний широкий контейнер для всієї статті */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Навігація "Назад" */}
          <div className="pb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Назад до новин
            </Link>
          </div>

          {/* 1. ВЕЛИКА КАРТИНКА ОБКЛАДИНКИ З ЕФЕКТОМ */}
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-secondary mb-10 relative group shadow-md">
            <img
              src="/news/IMG_3541.JPG"
              alt="Пресконференція Поліська Казка"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Градієнт та іконка камери при наведенні */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              <div className="flex items-center gap-2 text-white/90 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Camera className="w-5 h-5" />
                Пресцентр Інтерфакс-Україна
              </div>
            </div>
          </div>

          {/* 2. ТЕГИ ТА ДАТА */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
              <Mic className="w-4 h-4" />
              Пресконфереція
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>Офіційний реліз</span>
            </div>
          </div>

          {/* 3. ЖУРНАЛЬНИЙ ЗАГОЛОВОК */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2] text-balance">
            У Києві відбулася пресконференція національного конкурсу народного мистецтва “Поліська Казка”
          </h1>

          {/* 4. ОСНОВНИЙ ТЕКСТ (ДОСЛІВНО) */}
          <div className="prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              У Києві відбулася пресконференція, присвячена першому національному конкурсу народного мистецтва “Поліська Казка”, який об’єднує молодих художників з України та з-за кордону. Захід пройшов у пресцентрі Інтерфакс-Україна та зібрав ініціаторів конкурсу, членів журі й представників культурної спільноти.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Конкурс ініційований всеукраїнською культурною платформою “Поліська Казка” спільно з Національна академія образотворчого мистецтва і архітектури. Його мета — підтримка молодих митців і популяризація українського народного мистецтва у сучасному прочитанні.
            </p>

            {/* Блок з учасниками заходу */}
            <div className="bg-secondary/40 border border-secondary hover:border-primary/20 transition-colors duration-300 rounded-3xl p-8 my-10 group shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-background p-3 rounded-2xl text-primary shadow-sm group-hover:-translate-y-1 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <p className="text-lg text-foreground leading-relaxed m-0">
                У пресконференції взяли участь засновниця платформи Маргарита Бондарєва, ректор НАОМА Олександр Цугорка, режисер і народний артист України Олесь Санін, а також режисер і військовослужбовець Ахтем Сеітаблаєв.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Під час заходу організатори повідомили, що конкурс уже на старті отримав високий інтерес серед молоді: за перші місяці надійшло понад 150 робіт від більш ніж 100 учасників з різних регіонів України та з-за кордону.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              За словами Маргарити Бондарєвої, така активність стала підтвердженням того, що українське мистецтво продовжує розвиватися навіть у складних умовах війни.
            </p>

            {/* Цитата 1 */}
            <blockquote className="my-12 relative bg-primary/5 rounded-r-3xl rounded-l-md p-8 md:p-10 border-l-4 border-primary group hover:shadow-md transition-all duration-300">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  “Попри постійні відключення світла та відсутність тепла в домівках, молодь знаходить час на творчість. Для команди “Поліської Казки” це сигнал, що підтримка молодих художників сьогодні надзвичайно важлива”, — <span className="not-italic text-lg text-muted-foreground font-medium">зазначила вона.</span>
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Ректор НАОМА Олександр Цугорка звернув увагу, що найбільша кількість заявок надійшла в останні дні прийому. У зв’язку з цим організатори ухвалили рішення продовжити прийом робіт до 12 лютого 2026 року включно.
            </p>

            {/* Цитата 2 */}
            <blockquote className="my-12 relative bg-secondary rounded-r-3xl rounded-l-md p-8 md:p-10 border-l-4 border-foreground/30 group hover:shadow-md transition-all duration-300">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-foreground/5 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  “Народна традиція — це фундамент, який має жити в сучасному прочитанні, а не залишатися лише музейним експонатом”, — <span className="not-italic text-lg text-muted-foreground font-medium">наголосив Цугорка.</span>
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Олесь Санін підкреслив, що конкурс передбачає не лише можливість заявити про себе, а й сталу фінансову підтримку переможців — щомісячні стипендії протягом року.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Ахтем Сеітаблаєв наголосив, що подібні культурні ініціативи мають важливе значення як для внутрішньої стійкості суспільства, так і для міжнародного сприйняття України.
            </p>

            {/* Цитата 3 */}
            <blockquote className="my-12 relative bg-primary/5 rounded-r-3xl rounded-l-md p-8 md:p-10 border-l-4 border-primary group hover:shadow-md transition-all duration-300">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  “Культура — це базис існування нації. “Поліська Казка” демонструє, що навіть під час війни Україна продовжує творити й розвивати власну ідентичність”, — <span className="not-italic text-lg text-muted-foreground font-medium">зазначив він.</span>
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-14">
              Пресконференція відбулася у річницю з дня народження всесвітньо відомої української народної мисткині Марія Примаченко, чия творчість стала одним із джерел натхнення для конкурсу. Про значення її спадщини для сучасного мистецького процесу розповіла генеральна директорка Національний музей народної архітектури та побуту України Оксана Повякель.
            </p>

            {/* Інтерактивне посилання в кінці */}
            <div className="bg-secondary/30 border border-secondary hover:border-primary/30 transition-all duration-300 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 group">
              <p className="text-lg text-foreground font-medium text-center sm:text-left m-0">
                Детальніше про конкурс ми розповідали <Link href="/news/konkurs" className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-all">
                  тут.
                </Link> Посилання на матеріал про конкурс
              </p>
              <Link
                href="/news/konkurs" // Заміни на правильне посилання
                className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 shadow-md"
              >
                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
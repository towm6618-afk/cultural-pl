import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCover, ArticlePhoto, ArticleGallery } from "@/components/article-photo"
import { fourthArtClassPhotos } from "../news-photos"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Palette,
  Quote,
  Sparkles,
  Heart,
  Users,
  Image as ImageIcon,
  Info,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Четвертий і заключний арт-клас «Поліської Казки» у Пирогові",
  description:
    "27 вересня «Поліська Казка» провела четвертий і заключний арт-клас сезону у Пирогові. Учасники малювали осінні пейзажі разом з Ігорем та Костянтином Мельничуками.",
}

const ALT = "Арт-клас у Пирогові"

export default function FourthArtClassPage() {
  const { cover, photos } = fourthArtClassPhotos
  const [p1, p2, p3, ...rest] = photos

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Назад */}
          <div className="pb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Назад до блогу
            </Link>
          </div>

          {/* Головне фото */}
          <ArticleCover src={cover} alt={ALT} />

          {/* Теги та дата */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Palette className="w-4 h-4" />
              Арт-клас
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>27 вересня 2026</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2] text-balance">
            «Поліська Казка» провела четвертий і заключний арт-клас сезону у Пирогові
          </h1>

          <div className="prose-lg">
            {/* Лід */}
            <p className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
              27 вересня у Національному музеї народної архітектури та побуту України в Пирогові відбувся четвертий і заключний арт-клас сезону від Всеукраїнської культурної платформи «Поліська Казка». Учасники малювали осінні краєвиди під керівництвом народного художника України Ігоря Мельничука та переможця Першого національного конкурсу народного мистецтва для молодих художників «Поліська Казка» Костянтина Мельничука.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Четвертий майстер-клас з живопису у Пирогові став завершальним у цьогорічній серії відкритих творчих зустрічей «Поліської Казки».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              До участі зареєструвалися близько 80 охочих, однак через обмежену кількість місць організатори змогли прийняти 20 учасників. Серед них були як люди з професійною художньою освітою, так і ті, хто не має спеціальної підготовки, але прагне спробувати себе у живописі.
            </p>

            {/* Розділ 1 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Живопис просто неба разом із професійними художниками
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Під час заключного арт-класу учасники працювали з натури та створювали власні осінні пейзажі.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Народний художник України Ігор Мельничук розповів учасникам, з чого варто починати роботу над першим етюдом, продемонстрував прийоми роботи з натури та безпосередньо під час заняття створив на полотні власний пейзаж із вітряками Пирогова.
            </p>

            <ArticlePhoto src={p1} alt={ALT} />

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Костянтин Мельничук, переможець Першого національного конкурсу народного мистецтва для молодих художників «Поліська Казка», допомагав учасникам працювати з кольоровою гамою та знаходити власні художні рішення.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Такий формат дав можливість учасникам не лише спробувати створити власну картину, а й безпосередньо поспілкуватися з професійними художниками та отримати практичні поради.
            </p>

            {/* Розділ 2 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Четвертий арт-клас став завершенням сезону
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Протягом теплого сезону «Поліська Казка» провела чотири відкриті арт-класи у Пирогові. Кожна зустріч була присвячена практичному знайомству з мистецтвом та давала можливість учасникам долучитися до творчого процесу незалежно від рівня підготовки.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Заключний арт-клас став особливим ще й завдяки участі народного художника України Ігоря Мельничука, який разом із молодим художником Костянтином Мельничуком провів для учасників практичне заняття просто неба.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За словами засновниці Всеукраїнської культурної платформи «Поліська Казка» Маргарити Бондарєвої, ідея запросити Ігоря Мельничука виникла як відповідь на великий інтерес аудиторії до попередніх мистецьких зустрічей.
            </p>

            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  «Майстер-класи з живопису в музеї просто неба у Пирогові стали джерелом натхнення не лише для жителів Києва, а й для нашої команди. Ми отримали неймовірно багато відгуків від учасників, і це дуже мотивує. Це показує, що мистецтво сьогодні потрібне не тільки художникам, а й усім нам, адже воно може допомогти перепочити й відновити сили»,
                </p>
                <p className="not-italic text-lg text-muted-foreground font-medium">— зазначила Маргарита Бондарєва.</p>
              </div>
            </blockquote>

            <ArticlePhoto src={p2} alt={ALT} />

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Вона також наголосила, що четвертий арт-клас став заключним у цьому сезоні, але не останнім у програмі «Поліської Казки». Команда планує продовжувати проводити творчі зустрічі та мистецькі заходи.
            </p>

            {/* Розділ 3 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Мистецтво як простір для відновлення
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Відкриті майстер-класи з живопису та малювання у Пирогові стали одним із напрямів діяльності «Поліської Казки», спрямованих на популяризацію українського мистецтва та залучення широкої аудиторії до творчого процесу.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              У час повномасштабної війни такі зустрічі набувають особливого значення. Творчість допомагає людям хоча б на деякий час переключитися від щоденної напруги, поспілкуватися, відновити сили та отримати позитивні емоції.
            </p>

            <ArticlePhoto src={p3} alt={ALT} />

            {/* Розділ 4 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Українське мистецтво — доступне кожному
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Саме тому «Поліська Казка» прагне створювати простори, де українське мистецтво стає доступним кожному, незалежно від віку, професії чи художнього досвіду.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed mb-8">
              Четвертий і заключний арт-клас сезону у Пирогові завершив літню серію мистецьких зустрічей, але команда «Поліської Казки» вже працює над новими форматами та подіями.
            </p>

            {/* Галерея (4-е фото і далі) */}
            <ArticleGallery photos={rest} alt={ALT} />

            <div className="bg-primary text-primary-foreground p-6 rounded-2xl text-center shadow-lg">
              <p className="text-xl font-medium">
                Слідкуйте за анонсами «Поліської Казки» та долучайтеся до нових творчих зустрічей.
              </p>
            </div>

            {/* Теги */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 font-medium">
                <Info className="w-4 h-4" />
                <span>Теми статті:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "арт-клас у Пирогові",
                  "майстер-клас з живопису у Пирогові",
                  "Поліська Казка",
                  "майстер-клас з малювання",
                  "українське мистецтво",
                  "Ігор Мельничук",
                  "Костянтин Мельничук",
                  "молоді українські художники",
                  "живопис просто неба",
                  "арт-клас сезону",
                  "мистецькі заходи у Пирогові",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary/50 border border-border text-muted-foreground px-3 py-1.5 rounded-full text-sm hover:text-foreground hover:border-primary/30 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

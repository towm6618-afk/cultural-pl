import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCover, ArticlePhoto, ArticleGallery } from "@/components/article-photo"
import { thirdMasterClassPhotos } from "../news-photos"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Palette,
  Quote,
  Sparkles,
  Users,
  Image as ImageIcon,
  Info,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Третій майстер-клас з графіки від «Поліської Казки» в Пирогові",
  description:
    "«Поліська Казка» провела третій безкоштовний майстер-клас з графіки в Пирогові. Заняття провела художниця та переможниця конкурсу Олена Волошенко.",
}

const ALT = "Майстер-клас з графіки в Пирогові"

export default function ThirdMasterClassPage() {
  const { cover, photos } = thirdMasterClassPhotos
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
              Майстер-клас
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>30 серпня 2026</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2] text-balance">
            «Поліська Казка» провела третій майстер-клас з графіки в Пирогові
          </h1>

          <div className="prose-lg">
            {/* Лід */}
            <p className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
              30 серпня у Національному музеї народної архітектури та побуту України в Пирогові відбувся третій відкритий майстер-клас з малювання, організований Всеукраїнською культурною платформою «Поліська Казка». Цього разу учасники познайомилися з основами графіки під керівництвом молодої української художниці та переможниці Національного конкурсу народного мистецтва «Поліська Казка» Олени Волошенко.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Третій майстер-клас став продовженням серії відкритих творчих зустрічей, які «Поліська Казка» проводить для популяризації українського мистецтва та створення можливостей для безпосереднього знайомства аудиторії з молодими українськими художниками.
            </p>

            {/* Розділ 1 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Графіка як простір для творчого експерименту
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Під час майстер-класу учасники працювали з базовими елементами графічного мистецтва — лінією, крапкою, плямою та патерном. Саме з таких простих елементів можна створювати складні композиції, передавати ритм, фактуру, контраст і широкий спектр тонів — від білого до чорного.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Олена Волошенко побудувала заняття у форматі творчої гри, завдяки чому долучитися до процесу могли як люди без художнього досвіду, так і ті, хто вже давно цікавиться малюванням.
            </p>

            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  «Основа майстер-класу — робота з лініями, крапками, плямами та патернами, за допомогою яких можна створювати різноманітні композиції й передавати широку гаму тонів — від білого до чорного»,
                </p>
                <p className="not-italic text-lg text-muted-foreground font-medium">— розповіла Олена Волошенко.</p>
              </div>
            </blockquote>

            <ArticlePhoto src={p1} alt={ALT} />

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Учасники експериментували з різними способами створення ритму та фактури, вчилися працювати з контрастом і композицією та переконувалися, наскільки багато творчих можливостей відкривають звичайні графічні елементи.
            </p>

            {/* Розділ 2 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Palette className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Майстер-клас від лауреатки «Поліської Казки»
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Особливістю зустрічі стало те, що її провела Олена Волошенко — художниця та переможниця Національного конкурсу народного мистецтва «Поліська Казка».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Для культурної платформи важливо не лише підтримувати молодих митців фінансово, а й створювати умови, у яких вони можуть ділитися власним досвідом, розвиватися професійно та ставати частиною сучасного культурного середовища.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Саме тому відкриті майстер-класи за участю переможців та лауреатів конкурсу є одним із напрямів діяльності «Поліської Казки».
            </p>

            <ArticlePhoto src={p2} alt={ALT} />

            {/* Розділ 3 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Третій майстер-клас — частина відкритої мистецької програми
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Майстер-клас з графіки в Пирогові став третьою відкритою творчою зустріччю «Поліської Казки».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Попередні заходи також були присвячені практичному знайомству з мистецтвом та роботі з молодими українськими художниками. Серія таких подій покликана зробити мистецтво більш доступним, дати людям можливість не лише спостерігати за творчим процесом, а й власноруч створювати мистецькі роботи.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Локація в Пирогові стала особливо символічною для таких зустрічей. Простір Національного музею народної архітектури та побуту України поєднує українську традицію, народну культуру та сучасні мистецькі практики.
            </p>

            <ArticlePhoto src={p3} alt={ALT} />

            {/* Розділ 4 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                «Поліська Казка» підтримує молодих українських художників
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Всеукраїнська культурна платформа «Поліська Казка» працює над тим, щоб відкривати нові імена в українському мистецтві, підтримувати молодих художників та популяризувати українську культурну спадщину.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Платформа поєднує конкурсні, освітні та культурні проєкти, створюючи можливості для молодих митців не лише отримувати фінансову підтримку, а й презентувати власну творчість широкій аудиторії.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Проведення відкритих майстер-класів з малювання, графіки та народного мистецтва є продовженням цієї місії.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed mb-8">
              Третій майстер-клас у Пирогові ще раз показав: українське мистецтво — це не лише музейні експонати чи виставкові зали. Це живий процес, до якого може долучитися кожен.
            </p>

            {/* Галерея (4-е фото і далі) */}
            <ArticleGallery photos={rest} alt={ALT} />

            <div className="bg-primary text-primary-foreground p-6 rounded-2xl text-center shadow-lg">
              <p className="text-xl font-medium">
                «Поліська Казка» продовжує створювати простір, де зустрічаються українська традиція, сучасне мистецтво та нове покоління українських художників.
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
                  "майстер-клас з графіки",
                  "майстер-клас з малювання",
                  "Поліська Казка",
                  "Олена Волошенко",
                  "українське мистецтво",
                  "молоді українські художники",
                  "народне мистецтво",
                  "графіка",
                  "Пирогово",
                  "майстер-клас у Пирогові",
                  "підтримка молодих художників",
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

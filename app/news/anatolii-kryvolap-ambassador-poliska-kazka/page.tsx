import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCover } from "@/components/article-photo"
import { kryvolapAmbassadorPhotos } from "../news-photos"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Quote, Sparkles, Trophy, CalendarDays, Users } from "lucide-react"

const FORM_URL = "https://docs.google.com/forms/d/1fIVKulcRpSb5rdcp2Ybd3ZCXE5Oo0HyOxJ-LQYg5UeI/viewform"

export const metadata: Metadata = {
  title: "Анатолій Криволап — амбасадор конкурсу «Поліська Казка»",
  description:
    "Анатолій Криволап став амбасадором другого конкурсу народного мистецтва «Поліська Казка». Дізнайтеся про підтримку молодих художників, стипендії та умови участі.",
  keywords: [
    "Анатолій Криволап амбасадор Поліська Казка",
    "Анатолій Криволап",
    "Поліська Казка",
    "конкурс Поліська Казка 2026",
    "Національний конкурс народного мистецтва",
    "конкурс для молодих художників",
    "українське народне мистецтво",
    "молоді українські художники",
    "підтримка молодих митців",
    "стипендії для художників",
    "Маргарита Бондарева",
    "Всеукраїнська культурна платформа",
  ],
  openGraph: {
    title: "Анатолій Криволап — амбасадор конкурсу «Поліська Казка»",
    description:
      "Анатолій Криволап став амбасадором другого конкурсу народного мистецтва «Поліська Казка». Підтримка молодих художників, стипендії та умови участі.",
    type: "article",
    images: [kryvolapAmbassadorPhotos.cover],
  },
}

const ALT = "Анатолій Криволап — амбасадор другого Національного конкурсу народного мистецтва «Поліська Казка»"

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mt-16 mb-8 flex items-center gap-4 group">
      <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:-translate-y-1 transition-transform duration-300">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">{children}</h2>
    </div>
  )
}

function Quoted({ children, author }: { children: React.ReactNode; author: string }) {
  return (
    <blockquote className="my-10 relative bg-primary/5 rounded-lg p-8 md:p-10 border-l-4 border-primary group">
      <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
      <div className="relative z-10">
        <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">{children}</p>
        <p className="not-italic text-lg text-muted-foreground font-medium">— {author}</p>
      </div>
    </blockquote>
  )
}

export default function KryvolapAmbassadorPage() {
  const { cover } = kryvolapAmbassadorPhotos

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Назад до новин
            </Link>
          </div>

          <ArticleCover src={cover} alt={ALT} narrow credit="Єлизавета Балмер" />

          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Users className="w-4 h-4" />
              Амбасадор
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>14 листопада 2026</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2] text-balance">
            Анатолій Криволап став амбасадором другого Національного конкурсу народного мистецтва «Поліська Казка»
          </h1>

          <div className="prose-lg">
            <p className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
              Відомий український художник, лауреат Національної премії України імені Тараса Шевченка Анатолій Криволап став амбасадором другого Національного конкурсу народного мистецтва для молодих художників «Поліська Казка».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Анатолій Криволап — один із найвідоміших та найдорожчих сучасних українських живописців, майстер нефігуративного живопису та пейзажу, учасник мистецького об’єднання «Живописний заповідник». Лауреат Національної премії України імені Тараса Шевченка.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Його роботи неодноразово ставали учасниками світових мистецьких аукціонів, як Phillips чи Sotheby’s, та продавалися за рекордні суми. До прикладу, у 2013 році картина «Кінь. Вечір» була продана на вечірніх торгах у Лондоні на аукціоні Phillips за рекордну суму — $186,200.
            </p>

            <Quoted author="зазначає Маргарита Бондарева, засновниця Всеукраїнської культурної платформи «Поліська Казка»">
              «Для нас велика честь, що пан Анатолій Криволап, український художник, чиє мистецтво люблять та шанують по всьому світу, — зробив свій внесок у розвиток Національного конкурсу народного мистецтва для молодих художників “Поліська Казка”. Безумовно, підтримка пана Анатолія є величезним джерелом натхнення та мотивації для всіх, хто подає свої роботи на конкурс. А ще, як на мене, дуже символічним є те, що пан Анатолій Криволап є випускником Національної академії образотворчого мистецтва і архітектури. Адже конкурс “Поліська Казка” ми ініціюємо спільно з НАОМА»
            </Quoted>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              В коментарі для Всеукраїнської культурної платформи «Поліська Казка» сам Анатолій Криволап наголошує на важливості підтримки конкурсу та загалом діяльності Всеукраїнської культурної платформи «Поліська Казка»:
            </p>

            <Quoted author="Анатолій Криволап">
              «Сьогодні дуже важливо відкривати нові імена в українському мистецтві. Це важливо насправді в будь-який час, а зараз — особливо. Бо розвиток мистецтва в Україні було загальмовано на сімдесят років. Наразі це просто золотий час, щоб яскравими фарбами вписати імена українських митців у світове мистецтво»
            </Quoted>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Звертаючись до митців, які вагаються, чи подавати роботи на конкурс, художник додає:
            </p>

            <Quoted author="Анатолій Криволап">
              «Якщо хтось боїться — не подавайте. Не малюйте, киньте цю справу. Це справа не для слабких»
            </Quoted>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За словами Маргарити Бондарєвої, цьогоріч конкурс матиме трьох амбасадорів. Також до складу журі долучиться ще один відомий культурний діяч. Їхні імена платформа оголошуватиме згодом. Стежити за новинами можна на сайті та сторінках «Поліської Казки» в Instagram і Facebook.
            </p>

            <SectionTitle icon={<CalendarDays className="w-6 h-6" />}>Прийом заявок уже триває</SectionTitle>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Прийом заявок на другий Національний конкурс народного мистецтва для молодих художників «Поліська Казка» стартував 1 листопада 2026 року і триватиме до 31 січня 2027 року.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Як і минулого року, переможці та лауреати отримають річні стипендії від Всеукраїнської культурної платформи «Поліська Казка» для розвитку своєї творчості. Переможців визначатимуть за результатами оцінювання журі та народного голосування у двох категоріях — професійній та аматорській.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              У професійній категорії передбачено три стипендії:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-secondary/40 border border-border hover:border-primary/30 rounded-lg p-8 transition-colors">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Професійна категорія</h3>
                <ul className="space-y-4">
                  {[
                    ["Перше", "25 000"],
                    ["Друге", "20 000"],
                    ["Третє", "15 000"],
                  ].map(([place, sum]) => (
                    <li key={place} className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-sm">
                      <Trophy className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-lg text-muted-foreground">
                        {place} місце — <strong className="text-foreground">{sum} гривень</strong> щомісяця протягом року
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/40 border border-border hover:border-primary/30 rounded-lg p-8 transition-colors">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Аматорська категорія</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-sm">
                    <Trophy className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-lg text-muted-foreground">
                      Переможець отримає стипендію <strong className="text-foreground">25 000 гривень</strong> щомісяця протягом року
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-foreground font-medium leading-relaxed">
              Подати заявку на участь можна{" "}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
              >
                тут
              </a>
              .
            </p>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

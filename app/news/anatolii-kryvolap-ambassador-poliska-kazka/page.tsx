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

          <ArticleCover src={cover} alt={ALT} narrow />

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
              Відомий український художник, лауреат Національної премії України імені Тараса Шевченка Анатолій Криволап став одним із трьох амбасадорів другого Національного конкурсу народного мистецтва «Поліська Казка» для молодих художників. Його участь у проєкті покликана привернути увагу до розвитку українського мистецтва, підтримки молодого покоління митців та відкриття нових імен в українській культурі.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Анатолій Криволап — один із найвідоміших сучасних українських живописців, майстер нефігуративного живопису та пейзажу, учасник мистецького об’єднання «Живописний заповідник». Лауреат Національної премії України імені Тараса Шевченка.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Його творчість отримала міжнародне визнання, а роботи неодноразово з’являлися на провідних світових аукціонах, зокрема Phillips та Sotheby’s. У 2013 році картина художника «Кінь. Вечір» була продана на вечірніх торгах аукціону Phillips у Лондоні за 186 200 доларів США.
            </p>

            <SectionTitle icon={<Sparkles className="w-6 h-6" />}>Підтримка молодих українських художників</SectionTitle>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Для Всеукраїнської культурної платформи «Поліська Казка» залучення художника такого рівня є важливим кроком у розвитку Національного конкурсу народного мистецтва та підтримці молодих українських митців.
            </p>

            <Quoted author="зазначає Маргарита Бондарева, засновниця Всеукраїнської культурної платформи «Поліська Казка»">
              «Для нас велика честь, що пан Анатолій Криволап — український художник, чиє мистецтво люблять та шанують по всьому світу, — долучився до розвитку Національного конкурсу народного мистецтва для молодих художників “Поліська Казка”. Його підтримка є величезним джерелом натхнення та мотивації для всіх, хто подає свої роботи на конкурс. Особливо символічно, що пан Анатолій Криволап є випускником Національної академії образотворчого мистецтва і архітектури, адже конкурс “Поліська Казка” ми реалізуємо спільно з НАОМА»
            </Quoted>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Сам Анатолій Криволап наголошує на важливості відкриття нових імен в українському мистецтві та створення можливостей для розвитку наступного покоління художників.
            </p>

            <Quoted author="говорить художник">
              «Сьогодні дуже важливо відкривати нові імена в українському мистецтві. Це важливо насправді в будь-який час, а зараз — особливо. Бо розвиток мистецтва в Україні було загальмовано на сімдесят років. То тепер це просто золотий час, щоб яскравими фарбами писати імена українських митців у світовому мистецтві»
            </Quoted>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Звертаючись до митців, які вагаються, чи подавати свої роботи на конкурс, Анатолій Криволап додає:
            </p>

            <Quoted author="Анатолій Криволап">
              «Якщо хтось боїться подавати роботи на конкурс — не подавайте. Не малюйте, киньте цю справу і не подавайте. Це справа не для слабких і не для образливих митців».
            </Quoted>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За словами Маргарити Бондарєвої, загалом другий конкурс матиме трьох амбасадорів. Також до складу журі долучиться ще один відомий представник української культурної спільноти. Імена інших учасників команди конкурсу буде оголошено згодом.
            </p>

            <SectionTitle icon={<CalendarDays className="w-6 h-6" />}>Другий конкурс «Поліська Казка»: прийом заявок триває</SectionTitle>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Другий Національний конкурс народного мистецтва «Поліська Казка» стартував 1 листопада 2026 року. Прийом заявок триватиме до 31 січня 2027 року.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              До участі запрошуються професійні художники та аматори віком від 16 до 30 років. Конкурс спрямований на підтримку молодих українських художників, популяризацію народного мистецтва та сучасне переосмислення української культурної спадщини.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Переможців визначатимуть за результатами оцінювання професійного журі та народного голосування у двох категоріях — професійній та аматорській.
            </p>

            <SectionTitle icon={<Trophy className="w-6 h-6" />}>Стипендії для переможців конкурсу</SectionTitle>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Однією з головних особливостей конкурсу є фінансова підтримка молодих митців. Переможці отримуватимуть щомісячні стипендії протягом року.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-secondary/40 border border-border hover:border-primary/30 rounded-lg p-8 transition-colors">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Професійна категорія</h3>
                <ul className="space-y-4">
                  {[
                    ["І", "25 000"],
                    ["ІІ", "20 000"],
                    ["ІІІ", "15 000"],
                  ].map(([place, sum]) => (
                    <li key={place} className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-sm">
                      <span className="text-primary font-bold text-xl">{place}</span>
                      <span className="text-lg text-muted-foreground">
                        місце — <strong className="text-foreground">{sum} грн</strong> щомісяця протягом року
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/40 border border-border hover:border-primary/30 rounded-lg p-8 transition-colors">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Аматорська категорія</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-sm">
                    <span className="text-primary font-bold text-xl">І</span>
                    <span className="text-lg text-muted-foreground">
                      місце — <strong className="text-foreground">25 000 грн</strong> щомісяця протягом року
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

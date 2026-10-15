import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleCover } from "@/components/article-photo"
import { secondKonkursPhotos } from "../news-photos"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Trophy,
  Palette,
  Users,
  CalendarDays,
  CheckCircle2,
  Quote,
  Sparkles,
  Info,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Другий конкурс «Поліська Казка» 2026 — стипендії молодим художникам",
  description:
    "«Поліська Казка» оголошує другий Національний конкурс народного мистецтва для молодих художників. Стипендії до 25 000 грн щомісяця. Прийом заявок — з 1 листопада 2026 року.",
  keywords: [
    "Національний конкурс народного мистецтва «Поліська Казка»",
    "конкурс для молодих художників 2026",
    "конкурс народного мистецтва",
    "«Поліська Казка» 2026",
    "стипендія для молодих художників",
    "стипендія художникам",
    "конкурс українського мистецтва",
    "конкурс для художників",
    "молоді українські художники",
    "народне мистецтво України",
    "Всеукраїнський конкурс мистецтва",
    "конкурс художників Україна 2026",
  ],
  openGraph: {
    title: "Другий конкурс «Поліська Казка» 2026 — стипендії молодим художникам",
    description:
      "Стипендії до 25 000 грн щомісяця. Прийом заявок на другий Національний конкурс народного мистецтва — з 1 листопада 2026 року.",
    type: "article",
  },
}

const ALT = "Другий Національний конкурс народного мистецтва «Поліська Казка»"

export default function SecondKonkursPage() {
  const { cover } = secondKonkursPhotos

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
              Назад до новин
            </Link>
          </div>

          {/* Головне фото (посилання вставляється в news-photos.ts → secondKonkursPhotos.cover) */}
          <ArticleCover src={cover} alt={ALT} />

          {/* Теги та дата */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-4 h-4" />
              Анонс
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>15 жовтня 2026</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2] text-balance">
            «Поліська Казка» оголошує другий Національний конкурс народного мистецтва для молодих художників
          </h1>

          <div className="prose-lg">
            {/* Лід */}
            <p className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
              Всеукраїнська культурна платформа «Поліська Казка» спільно з Національною академією образотворчого мистецтва і архітектури оголошує другий Національний конкурс народного мистецтва «Поліська Казка» для молодих художників. Прийом заявок на участь у конкурсі розпочнеться 1 листопада 2026 року.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              До участі запрошують професійних художників та аматорів віком від 16 до 30 років. Переможці конкурсу отримуватимуть щомісячні стипендії протягом року, що дозволить їм зосередитися на творчості, розвивати власну мистецьку практику та реалізовувати нові творчі проєкти.
            </p>

            {/* Розділ 1 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Другий конкурс «Поліська Казка»: продовження нової культурної традиції
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Перший Національний конкурс народного мистецтва «Поліська Казка» стартував у 2025 році та об’єднав понад 1000 молодих художників і творчих людей з усієї України.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Роботи фіналістів першого конкурсу були представлені на виставці в Національній академії образотворчого мистецтва і архітектури у символічному діалозі з творами видатної української художниці Марії Примаченко. За підсумками першого конкурсу переможці отримали річні стипендії, які стали реальною фінансовою підтримкою для їхнього подальшого творчого розвитку.
            </p>

            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  «Ми з радістю повідомляємо, що “Поліська Казка” повертається! Минулого року ми започаткували Національний конкурс народного мистецтва для молодих художників і дуже сподівалися, що він стане новою культурною традицією, на яку з нетерпінням чекатимуть як молоді талановиті митці, так і люди, які цікавляться нашою культурою»,
                </p>
                <p className="not-italic text-lg text-muted-foreground font-medium">
                  — розповідає Маргарита Бондарєва, засновниця Всеукраїнської культурної платформи «Поліська Казка».
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Організатори дякують Національній академії образотворчого мистецтва і архітектури за стале партнерство та повідомляють, що цього року готують для учасників ще більше приємних сюрпризів.
            </p>

            {/* Розділ 2: Стипендії */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Trophy className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Стипендії для молодих українських художників
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Однією з головних особливостей конкурсу «Поліська Казка» є фінансова підтримка молодих митців. Передбачені такі стипендії:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-secondary/40 border border-border hover:border-primary/30 rounded-3xl p-8 transition-colors">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Професійна категорія
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm">
                    <span className="text-primary font-bold text-xl">І</span>
                    <span className="text-lg text-muted-foreground">місце — <strong className="text-foreground">25 000 грн</strong> щомісяця протягом року</span>
                  </li>
                  <li className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm">
                    <span className="text-primary font-bold text-xl">ІІ</span>
                    <span className="text-lg text-muted-foreground">місце — <strong className="text-foreground">20 000 грн</strong> щомісяця протягом року</span>
                  </li>
                  <li className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm">
                    <span className="text-primary font-bold text-xl">ІІІ</span>
                    <span className="text-lg text-muted-foreground">місце — <strong className="text-foreground">15 000 грн</strong> щомісяця протягом року</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/40 border border-border hover:border-primary/30 rounded-3xl p-8 transition-colors">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Аматорська категорія
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm">
                    <span className="text-primary font-bold text-xl">І</span>
                    <span className="text-lg text-muted-foreground">місце — <strong className="text-foreground">25 000 грн</strong> щомісяця протягом року</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Таким чином, конкурс передбачає не лише мистецьке визнання, а й стабільну фінансову підтримку творчого розвитку молодих художників.
            </p>

            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  «Коли ми започатковували перший конкурс, нашою головною метою була фінансова підтримка молодих українських художників. Але результати перевершили наші очікування. Ми отримали понад 1000 заявок і побачили, скільки в Україні талановитих молодих людей, які прагнуть творити та розвиватися. Ми відчули гостру потребу творчої молоді у стабільній підтримці. І ми її надаємо вже другий рік поспіль. Для нас важливо не просто відзначити найкращих, а дати молодим митцям можливість займатися творчістю, не думаючи постійно про те, як заробити на життя»,
                </p>
                <p className="not-italic text-lg text-muted-foreground font-medium">
                  — зазначає Маргарита Бондарєва.
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              «Ми хочемо, щоб українське народне мистецтво розвивалося, щоб з’являлися нові імена, які згодом знатиме весь світ. І другий конкурс — це ще один крок до цієї мети», — додає засновниця платформи.
            </p>

            {/* Розділ 3: Тема */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Palette className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Тема конкурсу — «Поліська Казка»
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Тема другого Національного конкурсу залишається незмінною — «Поліська Казка». Організатори запрошують учасників переосмислити українську народну творчість та представити її мовою сучасного мистецтва. У своїх роботах художники можуть звертатися до:
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "українського народного мистецтва;",
                "наївного мистецтва;",
                "регіонального фольклору;",
                "української міфології;",
                "народних легенд і казок;",
                "традиційної символіки;",
                "образів фантастичних тварин і птахів;",
                "авторських фантазійних світів.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Головне завдання конкурсу — не копіювати традицію, а створювати власну сучасну інтерпретацію української культурної спадщини. Саме через творчість нового покоління художників «Поліська Казка» прагне показати, яким може бути сучасне українське народне мистецтво та як воно може розвиватися у XXI столітті.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Організатори закликають учасників надихатися спадщиною відомих українських народних митців і створювати власні сучасні інтерпретації.
            </p>

            {/* Розділ 4: Хто може взяти участь */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Хто може взяти участь у конкурсі
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              У другому Національному конкурсі народного мистецтва «Поліська Казка» можуть взяти участь:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground">професійні художники віком від 16 до 30 років;</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground">художники-аматори віком від 16 до 30 років.</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Визначення переможців відбуватиметься у два етапи — шляхом народного голосування та за рішенням професійного журі.
            </p>

            {/* Розділ 5: Терміни */}
            <div className="bg-secondary/50 border border-primary/20 rounded-3xl p-8 md:p-12 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-background p-3 rounded-xl text-primary shadow-sm">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Коли розпочнеться прийом заявок
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Прийом заявок на другий Національний конкурс народного мистецтва «Поліська Казка» стартує 1 листопада 2026 року. Майбутнім учасникам організатори радять уже зараз починати працювати над ідеями конкурсних робіт та шукати власний погляд на тему «Поліської Казки».
              </p>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm text-center mb-8">
                <p className="text-xl font-medium text-foreground">
                  Старт прийому заявок — 1 листопада 2026 року
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Детальні умови конкурсу, вимоги до робіт та інформація про подання заявки доступні на офіційному сайті Всеукраїнської культурної платформи «Поліська Казка».
              </p>

              <div className="text-center">
                <Link
                  href="/konkurs"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors shadow-lg group"
                >
                  Перейти до умов конкурсу
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Теги */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 font-medium">
                <Info className="w-4 h-4" />
                <span>Теми статті:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Національний конкурс народного мистецтва",
                  "Поліська Казка 2026",
                  "конкурс для молодих художників 2026",
                  "стипендія для молодих художників",
                  "стипендія художникам",
                  "конкурс українського мистецтва",
                  "конкурс для художників",
                  "молоді українські художники",
                  "народне мистецтво України",
                  "Всеукраїнський конкурс мистецтва",
                  "конкурс художників Україна 2026",
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

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Trophy,
  Target,
  Palette,
  CheckCircle2,
  CalendarDays,
  Quote
} from "lucide-react"

export const metadata: Metadata = {
  title: "Стартував Національний конкурс «Поліська Казка»",
  description: "Національний конкурс народного мистецтва “Поліська Казка” стартував в Україні: річні стипендії для молодих художників.",
}

export default function KonkursAnnouncePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">

        {/* Контейнер max-w-4xl для всей статьи (шире, чем 3xl) */}
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
            <img
              src="https://i.ibb.co/kgb0ZSRg/IMG-3543.webp"
              alt="Старт конкурсу Поліська Казка"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. ТЕГИ И ДАТА */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Анонс
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>22 Грудня 2025</span>
            </div>
          </div>

          {/* 3. АККУРАТНЫЙ ЗАГОЛОВОК */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2]">
            Національний конкурс народного мистецтва “Поліська Казка” стартував в Україні: річні стипендії для молодих художників
          </h1>

          {/* 4. ОСНОВНОЙ ТЕКСТ */}
          <div className="prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              В Україні стартував національний конкурс народного мистецтва “Поліська Казка” — масштабна культурна ініціатива, спрямована на підтримку та розвиток молодих українських митців. Конкурс організований Всеукраїнською культурною платформою “Поліська Казка” спільно з {" "}
              <Link href="https://naoma.edu.ua/" className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-all">
                Національна академія образотворчого мистецтва і архітектури.
              </Link>
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              До участі запрошуються професійні художники та аматори віком від 16 до 30 років. Переможці конкурсу отримають щомісячні стипендії протягом року, що дозволить їм зосередитися на творчості та реалізації власних мистецьких проєктів.
            </p>

            {/* Стипендії */}
            <div className="mt-12 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Trophy className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Стипендії для переможців конкурсу “Поліська Казка”
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Конкурс передбачає дві категорії участі — професійну та аматорську.
            </p>

            {/* Картки стипендій */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-secondary/40 border border-border hover:border-primary/30 rounded-3xl p-8 transition-colors">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Професійна категорія
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm">
                    <span className="text-primary font-bold text-xl">І</span>
                    <span className="text-lg text-muted-foreground">місце — <strong className="text-foreground">25 000 грн</strong> щомісяця</span>
                  </li>
                  <li className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm">
                    <span className="text-primary font-bold text-xl">ІІ</span>
                    <span className="text-lg text-muted-foreground">місце — <strong className="text-foreground">20 000 грн</strong> щомісяця</span>
                  </li>
                  <li className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm">
                    <span className="text-primary font-bold text-xl">ІІІ</span>
                    <span className="text-lg text-muted-foreground">місце — <strong className="text-foreground">15 000 грн</strong> щомісяця</span>
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

            {/* Мета та місія */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Мета та місія конкурсу народного мистецтва
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Головна мета конкурсу “Поліська Казка” — підтримка молодих художників, розвиток сучасного українського народного мистецтва та його популяризація в Україні й за кордоном.
            </p>

            <blockquote className="my-12 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/10 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  “В умовах війни культура стає основою національної єдності та ідентичності. Саме тому виникла ідея створення платформи “Поліська Казка”, яка відкриватиме світу нові імена сучасних українських митців”, — <span className="not-italic text-lg text-muted-foreground font-medium">зазначає засновниця платформи Маргарита Бондарєва.</span>
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Вона підкреслює, що учасникам не потрібно наслідувати чи переосмислювати творчість Марії Примаченко або Ганни Собачко-Шостак. Важливо представити авторське бачення, власну художню мову та інтерпретацію образу “Поліської Казки”.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              У Національній академії образотворчого мистецтва і архітектури додають, що народне мистецтво є джерелом автентичної візуальної мови, а конкурс стимулює створення нових художніх світів, натхненних українською традицією.
            </p>

            {/* Тематика */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Тематика робіт на конкурс “Поліська Казка”
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              На конкурс приймаються роботи, що розкривають:
            </p>

            <ul className="space-y-4 mb-16">
              {[
                "образи героїв народних легенд і казок;",
                "фантазійні та символічні композиції;",
                "дивовижні уявні світи;",
                "фантастичних звірів і птахів;",
                "авторські інтерпретації української народної символіки."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Вимоги та техніки */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Palette className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Вимоги до робіт і техніки виконання
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Формати та напрями:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-0.5">•</span>
                <span className="text-lg text-muted-foreground">Живопис (композиційний живопис, рисунок) — А2, А3</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-0.5">•</span>
                <span className="text-lg text-muted-foreground">Графіка (ілюстрація — А3, А4; комп’ютерна графіка — А2–А4)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-0.5">•</span>
                <span className="text-lg text-muted-foreground">Рисунок (декоративний, стилізаційний, орнаментальний) — А2, А3</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Техніки виконання: олія, акрил, акварель, гуаш, пастель, олівці, фломастери.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Кожен учасник може подати від 1 до 3 робіт.
            </p>

            {/* Терміни подачі */}
            <div className="bg-secondary/50 border border-primary/20 rounded-3xl p-8 md:p-12 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-background p-3 rounded-xl text-primary shadow-sm">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Терміни подачі робіт та визначення переможців
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Прийом робіт триватиме до 12 лютого 2026 року включно.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Визначення переможців проходитиме у два етапи:
              </p>

              <ul className="space-y-3 mb-8 ml-2">
                <li className="flex items-center gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg text-muted-foreground">
                    оцінювання професійним журі.{" "}
                    <Link href="/konkurs#jury" className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-all">
                      посилання
                    </Link> на сторінку журі
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg text-muted-foreground">народним голосуванням.</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Оригінали відібраних робіт будуть представлені на виставці в Національній академії образотворчого мистецтва і архітектури.
              </p>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm text-center">
                <p className="text-xl font-medium text-foreground">
                  Імена переможців оголосять 20 квітня 2026 року
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
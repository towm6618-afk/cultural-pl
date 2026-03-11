import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Національний конкурс народної творчості | Культурна Платформа «Поліська Казка»",
  description: "Візьміть участь у першому національному конкурсі народного мистецтва «Поліська Казка». Стипендії до 25 000 грн/місяць.",
}

export default function KonkursPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Прийом робіт до 12.02.2026
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Національний конкурс народного мистецтва
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
                Всеукраїнська культурна платформа «Поліська Казка» спільно з Національною 
                академією образотворчого мистецтва і архітектури оголошують старт першого 
                національного конкурсу народного мистецтва «Поліська Казка».
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://forms.google.com"
                  target="_blank"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
                >
                  Подати заявку
                </Link>
                <Link
                  href="#rules"
                  className="bg-background text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-muted/20 transition-colors border border-border"
                >
                  Умови участі
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who can participate */}
        <section id="rules" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Хто може взяти участь?
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-12">
                До участі запрошуються професійні художники та аматори віком від 16 до 30 років.
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Категорії та стипендії
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Professional Category */}
                <div className="bg-secondary rounded-2xl p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    Професійна категорія
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                      <span className="text-2xl">I</span>
                      <div>
                        <div className="font-bold text-foreground">I місце</div>
                        <div className="text-primary font-semibold">25 000 грн / місяць</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                      <span className="text-2xl">II</span>
                      <div>
                        <div className="font-bold text-foreground">II місце</div>
                        <div className="text-primary font-semibold">20 000 грн / місяць</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                      <span className="text-2xl">III</span>
                      <div>
                        <div className="font-bold text-foreground">III місце</div>
                        <div className="text-primary font-semibold">15 000 грн / місяць</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amateur Category */}
                <div className="bg-secondary rounded-2xl p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    Аматорська категорія
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                      <span className="text-2xl">I</span>
                      <div>
                        <div className="font-bold text-foreground">I місце</div>
                        <div className="text-primary font-semibold">25 000 грн / місяць упродовж року</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Ідея та концепція конкурсу
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-12">
                <p>
                  Головною метою конкурсу є підтримка молодих митців та популяризація українського 
                  народного мистецтва в Україні й за кордоном.
                </p>
                <p>
                  «Ми хочемо відкрити світу нові імена українських художників і дати їм можливість 
                  повноцінно працювати над своєю творчістю», — зазначає засновниця платформи Маргарита Бондарєва.
                </p>
                <p>
                  Учасникам не потрібно наслідувати або переосмислювати конкретні роботи Марії Примаченко 
                  чи Поліни Собачко-Шостак. Навпаки — організатори заохочують вільну авторську інтерпретацію 
                  теми Поліської Казки.
                </p>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Тематика робіт
              </h2>
              <div className="bg-secondary rounded-2xl p-8 mb-12">
                <p className="text-muted mb-4">До участі приймаються:</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    образи героїв легенд і казок
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    фантазійні та міфічні світи
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    фантастичні звірі й птахи
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    авторські інтерпретації народної символіки
                  </li>
                </ul>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Техніки виконання
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-12">
                <p>
                  До участі у конкурсі приймаються роботи будь-яких розмірів та форматів.
                </p>
                <p>
                  <strong className="text-foreground">Техніки:</strong> Олія, акрил, акварель, гуаш, пастель, олівці, фломастери.
                </p>
                <p>
                  Кількість робіт від одного учасника — від 1 до 3.
                </p>
                <p className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200">
                  <strong>Важливо:</strong> До участі у конкурсі не допускаються роботи створені за допомогою ШІ.
                </p>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Відбір та результати
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-12">
                <p>Визначення переможців відбуватиметься у два етапи:</p>
                <ul className="space-y-2 ml-4">
                  <li>• народне голосування</li>
                  <li>• рішення професійного журі</li>
                </ul>
                <p>
                  Оригінали відібраних робіт будуть представлені на виставці в НАОМА.
                </p>
                <div className="bg-primary/10 text-foreground p-6 rounded-xl">
                  <p className="font-bold text-lg mb-2">Оголошення переможців — 6 квітня 2026</p>
                  <p className="text-muted">
                    Переможці стануть учасниками мистецьких проєктів платформи та отримають річну стипендію, 
                    що дозволить зосередитися на творчості.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-secondary rounded-2xl p-8 md:p-12">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Готові взяти участь?
                </h3>
                <p className="text-muted mb-8">
                  Подати свої роботи на конкурс можна за посиланням нижче
                </p>
                <Link
                  href="https://forms.google.com"
                  target="_blank"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
                >
                  Подати заявку
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

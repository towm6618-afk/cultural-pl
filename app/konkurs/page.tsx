import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Національний конкурс народної творчості | Культурна Платформа «Поліська Казка»",
  description: "Візьміть участь у другому національному конкурсі народного мистецтва «Поліська Казка». Стипендії до 25 000 грн/місяць.",
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
                Прийом робіт завершено
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Другий національний конкурс народного мистецтва
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
                Всеукраїнська культурна платформа «Поліська Казка» спільно з Національною академією образотворчого мистецтва і архітектури оголосили старт другого національного конкурсу народного мистецтва «Поліська Казка».
              </p>

              {/* Statistics */}
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">300K</div>
                  <div className="text-muted">грн стипендія</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">1000</div>
                  <div className="text-muted">учасників</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary">10</div>
                  <div className="text-muted">членів журі</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSezGch8eqZ14ei-35R_HlpEqgniWM7gBzPfL2c4rNdGRQdSMQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPMTI0MDI0NTc0Mjg3NDE0AAGnrszkMQtoub9PJv2DCU5unTTCt5QQ-wu4-zeLqKpfCZar5-WzYq_iNPG2Xkk_aem_YvDpMOwNZIkQmV-xnZ4aOA&pli=1"
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
                ДЛЯ КОГО?
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-12">
                До участі запрошено професійних художників та аматорів віком від 16 до 30 років.
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
                        <div className="text-primary font-semibold">25 000 грн / місяць</div>
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
                <p className="text-muted mb-4"></p>
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
                  Олія, акрил, акварель, гуаш, пастель, олівці, фломастери.
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
                  <li>• рішення професійного журі</li>
                  <li>• народне голосування</li>
                </ul>
                <p>
                  Оригінали відібраних робіт будуть представлені на виставці в НАОМА.
                </p>
                <div className="bg-primary/10 text-foreground p-6 rounded-xl">
                  <p className="font-bold text-lg mb-2">Оголошення переможців — 20 квітня 2027 року</p>
                  <p className="text-muted">
                    Переможці стануть учасниками мистецьких проєктів платформи та отримають річну стипендію,
                    що дозволить зосередитися на творчості.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-secondary rounded-2xl p-8 md:p-12">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Допомогти обрати переможців конкурсу?
                </h3>
                <p className="text-muted mb-8">
                </p>
                <Link
                  href="/golosuvannya"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
                >
                  Народне голосування
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Jury / Ambassadors links */}
        <section className="py-16 md:py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/zhuri"
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Конкурсна комісія</h3>
                <p className="text-muted mb-4">Професійне журі, яке оцінює роботи учасників конкурсу</p>
                <span className="text-primary font-medium">Переглянути журі →</span>
              </Link>
              <Link
                href="/ambasadory"
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Амбасадори</h3>
                <p className="text-muted mb-4">Відомі люди, які підтримують конкурс і платформу</p>
                <span className="text-primary font-medium">Переглянути амбасадорів →</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

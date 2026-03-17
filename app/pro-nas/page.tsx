import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Про нас | Культурна Платформа «Поліська Казка»",
  description: "Дізнайтеся більше про Всеукраїнську культурну платформу «Поліська Казка» та її засновницю Маргариту Бондарєву.",
}

export default function ProNasPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Про нас
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Культурна Платформа «Поліська Казка» — це всеукраїнська ініціатива
                з підтримки молодих українських митців
              </p>
            </div>
          </div>
        </section>

        {/* About Platform */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Наша місія
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Культурна платформа «Поліська Казка» створена з метою популяризації
                    українського народного мистецтва та підтримки молодих художників.
                  </p>
                  <p>
                    {"Ми віримо, що українське мистецтво має унікальну силу об'єднувати людей, зберігати культурну пам'ять та надихати нові покоління митців."}
                  </p>
                  <p>
                    Наша платформа надає молодим художникам можливість отримати фінансову
                    підтримку у вигляді стипендій, а також представити свої роботи широкій
                    аудиторії через виставки та медіа-проєкти.
                  </p>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-background rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300K</div>
                    <div className="text-sm text-muted">грн стипендій</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2025</div>
                    <div className="text-sm text-muted">рік старту</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1 рік</div>
                    <div className="text-sm text-muted">підтримки</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
                    <div className="text-sm text-muted">переможці</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Засновниця платформи
              </h2>
              <div className="bg-background rounded-2xl p-8 md:p-12">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-serif text-primary">МБ</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Маргарита Бондарєва
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {"«Ми хочемо відкрити світу нові імена українських художників і дати їм можливість повноцінно працювати над своєю творчістю. Українське народне мистецтво — це наша спадщина, яку ми маємо зберігати та розвивати.»"}
                </p>
                <p className="text-sm text-muted">
                  Засновниця Культурної Платформи «Поліська Казка»
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Наші цінності
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-secondary rounded-2xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Підтримка митців</h3>
                <p className="text-muted leading-relaxed">
                  Надаємо фінансову та інформаційну підтримку молодим українським художникам
                </p>
              </div>
              <div className="text-center p-8 bg-secondary rounded-2xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Збереження традицій</h3>
                <p className="text-muted leading-relaxed">
                  Популяризуємо українське народне мистецтво та культурну спадщину
                </p>
              </div>
              <div className="text-center p-8 bg-secondary rounded-2xl">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Міжнародне визнання</h3>
                <p className="text-muted leading-relaxed">
                  Представляємо українське мистецтво на міжнародній арені
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
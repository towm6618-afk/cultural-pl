import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import { Mail, Facebook, Instagram, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Контакти | Культурна Платформа «Поліська Казка»",
  description: "Зв'яжіться з Культурною Платформою «Поліська Казка». Email, соціальні мережі та форма зворотного зв'язку.",
}

export default function KontaktyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Контакти
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Зв&apos;яжіться з нами для співпраці, питань щодо конкурсу
                або медіа-запитів
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                  Як з нами зв&apos;язатись
                </h2>

                <div className="space-y-6">
                  <Link
                    href="mailto:poliskakazka.info@gmail.com"
                    className="flex items-start gap-4 p-6 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        Email
                      </h3>
                      <p className="text-muted">poliskakazka.info@gmail.com</p>
                    </div>
                  </Link>

                  <Link
                    href="https://www.facebook.com/poliskakazka"
                    target="_blank"
                    className="flex items-start gap-4 p-6 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        Facebook
                      </h3>
                      <p className="text-muted">@poliskakazka</p>
                    </div>
                  </Link>

                  <Link
                    href="https://www.instagram.com/poliskakazka"
                    target="_blank"
                    className="flex items-start gap-4 p-6 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        Instagram
                      </h3>
                      <p className="text-muted">@poliskakazka</p>
                    </div>
                  </Link>

                  <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Локація
                      </h3>
                      <p className="text-muted">Україна, Київ</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                  Напишіть нам
                </h2>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ваше ім&apos;я
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Введіть ваше ім'я"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Введіть ваш email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Тема
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Оберіть тему</option>
                      <option value="konkurs">Питання щодо конкурсу</option>
                      <option value="cooperation">Співпраця</option>
                      <option value="media">Медіа-запит</option>
                      <option value="other">Інше</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Повідомлення
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Введіть ваше повідомлення"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
                  >
                    Надіслати
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Часті запитання
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Як взяти участь у конкурсі?
                </h3>
                <p className="text-muted">
                  Для участі потрібно заповнити форму на сторінці конкурсу та завантажити
                  фото своїх робіт. Участь безкоштовна.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Який віковий ліміт для учасників?
                </h3>
                <p className="text-muted">
                  До участі запрошуються художники віком від 16 до 30 років.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Скільки робіт можна подати?
                </h3>
                <p className="text-muted">
                  Кожен учасник може подати від 1 до 3 робіт.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Коли будуть оголошені результати?
                </h3>
                <p className="text-muted">
                  Оголошення переможців відбудеться 6 квітня 2026 року.
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
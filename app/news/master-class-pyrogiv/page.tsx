import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Quote,
  MapPin,
  Paintbrush,
  Leaf
} from "lucide-react"

export const metadata: Metadata = {
  title: "Майстер-клас із живопису в музеї Пирогово | Поліська Казка",
  description: "Відкритий майстер-клас із живопису просто неба в Національному музеї Пирогово. Мистецтво, як спосіб відволіктися від стресу. Організатор: Поліська Казка.",
  keywords: "майстер-клас із живопису Київ, музей Пирогово заходи, малювання з натури, арт-терапія Київ, Поліська Казка, сучасне українське мистецтво, куди піти в Києві літо 2026, відпочинок від стресу, Надія Ваганова, Маргарита Бондарєва",
}

export default function MasterClassPyrogivPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">

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

          {/* ТЕГИ І ДАТА (Обкладинку прибрали, починаємо одразу з тегів) */}
          <div className="flex flex-wrap items-center gap-4 mb-6 mt-4">
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <Paintbrush className="w-3.5 h-3.5" />
                Майстер-клас
              </span>
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                <Leaf className="w-3.5 h-3.5" />
                Пирогово
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>5 Липня 2026</span>
            </div>
          </div>

          {/* ЗАГОЛОВОК (H1) */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
              “Це можливість відволіктися від стресу”
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              У музеї Пирогово відбувся перший відкритий майстер-клас із живопису від всеукраїнської культурної платформи «Поліська казка»
            </h2>
          </div>

          {/* ОСНОВНИЙ ТЕКСТ (SEO оптимізований) */}
          <div className="prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              5 липня у Національному музеї народної архітектури та побуту України (Пирогів) всеукраїнська культурна платформа “Поліська Казка” провела перший відкритий <strong>майстер-клас із живопису в Києві</strong>. Подія стала чудовою відповіддю на актуальне питання багатьох містян — <strong>куди піти в Києві</strong>, щоб отримати якісний <strong>відпочинок від стресу</strong> та емоційне розвантаження. У цій творчій події, що поєднала мистецтво та елементи <strong>арт-терапії</strong>, взяли участь понад 30 учасників різного віку та рівня підготовки.
            </p>

            {/* ЦИТАТА 1: ПОЛІНА (Оригінал збережено) */}
            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/10 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  “Я маю академічну художню освіту, але з початком повномасштабної війни жодного разу не взяла до рук пензля, бо в наших реаліях дуже складно зловити натхнення. Тож коли я побачила, що всеукраїнська культурна платформа “Поліська Казка” оголосила про майстер-клас, відразу зареєструвалася. Бути тут сьогодні, в оточенні неймовірних краєвидів, малювати з натури – це велика радість для мене та натхнення, я дякую організаторам за можливість відволіктися від постійних тривог та стресу.”
                </p>
                <span className="block text-lg text-muted-foreground font-medium">
                  — Поліна Паламарчук, учасниця майстер-класу, киянка
                </span>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Опановували <strong>малювання з натури</strong> учасники заходу під керівництвом Надії Ваганової — яскравої представниці <strong>сучасного українського мистецтва</strong> та переможниці Першого національного конкурсу для молодих художників “Поліська Казка”.
            </p>

            {/* ЦИТАТА 2: НАДІЯ ВАГАНОВА (Оригінал збережено) */}
            <blockquote className="my-10 relative bg-secondary/30 rounded-3xl p-8 md:p-10 border-l-4 border-muted-foreground/30">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-muted-foreground/5 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-4">
                  “Я знаю: кожен з нас вже художник. Хтось малює фарбами, хтось словами, хтось своїми вчинками. А справжнє мистецтво починається там, де почуття людини перемагають страх зробити недосконало.”
                </p>
                <span className="block text-lg text-muted-foreground font-medium">
                  — Надія Ваганова, художниця
                </span>
              </div>
            </blockquote>

            {/* ГАЛЕРЕЯ НА 5 ФОТО (Із вашими реальними посиланнями) */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-12 mt-8">
              {/* Ряд 1 */}
              <div className="md:col-span-3 aspect-[4/5] bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm hover:opacity-95 transition-opacity">
                <img src="https://i.ibb.co/GQrBdSD7/photo-2026-07-08-15-53-35-4.jpg" alt="Майстер-клас Пирогово - Фото 1" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-3 aspect-[4/5] bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm hover:opacity-95 transition-opacity">
                <img src="https://i.ibb.co/v6D2RKM8/photo-2026-07-08-15-53-35-3.jpg" alt="Майстер-клас Пирогово - Фото 2" className="w-full h-full object-cover" />
              </div>
              {/* Ряд 2 */}
              <div className="md:col-span-2 aspect-[4/5] bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm hover:opacity-95 transition-opacity">
                <img src="https://i.ibb.co/xtCKmtbF/photo-2026-07-08-15-53-35-5.jpg" alt="Майстер-клас Пирогово - Фото 3" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2 aspect-[4/5] bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm hover:opacity-95 transition-opacity">
                <img src="https://i.ibb.co/9HCmcwsp/photo-2026-07-08-15-53-35.jpg" alt="Майстер-клас Пирогово - Фото 4" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2 aspect-[4/5] bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm hover:opacity-95 transition-opacity">
                <img src="https://i.ibb.co/pjK3M8jp/photo-2026-07-08-15-53-34.jpg" alt="Майстер-клас Пирогово - Фото 5" className="w-full h-full object-cover" />
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Перед початком арт-класу для учасників провели тематичну екскурсію експозиціями. Подібні <strong>заходи в музеї Пирогово</strong> дозволяють не лише насолодитися природою, а й дізнатися більше про історію формування українського народного мистецтва, його особливості та значення в житті українців.
            </p>

            {/* БЛОК ЛОКАЦІЇ */}
            <div className="flex items-center gap-4 bg-background border border-border p-5 rounded-2xl my-8 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground m-0 leading-tight">Локація події:</p>
                <p className="text-muted-foreground text-sm m-0">Національний музей народної архітектури та побуту України (Пирогово)</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Цей захід став логічним продовженням місії культурної платформи “Поліська Казка” — популяризувати культурну спадщину України через особистий творчий досвід.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Організатори забезпечили всіх учасників професійними матеріалами для творчості, а автентична атмосфера музею Пирогово стала джерелом натхнення для кожного.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Засновниця всеукраїнської культурної платформи Маргарита Бондарєва зазначила, що команда проєкту планує продовжувати такі арт-події та провести ще низку <strong>майстер-класів з малювання</strong> від переможців національного конкурсу “Поліська Казка”.
            </p>

            {/* ЦИТАТА 3: МАРГАРИТА БОНДАРЄВА (Оригінал збережено) */}
            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/10 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  “У квітні ми підвели підсумки національного конкурсу народного мистецтва для молодих художників “Поліська Казка”, в рамках якого було обрано 4 переможці в двох категоріях: професійній та аматорській. Почалося літо і ми подумали, а чому би не провести арт-класи від переможців конкурсу для всіх охочих? Так і виникла ідея проєкту. Слідкуйте за сторінками всеукраїнської культурної платформи “Поліська Казка” у соціальних мережах, аби не пропустити анонси наступних заходів.”
                </p>
                <span className="block text-lg text-muted-foreground font-medium">
                  — Маргарита Бондарєва, засновниця платформи “Поліська Казка”
                </span>
              </div>
            </blockquote>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
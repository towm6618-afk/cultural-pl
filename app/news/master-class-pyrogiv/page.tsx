import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Quote,
  ImageIcon,
  MapPin,
  Paintbrush,
  Leaf
} from "lucide-react"

// SEO-БЛОК: Спеціально оптимізовані метадані для Google
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

          {/* ГОЛОВНЕ ФОТО СТАТТІ */}
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-secondary mb-10 relative shadow-md flex items-center justify-center">
             {/* Замініть src на посилання з вашим реальним фото з Пирогово */}
             {/* <img src="ВАШЕ_ПОСИЛАННЯ_НА_ФОТО" alt="Майстер-клас із живопису в Пирогово" className="w-full h-full object-cover object-top" /> */}
             <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
             <span className="absolute text-muted-foreground/50 font-medium mt-16">Головне фото (Майстер-клас у Пирогово)</span>
          </div>

          {/* SEO-ТЕГИ І ДАТА */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
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
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2]">
            “Це можливість відволіктися від стресу” У музеї Пирогово відбувся перший відкритий майстер-клас із живопису від всеукраїнської культурної платформи “Поліська Казка”
          </h1>

          {/* ОСНОВНИЙ ТЕКСТ */}
          <div className="prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              5 липня у Національному музеї народної архітектури та побуту України в Пирогові всеукраїнська культурна платформа “Поліська Казка” провела перший відкритий майстер-клас із живопису. У творчій події взяли участь понад 30 учасників різного віку та рівня підготовки.
            </p>

            {/* ЦИТАТА 1: ПОЛІНА (УЧАСНИЦЯ) */}
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
              Створювали свої роботи учасники під керівництвом Надії Ваганової — переможниці Першого національного конкурсу для молодих художників “Поліська Казка”.
            </p>

            {/* ЦИТАТА 2: НАДІЯ ВАГАНОВА */}
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

            {/* ДОДАТКОВІ ФОТО З МАЙСТЕР-КЛАСУ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 mt-8">
              <div className="aspect-video bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm flex items-center justify-center">
                {/* <img src="ФОТО_ПРОЦЕСУ_1" alt="Учасники малюють" className="w-full h-full object-cover" /> */}
                <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
              </div>
              <div className="aspect-video bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm flex items-center justify-center">
                {/* <img src="ФОТО_ПРОЦЕСУ_2" alt="Картини на мольбертах" className="w-full h-full object-cover" /> */}
                <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Перед початком арт-класу для учасників провели тематичну екскурсію експозиціями музею, присвячену історії українського народного мистецтва. Відвідувачі дізналися більше про формування цього жанру, його особливості та значення в житті українців.
            </p>

            {/* SEO/ВІЗУАЛЬНИЙ БЛОК ЛОКАЦІЇ */}
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
              Захід став продовженням місії культурної платформи “Поліська Казка” — популяризувати культурну спадщину України через особистий творчий досвід.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Організатори забезпечили всіх учасників необхідними матеріалами для творчості, а атмосфера музею Пирогово стала джерелом натхнення для кожного.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Засновниця всеукраїнської культурної платформи Маргарита Бондарєва зазначила, що команда проєкту планує провести ще ряд майстер-класів від переможців національного конкурсу народного мистецтва “Поліська Казка”.
            </p>

            {/* ЦИТАТА 3: МАРГАРИТА БОНДАРЄВА */}
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
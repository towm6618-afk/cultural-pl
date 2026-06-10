import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Quote,
  ImageIcon,
  CheckCircle2,
  Heart,
  Palette
} from "lucide-react"

export const metadata: Metadata = {
  title: "Переможець конкурсу «Поліська Казка» передав стипендію на потреби ЗСУ",
  description: "16-річний школяр Костянтин Мельничук передав свою першу стипендію у розмірі 25 тисяч гривень на підтримку ЗСУ.",
}

export default function ScholarshipZsuPage() {
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
             {/* Замініть src на посилання з вашим реальним фото. Додано object-top як ви просили раніше */}
             { <img src="https://i.ibb.co/60C55kF2/IMG-2535.jpg" alt="Костянтин Мельничук та військові" className="w-full h-full object-cover object-top" /> }
   
          </div>

          {/* ТЕГИ І ДАТА */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5" />
              Благодійність
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>Травень 2026</span>
            </div>
          </div>

          {/* ЗАГОЛОВОК */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2]">
            Переможець конкурсу народного мистецтва “Поліська Казка” передав свою першу стипендію на потреби ЗСУ
          </h1>

          {/* ОСНОВНИЙ ТЕКСТ */}
          <div className="prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              У травні 2026 року лауреати Національного конкурсу народного мистецтва для молодих художників “Поліська Казка” отримали свої перші стипендії від Всеукраїнської культурної платформи «Поліська Казка». Проєкт спрямований на підтримку молодих художників України, розвиток народного мистецтва України та формування нового покоління українських митців.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Переможець аматорської категорії, 16-річний школяр Костянтин Мельничук, ухвалив рішення передати свою першу стипендію у розмірі 25 тисяч гривень на підтримку Збройних сил України.
            </p>

            {/* ЦИТАТА КОСТЯНТИНА */}
            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/10 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  “Я хотів подякувати за можливість жити, навчатися і планувати майбутнє у вільній та незалежній Україні. Тому вирішив передати свою першу стипендію нашим захисникам”, — <span className="not-italic text-lg text-muted-foreground font-medium">розповідає переможець конкурсу «Поліська Казка» Костянтин Мельничук.</span>
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Щоб особисто подякувати юному митцю, до столичної школи №275 імені Володимира Кравчука завітали представники батальйону «Свобода».
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Представник батальйону «Свобода» Дмитро наголосив на важливості такої підтримки для українських військових:
            </p>

            {/* ЦИТАТА ВІЙСЬКОВОГО */}
            <blockquote className="my-10 relative bg-secondary/30 rounded-3xl p-8 md:p-10 border-l-4 border-muted-foreground/30">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-muted-foreground/5 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-4">
                  “Вперше у 2014 році я прийшов у цю школу. Відтоді вона підтримує нас — від дитячих малюнків до передачі дронів, батарей живлення та іншого необхідного обладнання. Ця допомога дійсно впливає на ситуацію на полі бою. Це не просто виховання патріотизму — це реальна підтримка наших бійців”.
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Військові зазначили, що кошти будуть спрямовані на забезпечення потреб бійців батальйону «Свобода», які нині виконують бойові завдання на передовій.
            </p>

            {/* ДОДАТКОВЕ ФОТО (якщо є) */}
            { <div className="w-full bg-secondary/30 rounded-2xl border border-border mb-16 flex flex-col items-center justify-center relative overflow-hidden">
               <img src="https://i.ibb.co/60WXcrz2/IMG-2053.jpg" alt="Передача допомоги" className="w-full h-full object-cover" />
            </div> }

            {/* ІНФОРМАЦІЯ ПРО КОНКУРС */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Palette className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                “Поліська Казка” — конкурс народного мистецтва для молодих художників
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Національний конкурс народного мистецтва «Поліська Казка» був заснований у листопаді 2025 року Всеукраїнською культурною платформою «Поліська Казка» спільно з Національною академією образотворчого мистецтва і архітектури.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Мета конкурсу — підтримка молодих митців, популяризація українського народного мистецтва, збереження культурної спадщини та створення нових можливостей для творчого розвитку талановитої молоді.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Організатори переконані, що інвестиції у молодих художників України є важливим внеском у майбутнє української культури та мистецтва.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За результатами конкурсу було визначено чотирьох лауреатів, які протягом року отримуватимуть щомісячні стипендії для молодих митців:
            </p>

            {/* СПИСОК ПЕРЕМОЖЦІВ */}
            <ul className="space-y-4 mb-8 bg-background border border-border p-6 md:p-8 rounded-3xl shadow-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Марія Черничко</strong> — третє місце за роботу «Ба і корівка» та щомісячна стипендія у розмірі 15 тисяч гривень.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Олена Волошенко</strong> — друге місце за роботу «Гірський козлик» та щомісячна стипендія у розмірі 20 тисяч гривень.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Надія Ваганова</strong> — перше місце за роботу «Полин» та щомісячна стипендія у розмірі 25 тисяч гривень.</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              В аматорській категорії перемогу здобув <strong className="text-foreground">Костянтин Мельничук</strong> з роботою «Сонячний сон». Молодий художник отримує щомісячну стипендію у розмірі 25 тисяч гривень протягом року.
            </p>

            {/* ВИСНОВОК */}
            <div className="bg-secondary/30 p-8 rounded-3xl border border-border">
              <p className="text-lg text-foreground font-medium leading-relaxed m-0 text-center">
                Історія Костянтина стала яскравим прикладом того, як українське мистецтво, громадянська свідомість та підтримка захисників України можуть об’єднуватися заради спільного майбутнього. Саме такі молоді митці формують нову культурну історію незалежної України.
              </p>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
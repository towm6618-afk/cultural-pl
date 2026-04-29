import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Trophy,
  Medal,
  CheckCircle2,
  Quote,
  ImageIcon,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "Оголосили переможців Першого національного конкурсу «Поліська казка»",
  description: "23 квітня 2026 року в НАОМА відбулася урочиста церемонія нагородження переможців конкурсу для молодих художників.",
}

export default function WinnersAnnouncePage() {
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
            {/* Коли буде головне фото, розкоментуйте img і видаліть ImageIcon */}
            <img src="https://i.ibb.co/yc2mR990/IMG-7860.webp" alt="Нагородження переможців" className="w-full h-full object-cover object-top" />

          </div>

          {/* ТЕГИ І ДАТА */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Переможці
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>23 Квітня 2026</span>
            </div>
          </div>

          {/* ЗАГОЛОВОК */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2]">
            Оголосили переможців Першого національного конкурсу народного мистецтва для молодих художників «Поліська казка»
          </h1>

          {/* ОСНОВНИЙ ТЕКСТ */}
          <div className="prose-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              23 квітня 2026 року в Національній академії образотворчого мистецтва і архітектури відбулася урочиста церемонія оголошення та нагородження переможців Першого національного конкурсу народного мистецтва для молодих художників «Поліська казка», заснованого Всеукраїнською культурною платформою «Поліська казка» у партнерстві з НАОМА.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Конкурс став масштабною культурною ініціативою, що об’єднала молодих митців з усієї України та з-за кордону. На участь було подано понад 1000 робіт, присвячених темі української ідентичності, народної традиції, символіки та культурної спадщини Полісся.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Переможців визначали у двох категоріях — професійній та аматорській. Оцінювання проходило у два етапи: експертний відбір журі та народне онлайн-голосування.
            </p>

            {/* ПРОФЕСІЙНА КАТЕГОРІЯ */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Trophy className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Переможці професійної категорії
              </h2>
            </div>

            {/* 1 МІСЦЕ */}
            <div className="bg-background border border-border p-6 md:p-8 rounded-3xl mb-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground text-xl">І місце здобула Надія Ваганова з триптихом «Полин».</strong> Переможниця отримала річну стипендію у розмірі 25 тисяч гривень щомісяця. У своїй роботі мисткиня звернулася до теми Полісся як краю глибокої пам’яті, трагедії та незламності, осмисливши образ зорі Полин як символ історичних випробувань і сили української землі.
              </p>
            </div>

            {/* МІСЦЕ ДЛЯ ТРЬОХ ФОТО */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">

              {/* Фото 1 */}
              <div className="aspect-square bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm">
                <img
                  src="https://i.ibb.co/LdSQgFt1/IMG-1364.webp"
                  alt="Триптих Полин - частина 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Фото 2 */}
              <div className="aspect-square bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm">
                <img
                  src="https://i.ibb.co/9HgwpnbX/IMG-1363.webp"
                  alt="Триптих Полин - частина 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Фото 3 */}
              <div className="aspect-square bg-secondary/30 rounded-2xl border border-border relative overflow-hidden shadow-sm">
                <img
                  src="https://i.ibb.co/pvjcTGRZ/IMG-1362.webp"
                  alt="Триптих Полин - частина 3"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* 2 МІСЦЕ */}
            <div className="bg-background border border-border p-6 md:p-8 rounded-3xl mb-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground text-xl">ІІ місце посіла Олена Волошенко з роботою «Гірський козлик».</strong> Художниця отримала щомісячну стипендію у розмірі 20 тисяч гривень. Авторка працює з темами природи, стилізації форми та кольору, поєднуючи народні мотиви із сучасним художнім баченням.
              </p>
            </div>

            {/* МІСЦЕ ДЛЯ ОДНОГО ФОТО */}
            <div className="w-full aspect-[16/9] bg-secondary/30 rounded-2xl border border-border mb-12 flex flex-col items-center justify-center relative overflow-hidden">
              <img src="https://i.ibb.co/TMYFxCKL/IMG-1361.webp" alt="Гірський козлик" className="w-full h-full object-cover" />
            </div>

            {/* 3 МІСЦЕ */}
            <div className="bg-background border border-border p-6 md:p-8 rounded-3xl mb-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground text-xl">ІІІ місце виборола Марія Черничко з роботою «Ба і корівка».</strong> Лауреатка отримала річну стипендію у розмірі 15 тисяч гривень щомісяця. Картина присвячена образу українського села, ролі старших жінок як берегинь роду та важливості збереження традиційних знань.
              </p>
            </div>

            {/* МІСЦЕ ДЛЯ ОДНОГО ФОТО */}
            <div className="w-full aspect-[16/9] bg-secondary/30 rounded-2xl border border-border mb-16 flex flex-col items-center justify-center relative overflow-hidden">
              <img src="https://i.ibb.co/9mSW7C91/IMG-1359.webp" alt="Ба і корівка" className="w-full h-full object-cover" />
            </div>

            {/* АМАТОРСЬКА КАТЕГОРІЯ */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Medal className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Переможець аматорської категорії
              </h2>
            </div>

            <div className="bg-background border border-border p-6 md:p-8 rounded-3xl mb-8 shadow-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground text-xl">І місце здобув 16-річний киянин Костянтин Мельничук з роботою «Сонячний Сон».</strong> Молодий митець зазначив, що у своїй роботі прагнув передати власне відчуття Полісся та його особливої атмосфери. Юний художник отримає річну стипендію розміром у 25 тисяч гривень щомісяця.
              </p>
            </div>

            {/* МІСЦЕ ДЛЯ ОДНОГО ФОТО */}
            <div className="w-full aspect-[16/9] bg-secondary/30 rounded-2xl border border-border mb-16 flex flex-col items-center justify-center relative overflow-hidden">
              <img src="https://i.ibb.co/qMzJ8tZQ/IMG-1360.webp" alt="Сонячний Сон" className="w-full h-full object-cover" />

            </div>

            {/* ФІНАЛІСТИ ТА ВИСТАВКА */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Фіналісти та виставка
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За результатами експертного відбору до фіналу конкурсу увійшли 86 робіт, які були представлені на виставці «Марія Примаченко та фіналісти конкурсу “Поліська казка”».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Під час експозиції тривав другий етап конкурсу — народне голосування. За час проведення виставку відвідали понад 2000 гостей, а більш ніж 7000 осіб долучилися до онлайн-голосування.
            </p>

            {/* ЖУРІ КОНКУРСУ */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Users className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Журі конкурсу
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              До складу журі увійшли відомі діячі культури та мистецтва України, серед яких:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Олесь Санін</strong> — народний артист України, режисер, віцепрезидент Національної академії мистецтв України;</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Артем Палієнко</strong> — директор Українського державного інституту культурної спадщини;</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Ахтем Сеітаблаєв</strong> — режисер і військовослужбовець;</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Оксана Повякель</strong> — генеральна директорка Національного музею народної архітектури та побуту України;</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground"><strong className="text-foreground">Євген Нищук</strong> — ексміністр культури України та інші.</span>
              </li>
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Познайомитися з усіма членами журі можна {" "}
              <Link href="/konkurs#jury" className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-all font-medium">
                тут
              </Link>.
            </p>

            {/* ПОДАЛЬШИЙ РОЗВИТОК КОНКУРСУ */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Подальший розвиток конкурсу
            </h2>

            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/10 rotate-12" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed mb-6">
                  Під час церемонії нагородження засновниця Всеукраїнської культурної платформи «Поліська казка» Маргарита Бондарєва наголосила, що конкурс покликаний стати щорічною культурною традицією та дієвим інструментом підтримки молодих талантів.
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Всеукраїнська культурна платформа «Поліська казка» і надалі працюватиме над розвитком сучасного українського мистецтва, популяризацією народної спадщини та створенням нових можливостей для молодих митців.
            </p>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Національний конкурс народної творчості | Культурна Платформа «Поліська Казка»",
  description: "Візьміть участь у першому національному конкурсі народного мистецтва «Поліська Казка». Стипендії до 25 000 грн/місяць.",
}

const juryMembers = [
  {
    name: "Маргарита Бондарєва",
    role: "Засновниця культурної платформи «Поліська Казка»",
    description: "Має академічну освіту у сфері публічної політики, європейської інтеграції та соціальних наук (Johns Hopkins University, SAIS; University College London)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-12-17%20at%2011_edited_edited-rLGHB0sYLNwQz2zKLQEDmRwMh3wzkW.jpg",
  },
  {
    name: "Оксана Повякель",
    role: "Генеральний директор Національного музею народної архітектури та побуту України",
    description: "Заслужений працівник культури України. Мистецтвознавець, кераміст  та продюсер культурних проєктів.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-12-17%20%D0%B2%2012_edited-DnQo5TljAogUgdIKDA0X5ONUARZ7Ro.jpg",
  },
  {
    name: "Ахтем Сеітаблаєв",
    role: "Український режисер, актор та військовослужбовець",
    description: "Служить у ЗСУ на посаді художнього керівника підрозділу «ТРО Медіа» (відділ комунікацій Командування Сил територіальної оборони ЗСУ), а також є директором «Кримського дому», крім того, має звання «Заслуженого діяча мистецтв України».",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-01-30%20%D0%B2%2013_02_edited-thmLYIbIp0NmXoTGXldfEa0EBftNOT.jpg",
  },
  {
    name: "Олесь Санін",
    role: "Віцепрезидент Національної академії мистецтв України. ",
    description: "Народний артист України, український режисер, лауреат  Державної премії України імені Олександра Довженка та Національної премії України імені Тараса Шевченка, кінорежисер. актор, оператор, продюсер, музикант і скульптор.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-12-22%20%D0%B2%2011_13_edited-WXrYCYGidV9SmwaIamks0fEiHvKkCX.jpg",
  },
  {
    name: "Євген Нищук",
    role: "Народний артист України",
    description: "Голова Комітету з Національної премії України імені Тараса Шевченка та Генеральний директор-художній керівник Національного академічного драматичного театру ім. Івана Франка, народний артист України, актор театру та кіно, громадський і державний діяч, колишній Міністр культури України.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/312470681_681440666680037_8395954243288797366_n_edited-YWjFwAbXS4qkTENbMMoblN2IVjJ7p4.jpg",
  },
  {
    name: "Ростислав Шмагало",
    role: "Професор",
    description: "Професор кафедри історії та теорії мистецтва у Львівській національній академії мистецтв (ЛНАМ), заступник голови Львівської обласної організації Національної спілки художників України.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-12-22%20%D0%B2%2011_10_edited-F41HLiwg1YIREnxm4Azz3xdTajvykZ.jpg",
  },
  {
    name: "Олександр Цугорка",
    role: "Ректор Національної академії образотворчого мистецтва та архітектури.",
    description: "Заслужений діяч мистецтв України, видатний український художник, мистецтвознавець.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-01-30%20%D0%B2%2012_51_edited-XBcDT0UnPCNUdYJDzQePZ3p7syRRz6.jpg",
  },
  {
    name: "Артем Палієнко",
    role: "Директор Українського державного інституту культурної спадщини (УДІКС).",
    description: "Колишній перший заступник генерального директора Національного музею народної архітектури та побуту України.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%90%D1%80%D1%82%D0%B5%D0%BC%20%D0%9F%D0%B0%D0%BB%D1%96%D1%94%D0%BD%D0%BA%D0%BE-ZDMntAEcN7evgPzzIKRJrMtO0CGdwU.jpg",
  },
  {
    name: "Олена Осадча",
    role: "Ректор Київської державної академії декоративно-прикладного мистецтва і дизайну імені Михайла Бойчука",
    description: "Відома українська художниця, мистецтвознавець і педагог.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9E%D0%BB%D0%B5%D0%BD%D0%B0%20%D0%9E%D1%81%D0%B0%D0%B4%D1%87%D0%B0-Z3onQflY8ebFFxVGMuquNOiQ1PndKb.jpg",
  },
  {
    name: "Юрій Вакуленко",
    role: "Віцепрезидент Національної академії мистецтв України, член Ради з питань розвитку національного культурно-мистецького комплексу «Мистецький арсенал».",
    description: "",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%92%D0%B0%D0%BA%D1%83%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%AE%D1%80%D1%96%D0%B9-xKTH3tQcdsFAAHFhfSDRyPM5tgz0O7.jpg",
  },
]

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
                Національний конкурс народного мистецтва
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
                Всеукраїнська культурна платформа «Поліська Казка» спільно з Національною академією образотворчого мистецтва і архітектури оголосили старт першого національного конкурсу народного мистецтва «Поліська Казка».
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
                  Допомогти обрати переможців конкурсу?
                </h3>
                <p className="text-muted mb-8">
                </p>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSezGch8eqZ14ei-35R_HlpEqgniWM7gBzPfL2c4rNdGRQdSMQ/viewform"
                  target="_blank"
                  className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
                >
                  Народне голосування
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Jury Section */}
        <section className="py-16 md:py-24 bg-muted/10" id="jury">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Конкурсна комісія
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-12">
              Професійне журі, яке оцінюватиме роботи учасників конкурсу
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {juryMembers.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="aspect-square mb-4 overflow-hidden rounded-2xl bg-secondary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-sm md:text-base mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-primary font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted line-clamp-2 hidden md:block">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
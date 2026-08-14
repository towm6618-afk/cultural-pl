import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Palette,
  Quote,
  CheckCircle2,
  Sparkles,
  Heart,
  Users,
  Image as ImageIcon,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: "Майстер-клас із живопису в Пирогові — «Поліська Казка»",
  description: "У Пирогові відбувся другий відкритий майстер-клас із живопису від «Поліської Казки». Дізнайтеся, як долучитися до наступних арт-класів у Києві.",
}

export default function MasterClassArticlePage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background">
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Навігація "Назад" */}
          <div className="pb-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Назад до блогу
            </Link>
          </div>

          {/* КАРТИНКА №1: ГОЛОВНА ОБКЛАДИНКА (ВЕРТИКАЛЬНА) */}
          <div className="max-w-2xl mx-auto aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-secondary mb-10 relative group shadow-lg">
            <img
              src="https://i.ibb.co/vx5DkRGK/pyrohiv-4.jpg" // Заміни на свою першу вертикальну картинку (Дівчина в чорній сукні)
              alt="Майстер-клас із живопису в Пирогові"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* ТЕГИ ТА ДАТА */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Palette className="w-4 h-4" />
              Арт-клас
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>8 Серпня 2026</span>
            </div>
          </div>

          {/* ЗАГОЛОВОК H1 */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-[1.2] text-balance">
            У Пирогові відбувся другий відкритий майстер-клас із живопису від «Поліської Казки»: як долучитися до наступних арт-класів
          </h1>

          <div className="prose-lg">
            
            {/* Лід-абзац */}
            <p className="text-xl md:text-2xl text-foreground font-medium mb-12 leading-relaxed">
              8 серпня 2026 року в Національному музеї народної архітектури та побуту України в Пирогові відбувся другий відкритий майстер-клас із живопису, організований Всеукраїнською культурною платформою «Поліська Казка». Понад 20 учасників, незважаючи на дощ, зібралися, щоб спробувати себе в живописі, зануритися в атмосферу українського села та через творчість відпочити від повсякденних турбот.
            </p>

            {/* Розділ 1 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Живопис у Пирогові: мистецтво, традиція та простір для творчості
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Відкриті художні майстер-класи «Поліської Казки» проходять на території Національного музею народної архітектури та побуту України в Пирогові — у просторі, де українська культурна спадщина стає безпосереднім джерелом натхнення.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Цього разу учасники працювали під керівництвом художниці Марії Черничко, лауреатки Першого національного конкурсу народного мистецтва для молодих художників «Поліська Казка».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Тема заняття була присвячена домашнім тваринам, традиційному українському подвір’ю та міфічним істотам, які могли б існувати у світі української народної уяви. Учасники спостерігали за автентичними хатами, господарськими будівлями та традиційним ландшафтом Пирогова, а потім переносили власні враження та фантазії на полотно.
            </p>

            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  «На майстер-класі ми спробували пофантазувати на тему домашніх тварин і традиційного селянського подвір’я. Дивлячись на автентичні хати в музеї Пирогів, ми уявляли, які істоти могли жити поруч із нашими предками: справжні корови чи їхні міфічні образи. Малювали те, що підказувала наша уява»,
                </p>
                <p className="not-italic text-lg text-muted-foreground font-medium">— розповіла художниця Марія Черничко.</p>
              </div>
            </blockquote>

            {/* КАРТИНКА №2 (ВЕРТИКАЛЬНА) */}
            <div className="max-w-xl mx-auto aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-secondary my-14 shadow-sm">
              <img
                src="https://i.ibb.co/XfCq8pMg/pyrohiv-1.jpg" // Заміни на свою другу вертикальну картинку
                alt="Учасники майстер-класу малюють"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Розділ 2 */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 mt-12">
              Майстер-клас із живопису для всіх — навіть без художнього досвіду
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Одним із головних принципів відкритих арт-класів «Поліської Казки» є доступність. Учасникам надали всі необхідні художні матеріали, тому приєднатися до заняття могли не лише професійні художники чи люди з досвідом малювання, а й ті, хто вперше взяв до рук пензель.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Саме такий формат дозволяє перетворити майстер-клас із живопису на доступний творчий досвід для широкої аудиторії — дорослих, молоді, початківців та всіх, хто хоче спробувати щось нове.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Тут не було вимоги створити «ідеальну картину». Натомість учасники отримали можливість експериментувати, фантазувати та шукати власну художню мову.
            </p>

            {/* Розділ 3 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                Творчість як спосіб відпочити та перезавантажитися
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Окремою важливою складовою майстер-класу стала атмосфера творчого відпочинку. Для багатьох учасників малювання стало можливістю на кілька годин відволіктися від щоденних справ, зосередитися на процесі та побути в спокійному культурному середовищі.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Пані Белла, яка вже вдруге взяла участь у майстер-класі, поділилася власними враженнями:
            </p>

            <blockquote className="my-10 relative bg-secondary/50 rounded-3xl p-8 md:p-10 border-l-4 border-foreground/30 group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-foreground/5 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed">
                  «Я тут уже вдруге і, якщо матиму можливість, приходитиму щоразу, адже отримую велике задоволення. Мені подобається це місце і те, що під час малювання мої тривожні думки відступають. Після таких майстер-класів я почуваюся значно спокійніше й відчуваю, що можу ще багато чого зробити у своєму житті. Я добре знаю про користь творчості, адже працюю клінічною психологинею».
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Таким чином, живопис і творча діяльність можуть бути важливим способом емоційного розвантаження та відновлення, особливо коли творчий процес відбувається в комфортному середовищі та без страху оцінювання.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Саме тому «Поліська Казка» прагне створювати арт-класи, на які можна прийти не для того, щоб довести свої художні здібності, а просто для того, щоб малювати, відпочивати, спілкуватися та відкривати в собі нові можливості.
            </p>

            {/* КАРТИНКА №3 (ВЕРТИКАЛЬНА) */}
            <div className="max-w-xl mx-auto aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-secondary my-14 shadow-sm">
              <img
                src="https://i.ibb.co/JwBVY2Xq/pyrohiv-2.jpg" // Заміни на свою третю вертикальну картинку
                alt="Атмосфера майстер-класу"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Розділ 4 */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 mt-12">
              Від Мавки до міфічних істот: кожен учасник створює власну історію
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Для учасниці Катерини Нікітенко це був перший майстер-клас від «Поліської Казки».
            </p>

            <blockquote className="my-10 relative bg-primary/5 rounded-3xl p-8 md:p-10 border-l-4 border-primary group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed mb-4">
                  «Я вперше на майстер-класі від Всеукраїнської культурної платформи “Поліська Казка”. Мені дуже сподобалося — атмосферно і чудова викладачка з малювання, пані Марія, допомогла мені розкрити свій творчий задум — зобразити Мавку в лісі»,
                </p>
                <p className="not-italic text-lg text-muted-foreground font-medium">— розповіла Катерина.</p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Такі історії показують головну ідею творчих занять платформи: кожен учасник має можливість створити власний образ українського світу, спираючись на народну культуру, традиції, природу та власну фантазію.
            </p>

            {/* Розділ 5 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                «Поліська Казка» продовжує серію відкритих арт-класів
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Другий майстер-клас став продовженням серії відкритих творчих занять, які Всеукраїнська культурна платформа «Поліська Казка» проводить у Пирогові.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              За словами засновниці платформи Маргарити Бондарєвої, попереду на учасників чекають нові зустрічі:
            </p>

            <blockquote className="my-10 relative bg-secondary/50 rounded-3xl p-8 md:p-10 border-l-4 border-foreground/30 group">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-foreground/5 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative z-10">
                <p className="text-xl font-serif italic text-foreground leading-relaxed">
                  «Попереду ще кілька арт-класів для всіх охочих. Також ми плануємо проводити арт-класи для ветеранів. Тому раджу підписатися на наші сторінки в Instagram та Facebook, щоб не пропустити наступні анонси».
                </p>
              </div>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Отже, серія майстер-класів із живопису в Пирогові продовжиться. Організатори планують розширювати аудиторію та створювати нові формати творчих зустрічей.
            </p>

            {/* КАРТИНКА №4 (ВЕРТИКАЛЬНА) */}
            <div className="max-w-xl mx-auto aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-secondary my-14 shadow-sm">
              <img
                src="https://i.ibb.co/v4B1SP6t/pyrohiv-3.jpg" // Заміни на свою четверту вертикальну картинку
                alt="Готові роботи учасників"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Розділ 6 */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 mt-12">
              Як потрапити на наступний майстер-клас «Поліської Казки»?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Якщо ви давно хотіли спробувати малювати, але не наважувалися записатися до художньої школи або придбати дорогі матеріали, відкриті арт-класи «Поліської Казки» можуть стати хорошою можливістю зробити перший крок.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed mb-6">
              Для участі не обов’язково мати художню освіту чи професійний досвід.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Стежте за новими анонсами Всеукраїнської культурної платформи «Поліська Казка» у соціальних мережах — саме там організатори повідомляють про дату, тему, умови реєстрації та наступні майстер-класи в Пирогові.
            </p>

            {/* Розділ 7 (Список з галочками) */}
            <div className="bg-secondary/30 rounded-[2rem] p-8 md:p-12 mb-12 border border-border/50">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                Чому варто відвідати арт-клас «Поліської Казки»?
              </h2>
              <ul className="space-y-4">
                {[
                  "можливість спробувати себе в живописі без попереднього досвіду;",
                  "професійний супровід художника;",
                  "усі необхідні матеріали для заняття;",
                  "натхнення українською культурною спадщиною;",
                  "унікальна атмосфера музею Пирогів;",
                  "можливість провести час творчо та змістовно;",
                  "знайомство з іншими людьми, які цікавляться мистецтвом;",
                  "можливість відпочити від повсякденної рутини через творчий процес."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Розділ 8 */}
            <div className="mt-16 mb-8 flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:-translate-y-1 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                «Поліська Казка»: культура, яка надихає творити
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Всеукраїнська культурна платформа «Поліська Казка» створена для підтримки молодих українських художників, популяризації українського мистецтва та збереження й сучасного переосмислення культурної спадщини України.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Одним із ключових напрямів діяльності платформи є створення можливостей для безпосереднього знайомства людей із мистецтвом. Саме тому відкриті арт-класи, майстер-класи з живопису та творчі зустрічі є важливою частиною роботи «Поліської Казки».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Платформа прагне показати: українська культура — це не лише музейні експонати та сторінки підручників. Це живий простір, у якому кожен може стати учасником творчого процесу.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed mb-8">
              Пирогів, українська хата, народна традиція, пензель, фарби та власна фантазія — іноді саме з цього починається особиста історія любові до українського мистецтва.
            </p>
            
            <div className="bg-primary text-primary-foreground p-6 rounded-2xl text-center shadow-lg">
              <p className="text-xl font-medium">
                Слідкуйте за наступними анонсами «Поліської Казки» та долучайтеся до нових творчих зустрічей.
              </p>
            </div>

            {/* ТЕГИ (SEO) */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 font-medium">
                <Info className="w-4 h-4" />
                <span>Теми статті:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Поліська Казка", "живопис", "майстер-клас", "Пирогів", 
                  "Київ", "українське мистецтво", "народне мистецтво", 
                  "арт-клас", "творчість", "українська культура", "молоді художники"
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-secondary/50 border border-border text-muted-foreground px-3 py-1.5 rounded-full text-sm hover:text-foreground hover:border-primary/30 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
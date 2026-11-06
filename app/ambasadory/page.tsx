import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { ambassadors } from "./ambassadors"

export const metadata: Metadata = {
  title: "Амбасадори | Культурна Платформа «Поліська Казка»",
  description: "Амбасадори культурної платформи «Поліська Казка» та національного конкурсу народного мистецтва.",
}

export default function AmbassadorsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="page-hero py-16 md:py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              Амбасадори
            </h1>
            <p className="text-muted text-center max-w-2xl mx-auto mb-12">
              Люди, які підтримують платформу «Поліська Казка» та популяризують українське мистецтво
            </p>

            <div className="grid gap-10 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
              {ambassadors.map((person) => (
                <article key={person.name} className="text-center group">
                  <div className="aspect-square mb-4 max-w-[240px] mx-auto">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">{person.name}</h2>
                  <p className="text-sm text-primary font-medium mb-3">{person.role}</p>
                  <p className="text-sm text-muted leading-relaxed">{person.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

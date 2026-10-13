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
        <section className="py-16 md:py-24 bg-muted/10 min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              Амбасадори
            </h1>
            <p className="text-muted text-center max-w-2xl mx-auto mb-12">
              Люди, які підтримують платформу «Поліська Казка» та популяризують українське мистецтво
            </p>

            {ambassadors.length === 0 ? (
              <p className="text-center text-muted">Список амбасадорів незабаром з’явиться.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {ambassadors.map((person) => (
                  <div key={person.name} className="text-center group">
                    <div className="aspect-square mb-4 overflow-hidden rounded-2xl bg-secondary">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{person.name}</h3>
                    <p className="text-xs md:text-sm text-primary font-medium mb-1">{person.role}</p>
                    <p className="text-xs text-muted">{person.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

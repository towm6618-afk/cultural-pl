import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { juryMembers } from "./jury"

export const metadata: Metadata = {
  title: "Журі конкурсу | Культурна Платформа «Поліська Казка»",
  description: "Конкурсна комісія національного конкурсу народного мистецтва «Поліська Казка».",
}

export default function JuryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
              Конкурсна комісія
            </h1>
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
                  <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{member.name}</h3>
                  <p className="text-xs md:text-sm text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-muted line-clamp-2 hidden md:block">{member.description}</p>
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

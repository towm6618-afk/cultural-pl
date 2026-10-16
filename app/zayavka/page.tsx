import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import { ApplicationForm } from "./application-form"
import { SUBMISSIONS_OPEN_FROM, isSubmissionOpen } from "./config"

// Стан «відкрито / ще ні» рахується на кожен запит, а не під час збірки
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Подати заявку на конкурс «Поліська Казка» 2026",
  description:
    "Подайте заявку на участь у другому Національному конкурсі народного мистецтва «Поліська Казка» для молодих художників віком від 16 до 30 років.",
}

export default function ZayavkaPage() {
  const isOpen = isSubmissionOpen()

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-6">
            <Link
              href="/konkurs"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Назад до конкурсу
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Другий національний конкурс
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Заявка на участь у конкурсі
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Для художників і аматорів віком від 16 до 30 років. Тема — «Поліська Казка».
            </p>
          </div>

          <ApplicationForm isOpen={isOpen} opensFrom={SUBMISSIONS_OPEN_FROM} />
        </div>
      </main>
      <Footer />
    </>
  )
}

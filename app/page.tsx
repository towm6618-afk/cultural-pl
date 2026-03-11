import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Mission } from "@/components/mission"
import { Media } from "@/components/media"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Media />
        <Partners />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata, Viewport } from "next"
import { Montserrat, IBM_Plex_Serif } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
})

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-plex-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Культурна Платформа «Поліська Казка»",
  description: "Популяризуємо українське мистецтво, підтримуємо молодих митців. Всеукраїнська культурна ініціатива для сучасних українських художників.",
}

export const viewport: Viewport = {
  themeColor: "#0A4123",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${plexSerif.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

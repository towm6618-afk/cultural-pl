import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-inter",
  display: "swap"
})

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-playfair",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Культурна Платформа «Поліська Казка»",
  description: "Популяризуємо українське мистецтво, підтримуємо молодих митців. Всеукраїнська культурна ініціатива для сучасних українських художників.",
}

export const viewport: Viewport = {
  themeColor: "#B8860B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

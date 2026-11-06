"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo, Strip } from "@/components/brand"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Головна" },
    { href: "/#about", label: "Про нас" },
    { href: "/news", label: "Новини" },
    { href: "/aukcions", label: "Аукціон" },
    { href: "/konkurs", label: "Конкурс" },
    { href: "/ambasadory", label: "Амбасадори" },
    { href: "/#media", label: "Медіа" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="Поліська Казка — на головну">
            <Logo tone="green" className="h-14 w-auto" />
          </Link>

          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-serif text-[15px] font-bold transition-colors border-b-2 pb-0.5 ${
                    active
                      ? "text-primary border-pink"
                      : "text-foreground border-transparent hover:text-primary hover:border-orange"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-primary"
            aria-label="Меню"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-background">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-lg font-bold transition-colors ${
                  pathname === link.href ? "text-pink" : "text-primary hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <Strip kind="dots" />
    </header>
  )
}

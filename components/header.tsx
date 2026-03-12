"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Головна" },
    { href: "/#about", label: "Про нас" },
    { href: "/konkurs", label: "Національний конкурс" },
    { href: "/#media", label: "Медіа" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BC%D0%B8%D1%81%D1%82%D0%B5%D1%86%D1%82%D0%B2%D0%BE%2C%20%D0%BA%D0%BE%D0%BF%D1%96%D1%8F-omvlCV4W3nKGq9vFPbgQMH5FG47jMo.png"
              alt="Поліська Казка"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${pathname === link.href
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSezGch8eqZ14ei-35R_HlpEqgniWM7gBzPfL2c4rNdGRQdSMQ/viewform?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPMTI0MDI0NTc0Mjg3NDE0AAGnrszkMQtoub9PJv2DCU5unTTCt5QQ-wu4-zeLqKpfCZar5-WzYq_iNPG2Xkk_aem_YvDpMOwNZIkQmV-xnZ4aOA&pli=1"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              Взяти участь
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors ${pathname === link.href
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/konkurs"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors text-center"
            >
              Взяти участь
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

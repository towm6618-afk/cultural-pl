"use client"

import { useEffect, useState } from "react"

// Початок прийому заявок: 1 листопада 2026, 00:00 за київським часом (UTC+2)
const START = Date.parse("2026-11-01T00:00:00+02:00")
const FORM_URL = "https://docs.google.com/forms/d/1fIVKulcRpSb5rdcp2Ybd3ZCXE5Oo0HyOxJ-LQYg5UeI/viewform"

export function ApplyButton() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const check = () => setOpen(Date.now() >= START)
    check()
    const id = setInterval(check, 30_000)
    return () => clearInterval(id)
  }, [])

  if (open) {
    return (
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-colors"
      >
        Подати заявку
      </a>
    )
  }

  return (
    <span
      aria-disabled="true"
      className="bg-primary/60  px-8 py-4 rounded-full text-lg font-medium cursor-not-allowed select-none"
    >
      Прийом заявок розпочнеться 1 ЛИСТОПАДА
    </span>
  )
}

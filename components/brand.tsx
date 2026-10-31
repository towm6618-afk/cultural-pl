/* Декоративні елементи з брендбуку «Поліська Казка» (файли у /public/brand) */

export type StripKind = "step" | "arrows" | "dots" | "crenel" | "dash" | "pattern" | "stripes"

export function Strip({ kind, className = "" }: { kind: StripKind; className?: string }) {
  return <div aria-hidden="true" className={`strip strip-${kind} ${className}`} />
}

export function Ornament({
  name,
  className = "",
  ext = "png",
}: {
  name: string
  className?: string
  ext?: "png" | "webp"
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/${name}.${ext}`}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      className={`pointer-events-none select-none ${className}`}
    />
  )
}

export function Logo({
  tone = "green",
  className = "",
}: {
  tone?: "green" | "cream" | "yellow"
  className?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/brand/logo-${tone}.png`} alt="Поліська Казка" className={className} />
  )
}

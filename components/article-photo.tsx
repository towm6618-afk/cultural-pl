// Допоміжні компоненти для фото в статтях.
// Якщо посилання порожнє або ще не замінене — фото просто не показується.

function isValid(src?: string) {
  return !!src && /^https?:\/\//.test(src.trim())
}

export function ArticleCover({ src, alt }: { src?: string; alt: string }) {
  if (!isValid(src)) return null
  return (
    <div className="max-w-3xl mx-auto w-full overflow-hidden rounded-[2rem] bg-secondary mb-10 shadow-lg">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  )
}

export function ArticlePhoto({ src, alt }: { src?: string; alt: string }) {
  if (!isValid(src)) return null
  return (
    <figure className="max-w-2xl mx-auto my-14 overflow-hidden rounded-[2rem] bg-secondary shadow-sm">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
      />
    </figure>
  )
}

export function ArticleGallery({ photos, alt }: { photos: string[]; alt: string }) {
  const valid = photos.filter(isValid)
  if (valid.length === 0) return null
  return (
    <div className="my-14">
      <div className="columns-1 sm:columns-2 gap-4 [&>*]:mb-4">
        {valid.map((src, i) => (
          <div key={i} className="break-inside-avoid overflow-hidden rounded-3xl bg-secondary shadow-sm">
            <img
              src={src}
              alt={`${alt} — фото ${i + 1}`}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

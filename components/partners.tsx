export function Partners() {
  const partners = [
    { name: "НАОМА", fullName: "Національна академія образотворчого мистецтва і архітектури" },
    { name: "МКУ", fullName: "Міністерство культури України" },
    { name: "УКФ", fullName: "Український культурний фонд" },
  ]

  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Партнери
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Наші партнери
          </h2>
          <p className="text-muted leading-relaxed">
            Ми співпрацюємо з провідними культурними інституціями України
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl border border-border p-8 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-primary">
                  {partner.name}
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                {partner.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

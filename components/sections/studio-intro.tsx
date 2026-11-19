import Image from 'next/image'

const principles = [
  {
    title: 'Structure',
    body: 'Every class follows a plan. You know what the session is for and how it connects to the week before.',
  },
  {
    title: 'Progress',
    body: 'Small, steady increases in load, skill, and effort. We track what matters and skip the guesswork.',
  },
  {
    title: 'Welcome',
    body: 'Coaches learn your name and your starting point. No one is expected to know the lifts on day one.',
  },
]

export function StudioIntro() {
  return (
    <section aria-labelledby="studio-title" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-12 lg:py-32">
        {/* Top editorial intro block: first in mobile reading flow, upper-right on desktop */}
        <div className="min-w-0 lg:col-span-7 lg:col-start-6 lg:row-start-1">
          <div className="hero-enter flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-accent">01</span>
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              Performance system
            </p>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Coach-led concept
            </span>
          </div>

          <h2
            id="studio-title"
            className="hero-enter hero-delay-1 font-display-tight mt-8 text-[clamp(2.65rem,6.5vw,5.75rem)] font-extrabold uppercase text-foreground"
          >
            Performance
            <br />
            is <span className="text-accent">built.</span>
          </h2>

          <p className="hero-enter hero-delay-2 mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            NovaFit is a concept for a small, coach-led studio. Performance is built through consistency, structured
            training, and intentional movement—around clear goals and a floor where every level belongs.
          </p>
        </div>

        {/* Architectural studio photography: compact framed crop on mobile, full asymmetric anchor on desktop */}
        <figure className="lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div className="flex h-full flex-col overflow-hidden rounded-sm border border-border-strong bg-surface">
            <div className="relative aspect-[5/4] flex-1 overflow-hidden bg-surface sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/studio.webp"
                alt="The NovaFit training floor: a row of squat racks and neatly stacked barbells under warm lighting."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="hero-reveal-photo object-cover object-[35%_48%] transition-transform duration-700 hover:scale-[1.02] lg:object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface/80 to-transparent"
              />
            </div>

            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-surface px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="flex items-center gap-2 text-foreground">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                Training floor
              </span>
              <span>Squat racks · Free weights</span>
            </figcaption>
          </div>
        </figure>

        {/* Three-pillar structured list: lower-right on desktop, natural continuation on mobile */}
        <div className="min-w-0 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:self-end">
          <ol className="divide-y divide-border border-y border-border-strong">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="group grid grid-cols-[2.75rem_1fr] gap-4 py-6 transition-colors hover:bg-surface/50 sm:px-2"
              >
                <span
                  aria-hidden="true"
                  className="font-display-tight pt-0.5 text-2xl font-extrabold text-accent"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground sm:text-base">
                      {principle.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-accent/60"
                    />
                  </div>
                  <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">{principle.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

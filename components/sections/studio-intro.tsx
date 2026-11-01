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
    <section aria-labelledby="studio-title" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:py-32 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface lg:aspect-auto">
          <Image
            src="/images/studio.webp"
            alt="The NovaFit training floor: a row of squat racks and neatly stacked barbells under warm lighting."
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-accent">01</span>
            <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
            The studio
          </p>
          <h2
            id="studio-title"
            className="font-display-tight text-5xl font-extrabold uppercase text-balance sm:text-6xl"
          >
            Training with a plan, coached with care.
          </h2>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            NovaFit is a concept for a small, coach-led studio. Sessions are built around clear goals,
            simple progressions, and a room where people of every level feel they belong.
          </p>

          <ol className="mt-12 divide-y divide-border border-y border-border">
            {principles.map((principle, index) => (
              <li key={principle.title} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                <span className="font-display-tight text-2xl font-extrabold text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-[0.08em]">{principle.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{principle.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

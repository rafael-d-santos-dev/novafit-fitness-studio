import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { ButtonLink } from '@/components/button'

const highlights = [
  { index: '01', label: 'Programs', value: 'Strength · Functional · HIIT · 1:1' },
  { index: '02', label: 'Format', value: 'Coach-led small groups' },
  { index: '03', label: 'First step', value: 'Introductory trial session' },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-background">
      {/* Mobile: dedicated portrait stage keeping the athlete recognizable above the copy.
          Desktop (md+): full-bleed widescreen canvas with athlete framed in the right two-thirds. */}
      <div className="relative h-[40svh] min-h-[15rem] w-full overflow-hidden md:absolute md:inset-0 md:-z-20 md:h-auto">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-reveal-photo object-cover object-[68%_22%] md:object-[72%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent md:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-background/50 to-transparent md:hidden"
        />
      </div>

      {/* Desktop directional scrim preserving left negative space for typography and athlete contrast on the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-gradient-to-r from-background via-background/85 via-45% to-background/15 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden h-44 bg-gradient-to-t from-background via-background/60 to-transparent md:block"
      />

      <div className="mx-auto flex max-w-7xl flex-col justify-end px-5 pb-10 pt-2 sm:px-8 md:min-h-[calc(100svh-4rem)] md:justify-between md:pb-14 md:pt-12">
        {/* Top restrained technical rail */}
        <div className="hero-enter flex flex-wrap items-center justify-between gap-3 border-b border-border-strong/70 pb-4">
          <p className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            <span>
              Nova<span className="text-accent">Fit</span> // Performance Studio
            </span>
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Portfolio demo · Fictional studio
          </p>
        </div>

        {/* Main editorial lockup */}
        <div className="mt-8 md:mt-auto md:pt-16">
          <p className="hero-enter mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Athlete in motion
          </p>

          <h1
            id="hero-title"
            className="hero-enter hero-delay-1 font-display-tight max-w-2xl text-[clamp(3.35rem,14vw,8.75rem)] font-extrabold uppercase text-foreground"
          >
            Train
            <br />
            Beyond
            <br />
            <span className="text-accent">Limits.</span>
          </h1>

          <p className="hero-enter hero-delay-2 mt-6 max-w-md text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
            Train with purpose. Build strength, confidence, and habits that last.
          </p>

          <div className="hero-enter hero-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#membership" size="lg">
              Explore Memberships
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href="#programs" size="lg" variant="secondary" className="bg-background/60">
              View Training Programs
            </ButtonLink>
          </div>

          <dl className="hero-enter hero-delay-3 mt-10 grid gap-4 border-t border-border-strong pt-5 sm:mt-14 sm:grid-cols-3 sm:gap-6 sm:pt-6">
            {highlights.map((item) => (
              <div key={item.label} className="min-w-0">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <span aria-hidden="true" className="text-accent">
                    {item.index}
                  </span>
                  <span aria-hidden="true" className="h-px w-3 bg-border-strong" />
                  <span className="text-accent">{item.label}</span>
                </dt>
                <dd className="mt-2 text-sm text-foreground/90">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

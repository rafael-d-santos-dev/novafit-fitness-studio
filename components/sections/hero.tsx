import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { ButtonLink } from '@/components/button'

const highlights = [
  { label: 'Programs', value: 'Strength · Functional · HIIT · 1:1' },
  { label: 'Format', value: 'Coach-led small groups' },
  { label: 'First step', value: 'Introductory trial session' },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/10 md:via-background/70"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end px-5 pb-10 pt-24 sm:px-8 md:pb-14">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-sm border border-border-strong bg-background/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          Portfolio demo · Fictional studio
        </p>

        <h1
          id="hero-title"
          className="font-display-tight max-w-4xl text-[clamp(4rem,13vw,11rem)] font-extrabold uppercase"
        >
          Stronger
          <br />
          <span className="text-accent">every day.</span>
        </h1>

        <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-foreground/85">
          Train with purpose. Build strength, confidence, and habits that last.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#membership" size="lg">
            Explore Memberships
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink href="#programs" size="lg" variant="secondary" className="bg-background/40">
            View Training Programs
          </ButtonLink>
        </div>

        <dl className="mt-16 grid gap-6 border-t border-border-strong pt-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</dt>
              <dd className="mt-2 text-sm text-foreground/90">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

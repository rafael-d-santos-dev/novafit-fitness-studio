import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/button'

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden border-t border-border bg-background text-foreground"
    >
      {/* Architectural performance-facility depth: quiet Obsidian/Graphite radial lighting and structural lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_75%_60%_at_80%_18%,rgba(183,243,74,0.07),transparent_62%),radial-gradient(ellipse_70%_70%_at_18%_100%,rgba(23,23,23,0.92),#0a0a0a_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:6rem_6rem] [mask-image:radial-gradient(ellipse_85%_75%_at_50%_45%,#000_35%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pb-28 md:py-28 lg:py-36">
        <div className="hero-enter flex flex-wrap items-center justify-between gap-3 border-b border-border-strong/70 pb-4">
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-accent">08</span>
            <span aria-hidden="true" className="text-border-strong">
              /
            </span>
            <span>The Next Level</span>
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            NovaFit // Intro trial &amp; membership
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <p className="hero-enter mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Train beyond limits
            </p>
            <h2
              id="final-cta-title"
              className="hero-enter hero-delay-1 font-display-tight text-[clamp(2.65rem,8.5vw,7.25rem)] font-extrabold uppercase text-foreground"
            >
              Your next level
              <br />
              starts <span className="text-accent">now.</span>
            </h2>
            <p className="hero-enter hero-delay-2 mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Compare studio membership levels or request an introductory trial session. Every path starts with
              structured coaching and a short movement check.
            </p>
          </div>

          <div className="hero-enter hero-delay-3 min-w-0 rounded-sm border border-border-strong bg-surface/95 p-6 sm:p-7 lg:col-span-4">
            <div className="flex items-center justify-between gap-2 border-b border-border pb-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="flex items-center gap-2 text-foreground">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                Choose Path
              </span>
              <span className="tabular-nums text-accent">01 // 02</span>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink href="#membership" size="lg" variant="primary" className="w-full justify-between">
                <span>Explore Memberships</span>
                <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </ButtonLink>
              <ButtonLink
                href="#trial"
                size="lg"
                variant="secondary"
                className="w-full justify-between bg-background/60"
              >
                <span>Request a Trial</span>
                <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </ButtonLink>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Portfolio demonstration only. No payments or real bookings are processed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

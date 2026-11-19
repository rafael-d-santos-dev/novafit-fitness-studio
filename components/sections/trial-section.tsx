import { Info } from 'lucide-react'
import { OpenAssistantButton } from '@/components/assistant-widget'
import { TrialRequestForm } from '@/components/trial-request-form'

const steps = [
  'Pick a program and send the request.',
  'A coach would reach out to agree a time.',
  'Your first session would start with a short movement check.',
]

const guidePaths = [
  {
    code: '01',
    focus: 'Strength & Muscle',
    match: 'Strength Training · Performance / Starter',
  },
  {
    code: '02',
    focus: 'Conditioning',
    match: 'Functional & HIIT · Performance',
  },
  {
    code: '03',
    focus: '1:1 Coaching',
    match: 'Personal Training · Performance / Unlimited',
  },
]

export function TrialSection() {
  return (
    <section id="trial" aria-labelledby="trial-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:py-32">
        <div className="border-b border-border pb-4">
          <div className="hero-enter flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-accent">06</span>
              <span aria-hidden="true" className="text-border-strong">
                /
              </span>
              <span>NovaFit Intelligence</span>
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="text-accent" aria-hidden="true">
                {'* '}
              </span>
              Concept demonstration · Predefined studio guide · No live AI
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="trial-title"
            className="hero-enter hero-delay-1 font-display-tight text-[clamp(2.5rem,6.8vw,5.75rem)] font-extrabold uppercase text-foreground md:col-span-7"
          >
            Smarter training
            <br />
            starts <span className="text-accent">here.</span>
          </h2>
          <p className="hero-enter hero-delay-2 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end md:pb-2">
            Explore the predefined studio guide to match your training focus with a program and membership, or submit an
            introductory trial request directly below.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="rounded-sm border border-border-strong bg-surface p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3.5">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  <span>Guided Matcher Preview</span>
                </p>
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  3 Focus Paths
                </span>
              </div>

              <ul className="divide-y divide-border" aria-label="Studio guide focus categories">
                {guidePaths.map((item) => (
                  <li key={item.code} className="flex items-baseline justify-between gap-4 py-3.5">
                    <div className="flex items-baseline gap-2.5">
                      <span aria-hidden="true" className="text-[11px] font-semibold tabular-nums text-accent">
                        {item.code}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-[0.06em] text-foreground">
                        {item.focus}
                      </span>
                    </div>
                    <span className="text-right text-xs text-muted-foreground">{item.match}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-border pt-5">
                <OpenAssistantButton className="w-full sm:w-auto">Open Concept Guide</OpenAssistantButton>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Opens the floating studio guide with predefined options that can pre-fill your trial form.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span aria-hidden="true" className="text-accent">
                  {'// '}
                </span>
                Intro Session Process
              </p>
              <ol className="mt-5 flex flex-col gap-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="font-display-tight text-2xl font-extrabold tabular-nums text-accent"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-muted-foreground sm:text-base">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside
              aria-label="Demo form notice"
              className="flex gap-3 rounded-sm border border-border-strong bg-surface p-5 text-sm leading-relaxed"
            >
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
              <p className="text-muted-foreground">
                <strong className="font-semibold text-foreground">This form is a demo.</strong> Submissions are
                validated in your browser only. Nothing is sent to a server, saved, or delivered to a real business.
              </p>
            </aside>
          </div>

          <div id="trial-form" tabIndex={-1} className="focus:outline-none lg:col-span-7">
            <TrialRequestForm />
          </div>
        </div>
      </div>
    </section>
  )
}

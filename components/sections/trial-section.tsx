import { Info } from 'lucide-react'
import { TrialRequestForm } from '@/components/trial-request-form'

const steps = [
  'Pick a program and send the request.',
  'A coach would reach out to agree a time.',
  'Your first session would start with a short movement check.',
]

export function TrialSection() {
  return (
    <section id="trial" aria-labelledby="trial-title" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:py-32 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-accent">06</span>
            <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
            Trial session
          </p>
          <h2 id="trial-title" className="font-display-tight text-5xl font-extrabold uppercase text-balance sm:text-6xl">
            Book an intro session.
          </h2>
          <ol className="mt-10 flex flex-col gap-5">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span aria-hidden="true" className="font-display-tight text-2xl font-extrabold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="pt-1 leading-relaxed text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>

          <aside
            aria-label="Demo form notice"
            className="mt-10 flex gap-3 border border-border-strong bg-surface p-5 text-sm leading-relaxed"
          >
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
            <p className="text-muted-foreground">
              <strong className="font-semibold text-foreground">This form is a demo.</strong> Submissions are validated in
              your browser only. Nothing is sent to a server, saved, or delivered to a real business.
            </p>
          </aside>
        </div>

        <div id="trial-form">
          <TrialRequestForm />
        </div>
      </div>
    </section>
  )
}

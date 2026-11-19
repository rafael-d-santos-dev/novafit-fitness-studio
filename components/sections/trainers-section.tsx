import { TrainerCard } from '@/components/trainer-card'
import { trainers } from '@/data/trainers'
import { cn } from '@/lib/utils'

export function TrainersSection() {
  return (
    <section id="trainers" aria-labelledby="trainers-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:py-32">
        <div className="border-b border-border pb-4">
          <div className="hero-enter flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-accent">03</span>
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              Coaches
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Fictional coach profiles — portfolio demonstration.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="trainers-title"
            className="hero-enter hero-delay-1 font-display-tight text-[clamp(2.65rem,6.8vw,6rem)] font-extrabold uppercase text-foreground md:col-span-7"
          >
            Built by
            <br />
            <span className="text-accent">people.</span>
          </h2>
          <p className="hero-enter hero-delay-2 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end md:pb-2">
            Coaches who explain the why behind each movement and adjust the plan to the person in front of them.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-6">
          {trainers.map((trainer, index) => (
            <li key={trainer.id} className={cn(index % 2 === 1 && 'lg:mt-10')}>
              <TrainerCard trainer={trainer} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

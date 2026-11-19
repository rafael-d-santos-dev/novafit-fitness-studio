import { SafeImage } from '@/components/safe-image'
import type { Trainer } from '@/types'

export function TrainerCard({ trainer, index = 0 }: { trainer: Trainer; index?: number }) {
  const titleId = `trainer-${trainer.id}`
  const indexLabel = String(index + 1).padStart(2, '0')

  return (
    <article
      aria-labelledby={titleId}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-border-strong/80 bg-surface transition-colors hover:border-border-strong"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-raised">
        <SafeImage
          src={trainer.image}
          alt={trainer.imageAlt}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-[50%_18%] grayscale-[35%] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span aria-hidden="true" className="tabular-nums text-accent">
            {indexLabel}
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <h3 id={titleId} className="font-display-tight mt-4 text-3xl font-extrabold uppercase text-foreground">
          {trainer.displayName}
        </h3>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{trainer.role}</p>

        <div className="mt-5 border-t border-border pt-4">
          <p className="sr-only">Specialties:</p>
          <ul className="flex flex-wrap gap-2">
            {trainer.specialties.map((specialty) => (
              <li
                key={specialty}
                className="rounded-sm border border-border-strong bg-background/60 px-2.5 py-1 text-xs text-foreground/90"
              >
                {specialty}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-sm">
            {trainer.intro}
          </p>
        </div>
      </div>
    </article>
  )
}

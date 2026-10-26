import { SafeImage } from '@/components/safe-image'
import type { Trainer } from '@/types'

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article aria-labelledby={`trainer-${trainer.id}`} className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <SafeImage
          src={trainer.image}
          alt={trainer.imageAlt}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale-[35%] transition duration-700 group-hover:grayscale-0"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-3 border-b border-border pb-3">
        <h3 id={`trainer-${trainer.id}`} className="font-display-tight text-3xl font-extrabold uppercase">
          {trainer.displayName}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{trainer.role}</p>
      </div>
      <p className="sr-only">Specialties:</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {trainer.specialties.map((specialty) => (
          <li
            key={specialty}
            className="rounded-sm border border-border-strong px-2 py-1 text-xs text-foreground/90"
          >
            {specialty}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{trainer.intro}</p>
    </article>
  )
}

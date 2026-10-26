'use client'

import { ArrowUpRight, Clock } from 'lucide-react'
import { SafeImage } from '@/components/safe-image'
import { useTrialSelection } from '@/components/trial-selection-context'
import type { Program } from '@/types'

const categoryLabel: Record<Program['category'], string> = {
  strength: 'Strength',
  conditioning: 'Conditioning',
  personal: 'Personal Training',
}

export function ProgramCard({ program }: { program: Program }) {
  const { setProgram } = useTrialSelection()
  const titleId = `program-${program.id}-title`

  return (
    <article aria-labelledby={titleId} className="group flex flex-col border border-border bg-surface">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={program.image}
          alt={program.imageAlt}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-background/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          {categoryLabel[program.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 id={titleId} className="font-display-tight text-4xl font-extrabold uppercase">
          {program.name}
        </h3>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{program.description}</p>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/90">
          {program.focus.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1 bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock aria-hidden="true" className="size-4 text-accent" />
            <span>
              <span className="text-foreground">~{program.sampleDurationMinutes} min</span> · {program.level}
              <span className="sr-only"> (sample duration)</span>
              <span aria-hidden="true" className="text-accent">
                {' *'}
              </span>
            </span>
          </p>
          <a
            href="#trial"
            onClick={() => setProgram(program.id)}
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:text-accent"
          >
            Try this program
            <span className="sr-only">: {program.name}</span>
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        </div>
      </div>
    </article>
  )
}

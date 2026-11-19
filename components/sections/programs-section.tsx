'use client'

import { useState } from 'react'
import { ProgramCard, type ProgramLayoutVariant } from '@/components/program-card'
import { ProgramFilters } from '@/components/program-filters'
import { programs } from '@/data/programs'
import { cn } from '@/lib/utils'
import type { ProgramFilter } from '@/types'

function getSlotConfig(total: number, index: number): { spanClass: string; variant: ProgramLayoutVariant } {
  if (total === 1) {
    return { spanClass: 'md:col-span-12', variant: 'feature-left' }
  }
  if (total === 2) {
    return index === 0
      ? { spanClass: 'md:col-span-5', variant: 'tall' }
      : { spanClass: 'md:col-span-7', variant: 'wide' }
  }
  if (index === 0) {
    return { spanClass: 'md:col-span-12', variant: 'feature-left' }
  }
  if (index === 1) {
    return { spanClass: 'md:col-span-5', variant: 'tall' }
  }
  if (index === 2) {
    return { spanClass: 'md:col-span-7', variant: 'wide' }
  }
  return { spanClass: 'md:col-span-12', variant: 'feature-right' }
}

export function ProgramsSection() {
  const [filter, setFilter] = useState<ProgramFilter>('all')
  const visiblePrograms = filter === 'all' ? programs : programs.filter((p) => p.category === filter)
  const listId = 'program-list'

  return (
    <section id="programs" aria-labelledby="programs-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:py-32">
        <div className="border-b border-border pb-4">
          <div className="hero-enter flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-accent">02</span>
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              Training programs
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="text-accent" aria-hidden="true">
                {'* '}
              </span>
              Session lengths are sample information
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="programs-title"
            className="hero-enter hero-delay-1 font-display-tight text-[clamp(2.35rem,6.8vw,6rem)] font-extrabold uppercase text-foreground md:col-span-8"
          >
            Every movement
            <br />
            has a <span className="text-accent">purpose.</span>
          </h2>
          <p className="hero-enter hero-delay-2 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:col-span-4 md:justify-self-end md:pb-2">
            Pick a focus, or combine them across the week. Every program scales to your current level.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <ProgramFilters value={filter} onChange={setFilter} controlsId={listId} />
          <p aria-live="polite" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Showing <span className="text-foreground">{visiblePrograms.length}</span> of {programs.length} programs
          </p>
        </div>

        <ul id={listId} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {visiblePrograms.map((program, index) => {
            const globalIndex = programs.findIndex((p) => p.id === program.id)
            const { spanClass, variant } = getSlotConfig(visiblePrograms.length, index)
            return (
              <li key={program.id} className={cn('flex', spanClass)}>
                <ProgramCard program={program} index={globalIndex} variant={variant} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

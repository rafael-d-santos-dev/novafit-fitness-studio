'use client'

import { useState } from 'react'
import { ProgramCard } from '@/components/program-card'
import { ProgramFilters } from '@/components/program-filters'
import { SectionHeading } from '@/components/section-heading'
import { programs } from '@/data/programs'
import type { ProgramFilter } from '@/types'

export function ProgramsSection() {
  const [filter, setFilter] = useState<ProgramFilter>('all')
  const visiblePrograms = filter === 'all' ? programs : programs.filter((p) => p.category === filter)
  const listId = 'program-list'

  return (
    <section id="programs" aria-labelledby="programs-title" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          id="programs-title"
          index="02"
          eyebrow="Training programs"
          title="Four ways to train."
          description="Pick a focus, or combine them across the week. Every program scales to your current level."
          note="Session lengths are sample information"
        />

        <div className="mt-12 flex flex-col gap-4 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <ProgramFilters value={filter} onChange={setFilter} controlsId={listId} />
          <p aria-live="polite" className="text-sm text-muted-foreground">
            Showing {visiblePrograms.length} of {programs.length} programs
          </p>
        </div>

        <ul id={listId} className="mt-10 grid gap-6 md:grid-cols-2">
          {visiblePrograms.map((program) => (
            <li key={program.id} className="flex">
              <ProgramCard program={program} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

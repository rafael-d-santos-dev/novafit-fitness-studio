'use client'

import { CalendarX2 } from 'lucide-react'
import { useTrialSelection } from '@/components/trial-selection-context'
import { programsById } from '@/data/programs'
import { trainersById } from '@/data/trainers'
import { cn } from '@/lib/utils'
import type { ScheduledClass } from '@/types'

const intensityStyles: Record<ScheduledClass['intensity'], string> = {
  Low: 'text-muted-foreground',
  Moderate: 'text-foreground',
  High: 'text-accent',
}

export function ClassList({ classes, dayLabel }: { classes: ScheduledClass[]; dayLabel: string }) {
  const { setProgram } = useTrialSelection()

  if (classes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 border border-dashed border-border-strong px-6 py-16 text-center">
        <CalendarX2 aria-hidden="true" className="size-8 text-muted-foreground" />
        <div>
          <p className="font-semibold">No sample classes on {dayLabel}</p>
          <p className="mt-1 text-sm text-muted-foreground">In this concept, {dayLabel} is a rest and recovery day. Pick another day to see sessions.</p>
        </div>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-border border-y border-border">
      {classes.map((session) => {
        const program = programsById[session.programId]
        const trainer = trainersById[session.trainerId]
        return (
          <li
            key={session.id}
            className="grid grid-cols-[4.5rem_1fr] items-center gap-x-4 gap-y-3 py-5 sm:grid-cols-[6rem_1fr_auto] md:grid-cols-[6rem_1.5fr_1fr_6rem_auto]"
          >
            <p className="font-display-tight text-3xl font-extrabold tabular-nums">
              <time>{session.startTime}</time>
            </p>
            <div>
              <h3 className="font-semibold">{session.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                with {trainer?.displayName ?? 'a coach'} · {session.durationMinutes} min
              </p>
            </div>
            <p className="col-start-2 text-sm sm:col-start-auto sm:hidden md:block">
              <span className="sr-only">Program: </span>
              <span className="text-muted-foreground">{program.name}</span>
            </p>
            <p className={cn('col-start-2 text-xs font-semibold uppercase tracking-[0.12em] sm:col-start-auto sm:hidden md:block', intensityStyles[session.intensity])}>
              <span className="sr-only">Intensity: </span>
              {session.intensity}
            </p>
            <a
              href="#trial-form"
              onClick={() => setProgram(session.programId)}
              className="col-start-2 inline-flex min-h-12 w-fit items-center rounded-sm border border-border-strong px-4 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:border-accent hover:text-accent sm:col-start-auto"
            >
              Request trial
              <span className="sr-only">
                {' '}for {session.name}, {dayLabel} at {session.startTime}
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

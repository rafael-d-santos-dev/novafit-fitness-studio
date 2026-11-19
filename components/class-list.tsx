'use client'

import { ArrowUpRight, CalendarX2 } from 'lucide-react'
import { useTrialSelection } from '@/components/trial-selection-context'
import { programsById } from '@/data/programs'
import { trainersById } from '@/data/trainers'
import { cn } from '@/lib/utils'
import type { ScheduledClass } from '@/types'

const intensityStyles: Record<ScheduledClass['intensity'], string> = {
  Low: 'border-border-strong bg-surface text-muted-foreground',
  Moderate: 'border-border-strong bg-surface text-foreground',
  High: 'border-accent/50 bg-accent/10 text-accent',
}

export function ClassList({ classes, dayLabel }: { classes: ScheduledClass[]; dayLabel: string }) {
  const { setProgram } = useTrialSelection()

  if (classes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-sm border border-dashed border-border-strong bg-surface/60 px-6 py-16 text-center">
        <div className="flex size-12 items-center justify-center rounded-sm border border-border-strong bg-background">
          <CalendarX2 aria-hidden="true" className="size-6 text-accent" />
        </div>
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Rest &amp; Recovery Day
          </p>
          <p className="font-display-tight text-2xl font-extrabold uppercase text-foreground sm:text-3xl">
            No sample classes on {dayLabel}
          </p>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
            In this concept, {dayLabel} is a rest and recovery day. Pick another day to see sessions.
          </p>
        </div>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-border border-y border-border-strong">
      {classes.map((session) => {
        const program = programsById[session.programId]
        const trainer = trainersById[session.trainerId]
        return (
          <li
            key={session.id}
            className="grid grid-cols-[4.5rem_1fr] items-start gap-x-4 gap-y-4 py-6 transition-colors hover:bg-surface/40 sm:grid-cols-[5.5rem_1fr_auto] sm:items-center sm:px-2 lg:grid-cols-[6.5rem_1.5fr_1fr_7.5rem_auto]"
          >
            <p className="font-display-tight text-3xl font-extrabold tabular-nums text-foreground sm:text-4xl">
              <time>{session.startTime}</time>
            </p>

            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{session.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                with {trainer?.displayName ?? 'a coach'} · {session.durationMinutes} min
              </p>

              {/* Visible below lg so Program and Intensity remain readable at 320px–1023px (including 640px–767px) */}
              <div className="mt-3 flex flex-wrap items-center gap-2.5 lg:hidden">
                <span className="text-xs font-medium text-muted-foreground">
                  <span className="sr-only">Program: </span>
                  {program.name}
                </span>
                <span
                  className={cn(
                    'inline-flex items-center rounded-sm border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em]',
                    intensityStyles[session.intensity],
                  )}
                >
                  <span className="sr-only">Intensity: </span>
                  {session.intensity}
                </span>
              </div>
            </div>

            <p className="hidden text-sm text-muted-foreground lg:block">
              <span className="sr-only">Program: </span>
              {program.name}
            </p>

            <div className="hidden lg:block">
              <span
                className={cn(
                  'inline-flex items-center rounded-sm border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]',
                  intensityStyles[session.intensity],
                )}
              >
                <span className="sr-only">Intensity: </span>
                {session.intensity}
              </span>
            </div>

            <a
              href="#trial-form"
              onClick={() => setProgram(session.programId)}
              className="col-span-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-border-strong bg-surface px-4 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:border-accent hover:text-accent sm:col-span-1 sm:w-auto"
            >
              Request trial
              <span className="sr-only">
                {' '}
                for {session.name}, {dayLabel} at {session.startTime}
              </span>
              <ArrowUpRight aria-hidden="true" className="size-3.5 text-accent" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

'use client'

import { useState } from 'react'
import { ClassList } from '@/components/class-list'
import { ScheduleSelector, tabId } from '@/components/schedule-selector'
import { schedule, weekdays } from '@/data/schedule'
import type { Weekday } from '@/types'

const classCounts = weekdays.reduce(
  (acc, day) => ({ ...acc, [day.value]: schedule.filter((c) => c.day === day.value).length }),
  {} as Record<Weekday, number>,
)

export function ScheduleSection() {
  const [day, setDay] = useState<Weekday>('mon')
  const dayLabel = weekdays.find((d) => d.value === day)?.label ?? ''
  const classes = schedule
    .filter((session) => session.day === day)
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
  const panelId = 'schedule-panel'

  return (
    <section id="schedule" aria-labelledby="schedule-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:py-32">
        <div className="border-b border-border pb-4">
          <div className="hero-enter flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-accent">04</span>
              <span aria-hidden="true" className="text-border-strong">
                /
              </span>
              <span>Weekly schedule</span>
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="text-accent" aria-hidden="true">
                {'* '}
              </span>
              Illustrative timetable, not real availability
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="schedule-title"
            className="hero-enter hero-delay-1 font-display-tight text-[clamp(2.35rem,6.8vw,6rem)] font-extrabold uppercase text-foreground md:col-span-8"
          >
            Structured
            <br />
            for <span className="text-accent">progress.</span>
          </h2>
          <p className="hero-enter hero-delay-2 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:col-span-4 md:justify-self-end md:pb-2">
            Choose a day to see the sample timetable. Use the arrow keys to move between days.
          </p>
        </div>

        <div className="mt-12">
          <ScheduleSelector value={day} onChange={setDay} counts={classCounts} panelId={panelId} />

          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(day)}
            tabIndex={0}
            className="mt-8 rounded-sm focus-visible:outline-offset-4"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                <span>{dayLabel}</span>
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.16em] tabular-nums text-muted-foreground">
                {classes.length} {classes.length === 1 ? 'class' : 'classes'}
              </p>
            </div>
            <ClassList classes={classes} dayLabel={dayLabel} />
          </div>
        </div>
      </div>
    </section>
  )
}

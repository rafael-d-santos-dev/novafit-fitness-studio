'use client'

import { useState } from 'react'
import { ClassList } from '@/components/class-list'
import { ScheduleSelector, tabId } from '@/components/schedule-selector'
import { SectionHeading } from '@/components/section-heading'
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
    <section id="schedule" aria-labelledby="schedule-title" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:py-32">
        <SectionHeading
          id="schedule-title"
          index="04"
          eyebrow="Weekly schedule"
          title="Plan your week."
          description="Choose a day to see the sample timetable. Use the arrow keys to move between days."
          note="Illustrative timetable, not real availability"
        />

        <div className="mt-12">
          <ScheduleSelector value={day} onChange={setDay} counts={classCounts} panelId={panelId} />
          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(day)}
            tabIndex={0}
            className="mt-8 rounded-sm focus-visible:outline-offset-4"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {dayLabel} · {classes.length} {classes.length === 1 ? 'class' : 'classes'}
            </p>
            <ClassList classes={classes} dayLabel={dayLabel} />
          </div>
        </div>
      </div>
    </section>
  )
}

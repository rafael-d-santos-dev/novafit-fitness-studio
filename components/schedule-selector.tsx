'use client'

import { useRef, type KeyboardEvent } from 'react'
import { weekdays } from '@/data/schedule'
import { cn } from '@/lib/utils'
import type { Weekday } from '@/types'

interface ScheduleSelectorProps {
  value: Weekday
  onChange: (day: Weekday) => void
  counts: Record<Weekday, number>
  panelId: string
}

export const tabId = (day: Weekday) => `schedule-tab-${day}`

export function ScheduleSelector({ value, onChange, counts, panelId }: ScheduleSelectorProps) {
  const tabRefs = useRef<Partial<Record<Weekday, HTMLButtonElement | null>>>({})

  const focusDay = (index: number) => {
    const day = weekdays[(index + weekdays.length) % weekdays.length].value
    onChange(day)
    tabRefs.current[day]?.focus()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keyActions: Record<string, () => void> = {
      ArrowRight: () => focusDay(index + 1),
      ArrowDown: () => focusDay(index + 1),
      ArrowLeft: () => focusDay(index - 1),
      ArrowUp: () => focusDay(index - 1),
      Home: () => focusDay(0),
      End: () => focusDay(weekdays.length - 1),
    }
    const action = keyActions[event.key]
    if (action) {
      event.preventDefault()
      action()
    }
  }

  return (
    <div
      role="tablist"
      aria-label="Day of the week"
      className="grid grid-cols-7 border border-border"
    >
      {weekdays.map((day, index) => {
        const isActive = day.value === value
        return (
          <button
            key={day.value}
            ref={(el) => {
              tabRefs.current[day.value] = el
            }}
            id={tabId(day.value)}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(day.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              'flex flex-col items-center gap-1 border-r border-border py-4 transition-colors last:border-r-0 focus-visible:-outline-offset-2',
              isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-surface-raised hover:text-foreground',
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm">
              <span className="sm:hidden" aria-hidden="true">
                {day.short.charAt(0)}
              </span>
              <span className="hidden sm:inline" aria-hidden="true">
                {day.short}
              </span>
              <span className="sr-only">{day.label}</span>
            </span>
            <span
              className={cn('text-[11px] tabular-nums', isActive ? 'text-accent-foreground/75' : 'text-muted-foreground')}
            >
              {counts[day.value]}
              <span className="sr-only"> classes</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

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
      className="grid grid-cols-4 overflow-hidden rounded-sm border border-border-strong bg-background sm:grid-cols-7"
    >
      {weekdays.map((day, index) => {
        const isActive = day.value === value
        const dayIndex = String(index + 1).padStart(2, '0')
        const count = counts[day.value]

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
              'flex min-h-16 flex-col items-start justify-between gap-2 border-b border-r border-border px-3 py-3 text-left transition-colors focus-visible:-outline-offset-2 sm:items-center sm:border-b-0 sm:px-2 sm:py-4 sm:text-center sm:last:border-r-0 [&:nth-child(4n)]:border-r-0 sm:[&:nth-child(4n)]:border-r [&:nth-child(n+5)]:border-b-0',
              isActive
                ? 'bg-accent text-accent-foreground'
                : 'bg-surface text-muted-foreground hover:bg-surface-raised hover:text-foreground',
            )}
          >
            <span className="flex w-full items-center justify-between text-[10px] font-semibold uppercase tracking-[0.14em] sm:justify-center sm:gap-1.5">
              <span aria-hidden="true" className={cn('tabular-nums', isActive ? 'text-accent-foreground/75' : 'text-accent')}>
                {dayIndex}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'size-1.5 rounded-full sm:hidden',
                  isActive ? 'bg-accent-foreground' : count > 0 ? 'bg-accent' : 'bg-border-strong',
                )}
              />
            </span>

            <span className="flex w-full items-baseline justify-between gap-1 sm:flex-col sm:items-center sm:gap-1">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-current sm:text-sm">
                <span aria-hidden="true">{day.short}</span>
                <span className="sr-only">{day.label}</span>
              </span>
              <span
                className={cn(
                  'text-xs font-medium tabular-nums',
                  isActive ? 'text-accent-foreground/80' : 'text-muted-foreground',
                )}
              >
                {count}
                <span className="sr-only"> {count === 1 ? 'class' : 'classes'}</span>
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

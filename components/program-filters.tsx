import { programFilters } from '@/data/programs'
import { cn } from '@/lib/utils'
import type { ProgramFilter } from '@/types'

interface ProgramFiltersProps {
  value: ProgramFilter
  onChange: (value: ProgramFilter) => void
  controlsId: string
}

export function ProgramFilters({ value, onChange, controlsId }: ProgramFiltersProps) {
  return (
    <div role="group" aria-label="Filter programs by category" className="flex flex-wrap gap-2">
      {programFilters.map((filter, index) => {
        const isActive = filter.value === value
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={isActive}
            aria-controls={controlsId}
            onClick={() => onChange(filter.value)}
            className={cn(
              'inline-flex min-h-12 items-center gap-2 rounded-sm border px-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors',
              isActive
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border-strong bg-surface/60 text-muted-foreground hover:border-foreground hover:text-foreground',
            )}
          >
            <span
              aria-hidden="true"
              className={cn('text-[10px] tabular-nums', isActive ? 'text-accent-foreground/80' : 'text-accent')}
            >
              {String(index).padStart(2, '0')}
            </span>
            <span>{filter.label}</span>
          </button>
        )
      })}
    </div>
  )
}

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
      {programFilters.map((filter) => {
        const isActive = filter.value === value
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={isActive}
            aria-controls={controlsId}
            onClick={() => onChange(filter.value)}
            className={cn(
              'h-10 rounded-sm border px-4 text-xs font-semibold uppercase tracking-[0.1em] transition-colors',
              isActive
                ? 'border-accent bg-accent text-accent-foreground'
                : 'border-border-strong text-muted-foreground hover:border-foreground hover:text-foreground',
            )}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

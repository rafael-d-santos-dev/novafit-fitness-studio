import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  note?: string
  className?: string
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  note,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-6 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-3xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-accent">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
          {eyebrow}
        </p>
        <h2
          id={id}
          className="font-display-tight text-5xl font-extrabold uppercase text-balance sm:text-6xl lg:text-7xl"
        >
          {title}
        </h2>
      </div>
      {(description || note) && (
        <div className="max-w-sm md:pb-2">
          {description && <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>}
          {note && (
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="text-accent" aria-hidden="true">
                {'* '}
              </span>
              {note}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

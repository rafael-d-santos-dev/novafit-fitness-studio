'use client'

import { ArrowUpRight, Clock } from 'lucide-react'
import { ButtonLink } from '@/components/button'
import { SafeImage } from '@/components/safe-image'
import { useTrialSelection } from '@/components/trial-selection-context'
import { cn } from '@/lib/utils'
import type { Program, ProgramId } from '@/types'

export type ProgramLayoutVariant = 'feature-left' | 'feature-right' | 'tall' | 'wide'

const categoryLabel: Record<Program['category'], string> = {
  strength: 'Strength',
  conditioning: 'Conditioning',
  personal: 'Personal Training',
}

const imageFocusByProgram: Record<ProgramId, string> = {
  strength: 'object-[50%_22%]',
  functional: 'object-[46%_18%]',
  hiit: 'object-[52%_20%]',
  personal: 'object-[50%_20%]',
}

export function ProgramCard({
  program,
  index = 0,
  variant = 'wide',
}: {
  program: Program
  index?: number
  variant?: ProgramLayoutVariant
}) {
  const { setProgram } = useTrialSelection()
  const titleId = `program-${program.id}-title`
  const isSplit = variant === 'feature-left' || variant === 'feature-right'
  const isTall = variant === 'tall'
  const indexLabel = String(index + 1).padStart(2, '0')

  const imageSizes = isSplit
    ? '(min-width: 1024px) 58vw, 100vw'
    : isTall
      ? '(min-width: 768px) 42vw, 100vw'
      : '(min-width: 768px) 58vw, 100vw'

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        'group flex w-full flex-col overflow-hidden rounded-sm border border-border-strong/80 bg-surface transition-colors hover:border-border-strong',
        isSplit && 'md:flex-row',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-surface-raised',
          isSplit
            ? cn('aspect-[4/3] md:aspect-auto md:min-h-[24rem] md:w-[58%] lg:min-h-[28rem]', variant === 'feature-right' && 'md:order-2')
            : isTall
              ? 'aspect-[4/3] md:aspect-[4/5]'
              : 'aspect-[4/3] md:aspect-[16/11]',
        )}
      >
        <SafeImage
          src={program.image}
          alt={program.imageAlt}
          sizes={imageSizes}
          className={cn(
            'object-cover transition-transform duration-700 group-hover:scale-[1.03]',
            imageFocusByProgram[program.id],
          )}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface/75 via-surface/20 to-transparent"
        />
      </div>

      <div
        className={cn(
          'flex flex-1 flex-col p-6 sm:p-8',
          isSplit && 'md:w-[42%] md:justify-between lg:p-10',
          variant === 'feature-right' && 'md:order-1',
        )}
      >
        <div>
          <div className="border-b border-border pb-4">
            <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span aria-hidden="true" className="text-accent">
                {indexLabel}
              </span>
              <span aria-hidden="true" className="h-px w-4 bg-border-strong" />
              <span>{categoryLabel[program.category]}</span>
            </p>
          </div>

          <h3
            id={titleId}
            className={cn(
              'font-display-tight mt-6 font-extrabold uppercase text-foreground',
              isSplit ? 'text-4xl sm:text-5xl lg:text-[3.25rem]' : 'text-3xl sm:text-4xl',
            )}
          >
            {program.name}
          </h3>

          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[15px]">
            {program.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/90">
            {program.focus.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock aria-hidden="true" className="size-4 text-accent" />
              <span>
                <span className="text-foreground">~{program.sampleDurationMinutes} min</span> · {program.level}
                <span className="sr-only"> (sample duration)</span>
                <span aria-hidden="true" className="text-accent">
                  {' *'}
                </span>
              </span>
            </p>
            <ButtonLink
              href="#trial-form"
              size="sm"
              variant={isSplit ? 'primary' : 'secondary'}
              onClick={() => setProgram(program.id)}
              className="w-full sm:w-auto"
            >
              Try this program
              <span className="sr-only">: {program.name}</span>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  )
}

'use client'

import { Check } from 'lucide-react'
import { ButtonLink } from '@/components/button'
import { useTrialSelection } from '@/components/trial-selection-context'
import { cn } from '@/lib/utils'
import type { Membership } from '@/types'

export function MembershipCard({ plan, index = 0 }: { plan: Membership; index?: number }) {
  const { setPlan } = useTrialSelection()
  const titleId = `plan-${plan.id}-title`
  const indexLabel = String(index + 1).padStart(2, '0')

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        'relative flex flex-col rounded-sm border p-6 transition-colors sm:p-8',
        plan.recommended
          ? 'border-accent bg-surface-raised'
          : 'border-border-strong/80 bg-surface hover:border-border-strong',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span aria-hidden="true" className="tabular-nums text-accent">
            {indexLabel}
          </span>
          <span aria-hidden="true" className="text-border-strong">
            //
          </span>
          <span className="text-foreground">{plan.name}</span>
        </p>

        {plan.recommended && (
          <p className="rounded-sm border border-accent/60 bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
            Recommended
          </p>
        )}
      </div>

      <h3 id={titleId} className="font-display-tight mt-6 text-4xl font-extrabold uppercase text-foreground">
        {plan.name}
      </h3>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground lg:min-h-12">{plan.summary}</p>

      <p className="mt-8 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 border-b border-border pb-8">
        <span className="font-display-tight text-6xl font-extrabold tabular-nums text-foreground sm:text-7xl">
          ${plan.priceUsd}
        </span>
        <span className="text-sm text-muted-foreground">
          USD {plan.billingPeriod}
          <span className="sr-only"> (fictional example price)</span>
          <span aria-hidden="true" className="text-accent">
            {' *'}
          </span>
        </span>
      </p>

      <ul className="mt-8 flex flex-col gap-4" aria-label={`${plan.name} includes`}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-base leading-relaxed text-foreground/90 sm:text-sm">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <ButtonLink
          href="#trial-form"
          onClick={() => setPlan(plan.id)}
          variant={plan.recommended ? 'primary' : 'secondary'}
          className="w-full"
        >
          Start with {plan.name}
        </ButtonLink>
      </div>
    </article>
  )
}

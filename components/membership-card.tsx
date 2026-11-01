'use client'

import { Check } from 'lucide-react'
import { ButtonLink } from '@/components/button'
import { useTrialSelection } from '@/components/trial-selection-context'
import { cn } from '@/lib/utils'
import type { Membership } from '@/types'

export function MembershipCard({ plan }: { plan: Membership }) {
  const { setPlan } = useTrialSelection()
  const titleId = `plan-${plan.id}-title`

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        'relative flex flex-col border p-8',
        plan.recommended ? 'border-accent bg-surface-raised' : 'border-border bg-surface',
      )}
    >
      {plan.recommended && (
        <p className="absolute -top-3 left-8 bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">
          Recommended
        </p>
      )}
      <h3 id={titleId} className="font-display-tight text-4xl font-extrabold uppercase">
        {plan.name}
      </h3>
      <p className="mt-3 min-h-12 text-pretty text-sm leading-relaxed text-muted-foreground">{plan.summary}</p>

      <p className="mt-8 flex items-baseline gap-2 border-b border-border pb-8">
        <span className="font-display-tight text-7xl font-extrabold tabular-nums">${plan.priceUsd}</span>
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
          <li key={feature} className="flex gap-3 text-base leading-relaxed sm:text-sm">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>

      <ButtonLink
        href="#trial-form"
        onClick={() => setPlan(plan.id)}
        variant={plan.recommended ? 'primary' : 'secondary'}
        className="mt-10 w-full"
      >
        Start with {plan.name}
      </ButtonLink>
    </article>
  )
}

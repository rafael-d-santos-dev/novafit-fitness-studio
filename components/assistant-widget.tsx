'use client'

import { ArrowUpRight, Check, MessageSquare, RotateCcw, Sparkles, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { ButtonLink } from '@/components/button'
import { useTrialSelection } from '@/components/trial-selection-context'
import {
  INITIAL_ASSISTANT_STEP,
  assistantSteps,
  type AssistantOption,
  type AssistantStepId,
} from '@/data/assistant-flow'
import { memberships } from '@/data/memberships'
import { programsById } from '@/data/programs'
import { cn } from '@/lib/utils'
import type { MembershipId, ProgramId } from '@/types'

interface ConversationEntry {
  id: string
  role: 'assistant' | 'user'
  text: string
  programId?: ProgramId
  membershipId?: MembershipId
}

function createInitialEntries(): ConversationEntry[] {
  const initial = assistantSteps[INITIAL_ASSISTANT_STEP]
  return [
    {
      id: 'init-0',
      role: 'assistant',
      text: initial.message,
      programId: initial.recommendedProgramId,
      membershipId: initial.recommendedMembershipId,
    },
  ]
}

export function AssistantWidget() {
  const { setPlan, setProgram } = useTrialSelection()
  const [open, setOpen] = useState(false)
  const [currentStepId, setCurrentStepId] = useState<AssistantStepId>(INITIAL_ASSISTANT_STEP)
  const [entries, setEntries] = useState<ConversationEntry[]>(createInitialEntries)

  const launcherRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const dialogId = useId()
  const titleId = useId()

  const currentStep = assistantSteps[currentStepId]

  useEffect(() => {
    if (!open) return

    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        launcherRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    const container = scrollContainerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    container.scrollTo({
      top: container.scrollHeight,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }, [entries, open])

  const handleClose = () => {
    setOpen(false)
    requestAnimationFrame(() => launcherRef.current?.focus())
  }

  const handleSelectOption = (option: AssistantOption) => {
    const nextStep = assistantSteps[option.nextStepId]
    const nextIndex = entries.length

    setEntries((prev) => [
      ...prev,
      {
        id: `user-${nextIndex}`,
        role: 'user',
        text: option.label,
      },
      {
        id: `assistant-${nextIndex + 1}`,
        role: 'assistant',
        text: nextStep.message,
        programId: nextStep.recommendedProgramId,
        membershipId: nextStep.recommendedMembershipId,
      },
    ])
    setCurrentStepId(option.nextStepId)
  }

  const handleReset = () => {
    setEntries(createInitialEntries())
    setCurrentStepId(INITIAL_ASSISTANT_STEP)
  }

  const handleSelectRecommendation = (membershipId?: MembershipId, programId?: ProgramId) => {
    if (membershipId) setPlan(membershipId)
    if (programId) setProgram(programId)
    setOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <section
          id={dialogId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="fixed bottom-20 right-4 z-50 flex max-h-[min(36rem,calc(100dvh-7rem))] w-[calc(100vw-2rem)] max-w-[25rem] flex-col overflow-hidden rounded-sm border border-border-strong bg-surface shadow-2xl shadow-black/80 sm:bottom-24 sm:right-6"
        >
          <header className="flex items-start justify-between gap-3 border-b border-border bg-surface-raised px-4 py-3">
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                <Sparkles aria-hidden="true" className="size-3.5 shrink-0" />
                Concept Demonstration
              </p>
              <h2 id={titleId} className="font-display-tight mt-1 text-xl font-extrabold uppercase text-foreground">
                NovaFit Assistant
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                aria-label="Restart conversation"
                title="Restart conversation"
                className="inline-flex size-11 items-center justify-center rounded-sm border border-transparent text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <RotateCcw aria-hidden="true" className="size-4" />
              </button>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Close assistant"
                title="Close assistant"
                className="inline-flex size-11 items-center justify-center rounded-sm border border-transparent text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
          </header>

          <div
            ref={scrollContainerRef}
            aria-live="polite"
            className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
          >
            {entries.map((entry) => {
              const recommendedProgram = entry.programId ? programsById[entry.programId] : undefined
              const recommendedPlan = entry.membershipId
                ? memberships.find((m) => m.id === entry.membershipId)
                : undefined

              if (entry.role === 'user') {
                return (
                  <div key={entry.id} className="flex justify-end">
                    <p className="max-w-[85%] rounded-sm border border-accent/60 bg-accent/10 px-3.5 py-2.5 text-sm font-medium leading-relaxed text-foreground">
                      {entry.text}
                    </p>
                  </div>
                )
              }

              return (
                <div key={entry.id} className="space-y-3">
                  <p className="rounded-sm border border-border bg-surface-raised px-3.5 py-3 text-sm leading-relaxed text-foreground">
                    {entry.text}
                  </p>

                  {(recommendedProgram || recommendedPlan) && (
                    <div className="space-y-3 rounded-sm border border-accent bg-background p-3.5">
                      {recommendedProgram && (
                        <div className="border-b border-border pb-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                            Program Match
                          </p>
                          <div className="mt-1 flex items-baseline justify-between gap-2">
                            <p className="font-display-tight text-xl font-extrabold uppercase text-foreground">
                              {recommendedProgram.name}
                            </p>
                            <span className="text-xs text-muted-foreground">
                              ~{recommendedProgram.sampleDurationMinutes} min · {recommendedProgram.level}
                            </span>
                          </div>
                          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                            {recommendedProgram.focus.map((item) => (
                              <li key={item} className="flex items-center gap-1.5">
                                <span aria-hidden="true" className="size-1 bg-accent" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {recommendedPlan && (
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                              {recommendedPlan.recommended ? 'Recommended Plan' : 'Membership Option'}
                            </p>
                            <span className="text-xs font-semibold tabular-nums text-foreground">
                              ${recommendedPlan.priceUsd} USD {recommendedPlan.billingPeriod}
                            </span>
                          </div>
                          <p className="font-display-tight mt-1 text-2xl font-extrabold uppercase text-foreground">
                            {recommendedPlan.name}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {recommendedPlan.summary}
                          </p>
                          <ul className="mt-2.5 space-y-1.5" aria-label={`${recommendedPlan.name} includes`}>
                            {recommendedPlan.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-foreground/90">
                                <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-accent" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-3.5 flex flex-col gap-2">
                            <ButtonLink
                              href="#trial-form"
                              size="sm"
                              variant="primary"
                              className="w-full"
                              onClick={() =>
                                handleSelectRecommendation(recommendedPlan.id, recommendedProgram?.id)
                              }
                            >
                              Try {recommendedPlan.name}
                              <ArrowUpRight aria-hidden="true" className="size-4" />
                            </ButtonLink>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="border-t border-border bg-background px-4 py-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Choose a response
            </p>
            <div className="flex flex-col gap-2">
              {currentStep.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectOption(option)}
                  className="flex min-h-11 w-full items-center justify-between gap-2 rounded-sm border border-border-strong bg-surface px-3.5 py-2 text-left text-xs font-medium leading-snug text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <span>{option.label}</span>
                  <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 text-accent" />
                </button>
              ))}
            </div>
            <p className="mt-2.5 text-[11px] leading-snug text-muted-foreground">
              Conceptual demonstration using predefined options. No real AI or backend.
            </p>
          </div>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        aria-expanded={open}
        aria-controls={dialogId}
        aria-label={open ? 'Close NovaFit concept assistant' : 'Open NovaFit concept assistant'}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'inline-flex h-12 min-w-12 items-center justify-center gap-2 rounded-sm border px-4 text-xs font-semibold uppercase tracking-[0.08em] shadow-lg shadow-black/70 transition-colors',
          open
            ? 'border-border-strong bg-surface-raised text-foreground hover:border-accent hover:text-accent'
            : 'border-accent bg-accent text-accent-foreground hover:bg-accent-hover',
        )}
      >
        {open ? (
          <>
            <X aria-hidden="true" className="size-4" />
            <span>Close Guide</span>
          </>
        ) : (
          <>
            <MessageSquare aria-hidden="true" className="size-4" />
            <span>Studio Guide</span>
          </>
        )}
      </button>
    </div>
  )
}

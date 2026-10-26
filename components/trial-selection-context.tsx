'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { MembershipId, ProgramId } from '@/types'

interface TrialSelection {
  program: ProgramId | ''
  plan: MembershipId | ''
  setProgram: (program: ProgramId | '') => void
  setPlan: (plan: MembershipId | '') => void
}

const TrialSelectionContext = createContext<TrialSelection | null>(null)

export function TrialSelectionProvider({ children }: { children: ReactNode }) {
  const [program, setProgram] = useState<ProgramId | ''>('')
  const [plan, setPlan] = useState<MembershipId | ''>('')

  const value = useMemo(() => ({ program, plan, setProgram, setPlan }), [program, plan])

  return <TrialSelectionContext.Provider value={value}>{children}</TrialSelectionContext.Provider>
}

export function useTrialSelection() {
  const context = useContext(TrialSelectionContext)
  if (!context) {
    throw new Error('useTrialSelection must be used within TrialSelectionProvider')
  }
  return context
}

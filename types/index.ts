export type ProgramCategory = 'strength' | 'conditioning' | 'personal'

export type ProgramFilter = ProgramCategory | 'all'

export type ProgramId = 'strength' | 'functional' | 'hiit' | 'personal'

export interface Program {
  id: ProgramId
  name: string
  category: ProgramCategory
  description: string
  focus: string[]
  sampleDurationMinutes: number
  level: string
  image: string
  imageAlt: string
}

export interface Trainer {
  id: string
  displayName: string
  role: string
  specialties: string[]
  intro: string
  image: string
  imageAlt: string
}

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

export interface ScheduledClass {
  id: string
  day: Weekday
  name: string
  startTime: string
  durationMinutes: number
  programId: ProgramId
  trainerId: string
  intensity: 'Low' | 'Moderate' | 'High'
}

export type MembershipId = 'starter' | 'performance' | 'unlimited'

export interface Membership {
  id: MembershipId
  name: string
  priceUsd: number
  billingPeriod: string
  summary: string
  features: string[]
  recommended?: boolean
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export type ContactMethod = 'email' | 'phone'

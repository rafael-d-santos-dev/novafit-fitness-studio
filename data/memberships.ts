import type { Membership } from '@/types'

// Fictional pricing for a portfolio demo. No payments are processed.
export const memberships: Membership[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceUsd: 89,
    billingPeriod: 'per month',
    summary: 'A steady routine for people building the habit.',
    features: [
      '8 group classes per month',
      'Access to all class types',
      'Onboarding session with a coach',
      'Open gym during off-peak hours',
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    priceUsd: 149,
    billingPeriod: 'per month',
    summary: 'Structured training with regular coach check-ins.',
    features: [
      'Unlimited group classes',
      'Monthly progress review with a coach',
      'Personalised training block every 6 weeks',
      'Open gym at any time',
    ],
    recommended: true,
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    priceUsd: 249,
    billingPeriod: 'per month',
    summary: 'Group classes plus dedicated one-to-one coaching.',
    features: [
      'Everything in Performance',
      '4 personal training sessions per month',
      'Individual programming between sessions',
      'Priority class booking',
    ],
  },
]

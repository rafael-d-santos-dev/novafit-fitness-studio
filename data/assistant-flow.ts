import type { MembershipId, ProgramId } from '@/types'

export type AssistantStepId =
  | 'welcome'
  | 'goal_muscle'
  | 'goal_conditioning'
  | 'goal_personal'
  | 'muscle_steady'
  | 'recommend_muscle_performance'
  | 'how_it_works'

export interface AssistantOption {
  id: string
  label: string
  nextStepId: AssistantStepId
}

export interface AssistantStep {
  id: AssistantStepId
  message: string
  recommendedProgramId?: ProgramId
  recommendedMembershipId?: MembershipId
  options: AssistantOption[]
}

export const INITIAL_ASSISTANT_STEP: AssistantStepId = 'welcome'

export const assistantSteps: Record<AssistantStepId, AssistantStep> = {
  welcome: {
    id: 'welcome',
    message:
      'Welcome to the NovaFit concept guide. Pick your main training focus below to preview a studio program and membership match.',
    options: [
      {
        id: 'opt-muscle',
        label: 'Build strength & muscle gain',
        nextStepId: 'goal_muscle',
      },
      {
        id: 'opt-conditioning',
        label: 'Conditioning & daily movement',
        nextStepId: 'goal_conditioning',
      },
      {
        id: 'opt-personal',
        label: 'One-to-one personal coaching',
        nextStepId: 'goal_personal',
      },
    ],
  },
  goal_muscle: {
    id: 'goal_muscle',
    message:
      'For muscle gain, consistent progressive loading matters most. How do you plan to structure your weekly routine?',
    options: [
      {
        id: 'opt-muscle-structured',
        label: 'Train regularly with structured blocks & coach reviews',
        nextStepId: 'recommend_muscle_performance',
      },
      {
        id: 'opt-muscle-steady',
        label: 'Start at a lighter pace (around 2 sessions a week)',
        nextStepId: 'muscle_steady',
      },
    ],
  },
  muscle_steady: {
    id: 'muscle_steady',
    message:
      'Strength Training fits a gradual start with barbell and dumbbell work built around the main lifts. If you want unlimited group classes, a personalised training block every 6 weeks, and open gym at any time, Performance is the studio’s recommended tier.',
    recommendedProgramId: 'strength',
    recommendedMembershipId: 'starter',
    options: [
      {
        id: 'opt-compare-performance',
        label: 'See the Performance plan for muscle gain',
        nextStepId: 'recommend_muscle_performance',
      },
      {
        id: 'opt-trial-info-steady',
        label: 'How does the intro trial work?',
        nextStepId: 'how_it_works',
      },
      {
        id: 'opt-restart-steady',
        label: 'Choose a different goal',
        nextStepId: 'welcome',
      },
    ],
  },
  recommend_muscle_performance: {
    id: 'recommend_muscle_performance',
    message:
      'For a muscle gain goal, we recommend Strength Training paired with the Performance membership. Strength Training focuses on squat, hinge, press, and pull patterns with progressive loading, while Performance gives you unlimited group classes, open gym access at any time, and structured check-ins.',
    recommendedProgramId: 'strength',
    recommendedMembershipId: 'performance',
    options: [
      {
        id: 'opt-trial-info',
        label: 'How does the intro trial work?',
        nextStepId: 'how_it_works',
      },
      {
        id: 'opt-other-goal',
        label: 'Explore another training goal',
        nextStepId: 'welcome',
      },
    ],
  },
  goal_conditioning: {
    id: 'goal_conditioning',
    message:
      'For conditioning and day-to-day movement, Functional Fitness (kettlebells, carries, mobility) and HIIT Conditioning (timed intervals on bikes and rowers) are both included across all class types in Performance.',
    recommendedProgramId: 'functional',
    recommendedMembershipId: 'performance',
    options: [
      {
        id: 'opt-switch-muscle',
        label: 'Compare with the muscle gain match',
        nextStepId: 'recommend_muscle_performance',
      },
      {
        id: 'opt-trial-info-cond',
        label: 'How does the intro trial work?',
        nextStepId: 'how_it_works',
      },
      {
        id: 'opt-restart-cond',
        label: 'Start over',
        nextStepId: 'welcome',
      },
    ],
  },
  goal_personal: {
    id: 'goal_personal',
    message:
      'Personal Training offers one-to-one sessions planned around your goals, schedule, and training history. You can start with Performance for unlimited group classes and monthly reviews, or step up to Unlimited if you want 4 personal training sessions each month.',
    recommendedProgramId: 'personal',
    recommendedMembershipId: 'performance',
    options: [
      {
        id: 'opt-muscle-from-pt',
        label: 'See muscle gain recommendation',
        nextStepId: 'recommend_muscle_performance',
      },
      {
        id: 'opt-trial-info-pt',
        label: 'How does the intro trial work?',
        nextStepId: 'how_it_works',
      },
      {
        id: 'opt-restart-pt',
        label: 'Start over',
        nextStepId: 'welcome',
      },
    ],
  },
  how_it_works: {
    id: 'how_it_works',
    message:
      'Each membership starts with an introductory trial: pick a program and send the demo request, a coach would reach out to agree a time, and your first session would start with a short movement check. Because NovaFit is a portfolio demo, no request is sent or booked.',
    recommendedProgramId: 'strength',
    recommendedMembershipId: 'performance',
    options: [
      {
        id: 'opt-back-muscle',
        label: 'Review Strength & Performance match',
        nextStepId: 'recommend_muscle_performance',
      },
      {
        id: 'opt-restart-end',
        label: 'Restart conversation',
        nextStepId: 'welcome',
      },
    ],
  },
}

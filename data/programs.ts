import type { Program, ProgramFilter } from '@/types'

export const programs: Program[] = [
  {
    id: 'strength',
    name: 'Strength Training',
    category: 'strength',
    description:
      'Barbell and dumbbell work built around the main lifts. Each block has a clear goal, and loads progress gradually from week to week.',
    focus: ['Squat, hinge, press, pull', 'Progressive loading', 'Technique first'],
    sampleDurationMinutes: 60,
    level: 'All levels',
    image: '/images/program-strength.png',
    imageAlt: 'A man holding a barbell across his back at the bottom of a squat.',
  },
  {
    id: 'functional',
    name: 'Functional Fitness',
    category: 'conditioning',
    description:
      'Kettlebells, carries, and full-body patterns that build strength you can use outside the studio, with mobility work in every session.',
    focus: ['Kettlebells and carries', 'Mobility', 'Core stability'],
    sampleDurationMinutes: 50,
    level: 'Beginner friendly',
    image: '/images/program-functional.png',
    imageAlt: 'A woman swinging a kettlebell to chest height.',
  },
  {
    id: 'hiit',
    name: 'HIIT Conditioning',
    category: 'conditioning',
    description:
      'Short, structured intervals on bikes, rowers, and bodyweight circuits. Work and rest periods are timed and can be scaled for each person.',
    focus: ['Timed intervals', 'Engine building', 'Scalable effort'],
    sampleDurationMinutes: 40,
    level: 'Intermediate',
    image: '/images/program-hiit.png',
    imageAlt: 'An athlete sprinting on an air bike in a dimly lit studio.',
  },
  {
    id: 'personal',
    name: 'Personal Training',
    category: 'personal',
    description:
      'One-to-one sessions planned around your goals, schedule, and training history, with a coach adjusting each session as you go.',
    focus: ['Individual plan', 'Form coaching', 'Flexible scheduling'],
    sampleDurationMinutes: 55,
    level: 'Tailored',
    image: '/images/program-personal.png',
    imageAlt: 'A coach guiding a client through a dumbbell row with a hand on their back.',
  },
]

export const programFilters: { value: ProgramFilter; label: string }[] = [
  { value: 'all', label: 'All Programs' },
  { value: 'strength', label: 'Strength' },
  { value: 'conditioning', label: 'Conditioning' },
  { value: 'personal', label: 'Personal Training' },
]

export const programsById = Object.fromEntries(programs.map((p) => [p.id, p])) as Record<
  Program['id'],
  Program
>

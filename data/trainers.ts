import type { Trainer } from '@/types'

// Fictional profiles for a portfolio demo. Portraits are AI-generated and do not depict real people.
export const trainers: Trainer[] = [
  {
    id: 'maya',
    displayName: 'Maya R.',
    role: 'Strength Coach',
    specialties: ['Barbell technique', 'Beginner strength'],
    intro:
      'Maya keeps sessions calm and precise. She likes breaking a lift into small cues so new members feel confident under the bar.',
    image: '/images/trainer-maya.png',
    imageAlt: 'Portrait of Maya, a woman with short dark hair wearing a black training top.',
  },
  {
    id: 'dario',
    displayName: 'Dario M.',
    role: 'Conditioning Coach',
    specialties: ['Interval design', 'Rowing and bike work'],
    intro:
      'Dario plans conditioning blocks that are hard but measurable. Expect clear targets and honest pacing advice.',
    image: '/images/trainer-dario.png',
    imageAlt: 'Portrait of Dario, a bearded man in a grey t-shirt with arms crossed.',
  },
  {
    id: 'ines',
    displayName: 'Inês C.',
    role: 'Functional Coach',
    specialties: ['Kettlebells', 'Mobility'],
    intro:
      'Inês focuses on how you move day to day. Her classes mix loaded carries, kettlebell flows, and mobility work.',
    image: '/images/trainer-ines.png',
    imageAlt: 'Portrait of Inês, a smiling woman with curly hair tied back.',
  },
  {
    id: 'kenji',
    displayName: 'Kenji T.',
    role: 'Personal Trainer',
    specialties: ['One-to-one programming', 'Returning to training'],
    intro:
      'Kenji works with members one-to-one, building plans that fit around busy schedules and previous training experience.',
    image: '/images/trainer-kenji.png',
    imageAlt: 'Portrait of Kenji, a man with short black hair in a long-sleeve training shirt.',
  },
]

export const trainersById = Object.fromEntries(trainers.map((t) => [t.id, t])) as Record<
  string,
  Trainer
>

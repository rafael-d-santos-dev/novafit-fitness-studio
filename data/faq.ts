import type { FaqItem } from '@/types'

export const faqItems: FaqItem[] = [
  {
    id: 'beginners',
    question: 'I have never trained in a gym. Is NovaFit a good fit?',
    answer:
      'In this demo concept, yes. Every program is designed to be scaled, and the fictional onboarding session is where a coach would walk you through the basics before your first class.',
  },
  {
    id: 'trial',
    question: 'How would the trial session work?',
    answer:
      'You would choose a program and send a request through the trial form. In a real studio, a coach would then contact you to arrange a time. On this demo site, the form only shows a confirmation on screen — nothing is sent or booked.',
  },
  {
    id: 'choose-plan',
    question: 'Which membership should I pick?',
    answer:
      'Starter suits people training two or so times a week. Performance adds unlimited classes and regular coach reviews. Unlimited adds one-to-one sessions. All prices on this site are fictional examples.',
  },
  {
    id: 'class-levels',
    question: 'Are classes split by experience level?',
    answer:
      'The sample schedule mixes all-level classes with a few higher-intensity sessions. Each class lists an intensity so you can see what to expect.',
  },
  {
    id: 'bring',
    question: 'What should I bring to a session?',
    answer:
      'Comfortable training clothes, flat-soled shoes, and a water bottle are usually enough. Equipment would be provided by the studio.',
  },
  {
    id: 'policies',
    question: 'Can I pause or cancel a membership?',
    answer:
      'NovaFit is a fictional studio, so there are no real membership terms. A real business would publish its own pause, cancellation, and billing policies, reviewed by a legal professional.',
  },
]

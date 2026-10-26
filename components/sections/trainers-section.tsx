import { SectionHeading } from '@/components/section-heading'
import { TrainerCard } from '@/components/trainer-card'
import { trainers } from '@/data/trainers'

export function TrainersSection() {
  return (
    <section id="trainers" aria-labelledby="trainers-title" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          id="trainers-title"
          index="03"
          eyebrow="Coaches"
          title="The people on the floor."
          description="Coaches who explain the why behind each movement and adjust the plan to the person in front of them."
          note="Fictional profiles for demo purposes"
        />
        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <li key={trainer.id}>
              <TrainerCard trainer={trainer} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

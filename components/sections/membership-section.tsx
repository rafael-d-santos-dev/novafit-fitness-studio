import { MembershipCard } from '@/components/membership-card'
import { SectionHeading } from '@/components/section-heading'
import { memberships } from '@/data/memberships'

export function MembershipSection() {
  return (
    <section id="membership" aria-labelledby="membership-title" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:py-32">
        <SectionHeading
          id="membership-title"
          index="05"
          eyebrow="Membership"
          title="Choose your pace."
          description="Each option starts with an introductory trial. Choosing a plan pre-fills the trial request form below."
          note="Fictional pricing. No payments are taken"
        />
        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {memberships.map((plan) => (
            <li key={plan.id} className="flex flex-col [&>article]:flex-1">
              <MembershipCard plan={plan} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

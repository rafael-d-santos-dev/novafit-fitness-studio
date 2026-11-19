import { MembershipCard } from '@/components/membership-card'
import { memberships } from '@/data/memberships'

export function MembershipSection() {
  return (
    <section id="membership" aria-labelledby="membership-title" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:py-32">
        <div className="border-b border-border pb-4">
          <div className="hero-enter flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-accent">05</span>
              <span aria-hidden="true" className="text-border-strong">
                /
              </span>
              <span>Membership</span>
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <span className="text-accent" aria-hidden="true">
                {'* '}
              </span>
              Fictional pricing. No payments are taken.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="membership-title"
            className="hero-enter hero-delay-1 font-display-tight text-[clamp(2.5rem,6.8vw,6rem)] font-extrabold uppercase text-foreground md:col-span-7"
          >
            Choose your
            <br />
            <span className="text-accent">level.</span>
          </h2>
          <p className="hero-enter hero-delay-2 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:col-span-5 md:justify-self-end md:pb-2">
            Each option starts with an introductory trial. Choosing a plan pre-fills the trial request form below.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
          {memberships.map((plan, index) => (
            <li key={plan.id} className="flex flex-col [&>article]:flex-1">
              <MembershipCard plan={plan} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

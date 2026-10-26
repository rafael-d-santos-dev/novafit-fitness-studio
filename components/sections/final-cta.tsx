import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/button'

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 sm:px-8 md:py-28 lg:flex-row lg:items-end lg:justify-between">
        <h2
          id="final-cta-title"
          className="font-display-tight max-w-4xl text-[clamp(3.5rem,9vw,8rem)] font-extrabold uppercase"
        >
          Your first session starts here.
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink
            href="#membership"
            size="lg"
            className="bg-accent-foreground text-foreground hover:bg-surface-raised"
          >
            Explore Memberships
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink
            href="#trial"
            size="lg"
            className="border border-accent-foreground bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
          >
            Request a Trial
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

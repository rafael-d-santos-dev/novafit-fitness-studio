import { FAQAccordion } from '@/components/faq-accordion'
import { faqItems } from '@/data/faq'

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:py-32 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-accent">07</span>
            <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
            FAQ
          </p>
          <h2 id="faq-title" className="font-display-tight text-5xl font-extrabold uppercase text-balance sm:text-6xl">
            Questions, answered.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Answers describe how this fictional studio is imagined to work. They are not real policies.
          </p>
        </div>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  )
}

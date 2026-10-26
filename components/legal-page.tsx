import { AlertTriangle } from 'lucide-react'
import type { ReactNode } from 'react'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export interface LegalSection {
  heading: string
  body: ReactNode
}

export function LegalPage({
  title,
  lastUpdated,
  sections,
}: {
  title: string
  lastUpdated: string
  sections: LegalSection[]
}) {
  return (
    <>
      <Navbar onHomePage={false} />
      <main id="main" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Legal · Demo content</p>
        <h1 className="font-display-tight mt-4 text-6xl font-extrabold uppercase sm:text-7xl">{title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

        <div role="note" className="mt-10 flex gap-3 border-l-2 border-accent bg-surface p-5 text-sm leading-relaxed">
          <AlertTriangle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
          <p className="text-muted-foreground">
            <strong className="font-semibold text-foreground">Illustrative text only.</strong> NovaFit Fitness Studio is
            a fictional portfolio project. This page describes how this demo website works. It is not legal advice and
            must be reviewed by a qualified professional and completed with real business details before any real-world
            use.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {sections.map((section, index) => (
            <section key={section.heading} aria-labelledby={`legal-${index}`}>
              <h2 id={`legal-${index}`} className="text-xl font-semibold">
                <span className="mr-3 text-accent">{String(index + 1).padStart(2, '0')}</span>
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

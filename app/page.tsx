import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { FaqSection } from '@/components/sections/faq-section'
import { FinalCta } from '@/components/sections/final-cta'
import { Hero } from '@/components/sections/hero'
import { MembershipSection } from '@/components/sections/membership-section'
import { ProgramsSection } from '@/components/sections/programs-section'
import { ScheduleSection } from '@/components/sections/schedule-section'
import { StudioIntro } from '@/components/sections/studio-intro'
import { TrainersSection } from '@/components/sections/trainers-section'
import { TrialSection } from '@/components/sections/trial-section'
import { TrialSelectionProvider } from '@/components/trial-selection-context'

export default function HomePage() {
  return (
    <TrialSelectionProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <StudioIntro />
        <ProgramsSection />
        <TrainersSection />
        <ScheduleSection />
        <MembershipSection />
        <TrialSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </TrialSelectionProvider>
  )
}

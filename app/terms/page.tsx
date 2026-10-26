import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for the NovaFit portfolio demo website. Illustrative content for a fictional studio.',
}

const sections: LegalSection[] = [
  {
    heading: 'A portfolio demonstration',
    body: (
      <p>
        This website was created to demonstrate frontend design and development. NovaFit Fitness Studio, its coaches,
        programs, schedule, prices, and policies are fictional. Nothing on this site is an offer to sell a membership or
        service.
      </p>
    ),
  },
  {
    heading: 'No bookings, payments, or contracts',
    body: (
      <ul>
        <li>Submitting the trial form does not book a session or create any agreement.</li>
        <li>Membership prices are sample figures. No payment can be made through this site.</li>
        <li>FAQ answers describe an imagined studio and are not binding policies.</li>
      </ul>
    ),
  },
  {
    heading: 'Fitness information',
    body: (
      <p>
        Program descriptions are general and illustrative. They are not medical, health, or personalized training
        advice. Anyone starting a new exercise routine should consider speaking with a qualified health professional.
      </p>
    ),
  },
  {
    heading: 'Content and images',
    body: (
      <p>
        Photography on this site was generated with an AI image tool for the purpose of this demo. People shown are not
        real NovaFit coaches or members. Names and descriptions of coaches are invented and do not refer to real
        individuals.
      </p>
    ),
  },
  {
    heading: 'Before real-world use',
    body: (
      <p>
        Real terms of use would need the legal name and contact details of the operating business, governing law,
        membership and cancellation terms, liability provisions, and any consumer-protection requirements. These
        require real business information and review by a qualified legal professional.
      </p>
    ),
  },
]

export default function TermsPage() {
  return <LegalPage title="Terms of Use" lastUpdated="October 2026" sections={sections} />
}

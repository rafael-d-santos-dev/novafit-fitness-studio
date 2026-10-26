import type { Metadata } from 'next'
import { LegalPage, type LegalSection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How the NovaFit portfolio demo handles information. Illustrative content for a fictional studio.',
}

const sections: LegalSection[] = [
  {
    heading: 'Who this applies to',
    body: (
      <p>
        This policy covers the NovaFit Fitness Studio demo website. NovaFit is not a real company, has no registered
        address, and does not offer real services. There is no data controller or privacy contact because no personal
        data is collected by the site itself.
      </p>
    ),
  },
  {
    heading: 'Information entered in the trial form',
    body: (
      <>
        <p>
          The trial request form asks for a name, email address, preferred program, and optionally a phone number and
          message. This information is:
        </p>
        <ul>
          <li>validated only in your browser, using JavaScript on the page;</li>
          <li>
            <strong>not sent</strong> to any server, email service, or third party;
          </li>
          <li>
            <strong>not saved</strong> in cookies, local storage, session storage, or a database;
          </li>
          <li>cleared when you submit successfully, reload, or leave the page.</li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Cookies, analytics, and tracking',
    body: (
      <p>
        The site does not set cookies, use analytics, load advertising pixels, or embed third-party tracking scripts.
        For that reason it does not display a cookie banner. Fonts are bundled with the site at build time rather than
        loaded from an external font service while you browse.
      </p>
    ),
  },
  {
    heading: 'Hosting logs',
    body: (
      <p>
        Like any website, the hosting provider that serves these pages may process technical data such as IP addresses
        and request logs to deliver and secure the site. That processing is governed by the hosting provider&apos;s own
        terms and privacy policy, not by this demo.
      </p>
    ),
  },
  {
    heading: 'Before real-world use',
    body: (
      <p>
        If this design were used for a real business that actually collects data, this page would need to be rewritten
        to name the business, its contact details, the legal basis for processing, retention periods, recipients, and
        the rights available under applicable laws such as the GDPR or LGPD. That work requires real business
        information and professional legal review.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated="October 2026" sections={sections} />
}

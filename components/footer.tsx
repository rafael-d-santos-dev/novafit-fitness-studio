import Link from 'next/link'
import { Wordmark } from '@/components/wordmark'

const footerLinks = [
  { href: '/#top', label: 'Home' },
  { href: '/#programs', label: 'Programs' },
  { href: '/#membership', label: 'Membership' },
  { href: '/#trial', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-sm">
          <Wordmark className="text-3xl" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            NovaFit Fitness Studio is a fictional brand created for a frontend portfolio
            demonstration. It is not a real business and does not offer real memberships or
            services.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          {'Portfolio demo. All names, prices, schedules and profiles are illustrative. Images are AI-generated.'}
        </p>
      </div>
    </footer>
  )
}

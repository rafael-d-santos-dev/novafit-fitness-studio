'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { ButtonLink } from '@/components/button'
import { Wordmark } from '@/components/wordmark'
import { cn } from '@/lib/utils'

const navLinks = [
  { id: 'top', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'trainers', label: 'Trainers' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'membership', label: 'Membership' },
] as const

type SectionId = (typeof navLinks)[number]['id']

export function Navbar({ onHomePage = true }: { onHomePage?: boolean }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>('top')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const menuId = useId()

  const hrefFor = (id: string) => (onHomePage ? `#${id}` : `/#${id}`)

  useEffect(() => {
    if (!onHomePage) return
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActiveSection(visible[0].target.id as SectionId)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [onHomePage])

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onBreakpoint = (event: MediaQueryListEvent) => event.matches && setOpen(false)

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href={onHomePage ? '#top' : '/'} aria-label="NovaFit Fitness Studio, home" className="rounded-sm">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = onHomePage && activeSection === link.id
            return (
              <li key={link.id}>
                <a
                  href={hrefFor(link.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-sm py-1 text-sm font-medium transition-colors hover:text-foreground',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all',
                      isActive ? 'w-full' : 'w-0',
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ButtonLink href={hrefFor('trial')} size="sm" className="hidden sm:inline-flex">
            Book a Trial
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border-strong text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={hrefFor(link.id)}
                onClick={() => setOpen(false)}
                className="font-display-tight flex items-center justify-between border-b border-border py-4 text-3xl font-extrabold uppercase text-foreground hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <ButtonLink href={hrefFor('trial')} onClick={() => setOpen(false)} className="w-full">
              Book a Trial
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

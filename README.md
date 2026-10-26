# NovaFit Fitness Studio

A responsive, accessibility-focused marketing website for **NovaFit Fitness Studio**, a fictional premium fitness studio. I built it as a frontend portfolio piece.

> **Demo content disclaimer:** NovaFit doesn't exist. The trainers, class schedule, prices, policies, and FAQ answers are all invented for demonstration. The trial request form doesn't send or store anything, and nothing on this site is a real offer, booking, or legal commitment.

## Overview

The site is a single conversion-focused landing page with two lightweight legal routes. It uses a dark editorial look: near-black surfaces, charcoal panels, an electric lime accent (`#B7F34A`), and large photography. It also shows a few frontend skills in practice: typed mock data, reusable components, real client-side interactions, and careful accessibility work.

## Features

- **Responsive navigation:** sticky header, an accessible mobile menu (`aria-expanded`, Escape to close, focus management), and a highlight on the section you're viewing
- **Program filters:** category filters built with React state that update the program grid and announce the result count
- **Weekly schedule:** a keyboard-operable day selector (arrow keys, Home and End) with a class list per day and an empty state
- **Membership plans:** three sample tiers. Each CTA scrolls to the trial form with the matching program pre-selected. There's no checkout.
- **Trial request form:** labels, inline validation, an error summary that's announced to screen readers, a guard against double submission, and a demo success state. No network request is made.
- **FAQ accordion:** native buttons with `aria-expanded` and `aria-controls`
- **Legal pages:** `/privacy` and `/terms`, written to describe how this demo actually behaves
- **Reduced motion:** smooth scrolling and transitions turn off when `prefers-reduced-motion` is set
- **Image fallback:** if an image fails to load, a neutral placeholder is shown instead of a broken icon

## Technology stack

- [Next.js 16](https://nextjs.org/) (App Router, static prerendering)
- React 19 and TypeScript
- Tailwind CSS v4
- [Lucide React](https://lucide.dev/) icons
- `class-variance-authority`, `clsx`, and `tailwind-merge` for button variants and class merging

> The original brief asked for Vite. I built it on the Next.js setup that came with the workspace. Every route is statically prerendered, so the output works like a static site.

## Getting started

Requirements: Node.js 20+ and pnpm. npm or yarn should also work.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build      # type-checks and builds a production bundle
pnpm start      # serves the production build
```

## Project structure

```
app/
  layout.tsx            Root layout, fonts, metadata
  page.tsx              Home page (assembles sections)
  privacy/page.tsx      Illustrative privacy policy
  terms/page.tsx        Illustrative terms of use
  globals.css           Design tokens and base styles
components/
  sections/             Page sections (hero, programs, trainers, schedule, ...)
  navbar.tsx  footer.tsx  button.tsx  section-heading.tsx
  program-card.tsx  program-filters.tsx  trainer-card.tsx
  schedule-selector.tsx  class-list.tsx  membership-card.tsx
  trial-request-form.tsx  faq-accordion.tsx  safe-image.tsx
  trial-selection-context.tsx   Shares the chosen plan/program with the form
data/                   Mock content (programs, trainers, schedule, memberships, FAQ)
types/index.ts          Shared TypeScript models
public/images/          Photography assets
```

To change any content, edit the files in `data/`. You don't need to touch the components.

## Screenshots

_Add screenshots here._

| Desktop | Mobile |
| ------- | ------ |
| `docs/screenshot-desktop.png` | `docs/screenshot-mobile.png` |

## Deployment

The project deploys to any host that supports Next.js. Some options:

- **Vercel:** import the GitHub repository at vercel.com/new. It detects Next.js and needs no configuration or environment variables.
- **Other Node hosts:** run `pnpm build` and then `pnpm start`.

Every route is prerendered, so opening `/privacy` or `/terms` directly works without extra rewrite rules.

_No live deployment URL has been published yet._

## Privacy and third parties

- No analytics, advertising pixels, tracking scripts, or cookies
- No `localStorage` or `sessionStorage`
- Form input stays in React memory and is lost when you reload the page
- Fonts are self-hosted at build time through `next/font`

## Image assets

The images in `public/images/` were AI-generated for this project. They show no real people or trainers. Before you reuse them commercially, check the image generator's terms yourself. I haven't independently confirmed the licensing.

## Before real-world use

Before NovaFit could become a real business site, you would need to:

- Replace every fictional name, price, schedule, and policy
- Have a qualified professional review the privacy policy and terms, adding the real legal entity, contact details, and jurisdiction
- Connect the form to a backend with consent handling, and update the privacy policy to match
- Run a manual accessibility audit with assistive technology

## License

This is a portfolio demonstration. Add a license of your choice before publishing.

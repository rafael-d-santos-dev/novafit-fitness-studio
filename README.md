# NovaFit — Fitness Studio

A responsive, accessibility-focused fitness studio website built as a frontend portfolio project.

NovaFit combines a cinematic visual identity, interactive training experiences, membership selection, trial request flow, and a concept conversational assistant in a single-page experience.

**Live Demo:** https://novafit-fitness-studio.vercel.app

**Repository:** https://github.com/rafael-d-santos-dev/novafit-fitness-studio

> **Portfolio Demonstration:** NovaFit is a fictional fitness studio. Trainers, programs, schedules, prices, policies, and testimonials or business details are illustrative. The website does not represent a real business, and its forms do not send or store submissions. No real booking, payment, or commercial transaction takes place.

---

## Overview

NovaFit is a conversion-focused fitness studio website designed around a premium **Cinematic Tech** visual direction.

The experience uses an Obsidian and Graphite foundation, Electric Lime accents, Ice White typography, editorial compositions, and athletic photography to communicate performance, technology, and modern training.

The project demonstrates frontend development skills through reusable components, typed mock data, interactive UI, responsive layouts, accessibility considerations, and a predefined conversational assistant experience.

## Visual Direction

**NOVAFIT — CINEMATIC TECH**

- Obsidian: `#0A0A0A`
- Graphite: `#171717`
- Electric Lime: `#B7F34A`
- Ice White: `#F2F4EF`

The interface combines large condensed headlines, technical labels, asymmetric layouts, subtle transitions, structured content, and carefully framed photography.

The redesign emphasizes a progressive narrative across the homepage rather than a conventional fitness business template.

## Main Features

### 1. Cinematic Homepage

- Responsive navigation with an accessible mobile menu.
- Athletic hero composition with editorial typography.
- Performance-focused studio introduction.
- Responsive layouts and image treatments.
- Subtle CSS transitions and reduced-motion support.

### 2. Training Programs

Four illustrative training categories:

- Strength Training
- Functional Training
- HIIT
- Personal Training

Features:
- Interactive category filters.
- Dynamic program card layouts.
- Program selection connected to the trial request form.
- Accessible filter states and result announcements.

### 3. Coaches & Weekly Schedule

- Four fictional trainer profiles.
- Weekly schedule with seven selectable days.
- Keyboard-operable day selector.
- Class information including time, coach, duration, program, and intensity.
- Dedicated empty state for days without scheduled classes.

### 4. Membership Plans

Three illustrative membership tiers:

- Starter
- Performance
- Unlimited

Features:
- Responsive membership cards.
- Clear plan comparisons.
- Recommended plan styling.
- Plan selection connected to the trial request form.

All prices and benefits are fictional demonstration data. No checkout or payment processing is implemented.

### 5. NovaFit Intelligence — Assistant Concept

A predefined conversational guide designed to help visitors explore training goals and identify a suitable program and membership option.

Features:
- Goal-based conversation flow.
- Strength and muscle, conditioning, and personal coaching paths.
- Contextual program and membership recommendations.
- Integration with the existing trial selection context.
- Recommendation actions that prefill the trial request form.
- Reset and conversation controls.
- Responsive floating assistant interface.

> **Important:** NovaFit Intelligence is a concept demonstration, not a live AI integration. Its conversation is powered by a predefined decision flow and local application state. It does not use an LLM, external AI API, backend service, or remote knowledge base.

### 6. Trial Request Form

- Accessible form labels and validation.
- Conditional phone validation.
- Error summary and screen-reader announcements.
- Selected program and membership prefill.
- Demo acknowledgment.
- Simulated submission and confirmation state.

The form does not send, store, or process submissions on a server.

### 7. Additional Features

- FAQ accordion.
- Privacy and Terms demonstration pages.
- Accessible navigation and interaction patterns.
- Image loading fallback.
- Reduced-motion support.
- Responsive layouts designed for mobile and desktop.

---

## Technology Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React**
- **class-variance-authority**
- **clsx**
- **tailwind-merge**

The application uses reusable React components, typed data models, and client-side state where interactive behavior is required.

No external database, authentication system, payment gateway, or production backend is included.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  privacy/
    page.tsx
  terms/
    page.tsx

components/
  sections/
    hero.tsx
    studio-intro.tsx
    programs-section.tsx
    trainers-section.tsx
    schedule-section.tsx
    membership-section.tsx
    trial-section.tsx
    faq-section.tsx
    final-cta.tsx

  assistant-widget.tsx
  trial-request-form.tsx
  trial-selection-context.tsx
  program-card.tsx
  program-filters.tsx
  trainer-card.tsx
  schedule-selector.tsx
  class-list.tsx
  membership-card.tsx
  faq-accordion.tsx
  navbar.tsx
  footer.tsx

data/
  programs.ts
  trainers.ts
  schedule.ts
  memberships.ts
  faq.ts
  assistant-flow.ts

lib/
types/
public/
  images/
```

The structure above highlights the main application areas. Some additional shared UI components and utilities are omitted for brevity.

### Data Organization

Illustrative content is separated from presentation components.

The `data/` directory contains the program, trainer, schedule, membership, FAQ, and assistant conversation definitions.

This makes it possible to update demonstration content without rewriting the main UI components.

---

## Getting Started

### Requirements

- Node.js 20+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
pnpm build
```

### Run Production Build

```bash
pnpm start
```

---

## Deployment

The project is deployed on Vercel:

**https://novafit-fitness-studio.vercel.app**

The repository can be imported into Vercel for deployment using its Next.js integration.

---

## Accessibility & Responsive Design

Accessibility and responsive behavior are considered throughout the interface.

Implemented considerations include:

- Semantic HTML structure.
- Accessible navigation controls.
- Keyboard-operable schedule selector.
- Accessible filter and accordion states.
- Form labels, validation feedback, and error announcements.
- Visible focus states.
- Minimum touch target sizing for important controls.
- Reduced-motion preferences.
- Responsive layouts for narrow mobile screens and larger displays.

These implementations are not a substitute for a complete manual accessibility audit with assistive technologies.

## Privacy & Third-Party Services

The demonstration does not include:

- Analytics or advertising pixels.
- User authentication.
- A remote database.
- Backend form processing.
- Payment processing.
- External AI API integration.
- Persistent conversation or form submission storage.

Form and assistant interactions use client-side application state.

Fonts are self-hosted through `next/font`.

## Before Real-World Use

Before adapting NovaFit for an actual fitness business, the following would be necessary:

- Replace all fictional business information, trainers, programs, prices, and schedules.
- Obtain appropriate rights and permissions for all production imagery.
- Connect the trial request form to a secure backend.
- Implement appropriate consent and data handling.
- Review and adapt privacy and terms documents for the actual business and jurisdiction.
- Implement real booking and payment integrations if required.
- Replace the predefined assistant flow with a properly designed AI integration if live AI functionality is desired.
- Perform a complete accessibility, security, and production-readiness review.

## Project Purpose

NovaFit is an independent frontend portfolio project created to demonstrate modern web design and development practices, including:

- Responsive interface development.
- Component-based architecture.
- Interactive frontend experiences.
- Data-driven UI.
- Accessibility considerations.
- Conversational UI concepts.
- Visual storytelling and art direction.

It is a fictional concept project, not commissioned client work.

## License

This repository is a portfolio demonstration. No open-source license has been granted.

'use client'

import { CheckCircle2, Loader2 } from 'lucide-react'
import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/button'
import { useTrialSelection } from '@/components/trial-selection-context'
import { memberships } from '@/data/memberships'
import { programs } from '@/data/programs'
import { cn } from '@/lib/utils'
import type { ContactMethod, MembershipId, ProgramId } from '@/types'

const MESSAGE_LIMIT = 500
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type FieldName = 'fullName' | 'email' | 'program' | 'phone' | 'message' | 'acknowledge'
type Errors = Partial<Record<FieldName, string>>

interface LocalFields {
  fullName: string
  email: string
  contactMethod: ContactMethod
  phone: string
  message: string
  acknowledge: boolean
}

const emptyFields: LocalFields = {
  fullName: '',
  email: '',
  contactMethod: 'email',
  phone: '',
  message: '',
  acknowledge: false,
}

const fieldOrder: FieldName[] = ['fullName', 'email', 'program', 'phone', 'message', 'acknowledge']

function validate(fields: LocalFields, program: string): Errors {
  const errors: Errors = {}
  const name = fields.fullName.trim()
  if (!name) errors.fullName = 'Enter your full name.'
  else if (name.length < 2) errors.fullName = 'Name must be at least 2 characters.'

  const email = fields.email.trim()
  if (!email) errors.email = 'Enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter an email address in the format name@example.com.'

  if (!program) errors.program = 'Choose the program you would like to try.'

  if (fields.contactMethod === 'phone') {
    const digits = fields.phone.replace(/\D/g, '')
    if (!fields.phone.trim()) errors.phone = 'Enter a phone number, or choose email as your contact method.'
    else if (digits.length < 7 || digits.length > 15 || /[^\d\s()+-]/.test(fields.phone))
      errors.phone = 'Enter a valid phone number using digits, spaces, +, - or brackets.'
  }

  if (fields.message.length > MESSAGE_LIMIT) errors.message = `Keep your message under ${MESSAGE_LIMIT} characters.`
  if (!fields.acknowledge) errors.acknowledge = 'Please confirm you understand this is a demo form.'
  return errors
}

const inputClass =
  'block w-full rounded-sm border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40'

function Field({
  id,
  label,
  error,
  hint,
  optional,
  children,
}: {
  id: string
  label: string
  error?: string
  hint?: ReactNode
  optional?: boolean
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {optional ? (
          <span className="ml-2 font-normal text-muted-foreground">(optional)</span>
        ) : (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

const describedBy = (id: string, error?: string, hasHint?: boolean) =>
  error ? `${id}-error` : hasHint ? `${id}-hint` : undefined

export function TrialRequestForm() {
  const { program, plan, setProgram, setPlan } = useTrialSelection()
  const [fields, setFields] = useState<LocalFields>(emptyFields)
  const [errors, setErrors] = useState<Errors>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [submittedName, setSubmittedName] = useState('')
  const summaryRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)

  const update = <K extends keyof LocalFields>(key: K, value: LocalFields[K]) => {
    const next = { ...fields, [key]: value }
    setFields(next)
    if (submitAttempted) setErrors(validate(next, program))
  }

  const updateProgram = (value: ProgramId | '') => {
    setProgram(value)
    if (submitAttempted) setErrors(validate(fields, value))
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    setSubmitAttempted(true)
    const nextErrors = validate(fields, program)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setStatus('submitting')
    // Simulated latency only. Form data never leaves the browser and is not stored.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmittedName(fields.fullName.trim().split(/\s+/)[0])
    setFields(emptyFields)
    setStatus('success')
    requestAnimationFrame(() => successRef.current?.focus())
  }

  const reset = () => {
    setStatus('idle')
    setSubmitAttempted(false)
    setErrors({})
    setProgram('')
    setPlan('')
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-start gap-5 border border-accent bg-surface-raised p-8 sm:p-10">
        <CheckCircle2 aria-hidden="true" className="size-10 text-accent" />
        <h3 ref={successRef} tabIndex={-1} className="font-display-tight text-4xl font-extrabold uppercase focus:outline-none">
          Thanks, {submittedName}.
        </h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          Your demo request passed validation. Because NovaFit is a fictional studio,{' '}
          <strong className="font-semibold text-foreground">
            nothing was sent, stored, or booked
          </strong>
          , and no one will contact you.
        </p>
        <Button variant="secondary" onClick={reset}>
          Submit another demo request
        </Button>
      </div>
    )
  }

  const errorEntries = fieldOrder.filter((name) => errors[name])
  const isSubmitting = status === 'submitting'

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="trial-form-title" className="border border-border bg-surface p-6 sm:p-10">
      <h3 id="trial-form-title" className="sr-only">
        Trial request form
      </h3>

      {submitAttempted && errorEntries.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-8 border-l-2 border-danger bg-danger/10 p-4 focus:outline-none"
        >
          <p className="font-semibold text-danger">
            {errorEntries.length === 1 ? 'There is 1 problem' : `There are ${errorEntries.length} problems`} with your request
          </p>
          <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm">
            {errorEntries.map((name) => (
              <li key={name}>
                <a href={`#trial-${name}`} className="underline underline-offset-2 hover:text-accent">
                  {errors[name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <fieldset disabled={isSubmitting} className="grid gap-6 sm:grid-cols-2">
        <legend className="sr-only">Your details</legend>

        <Field id="trial-fullName" label="Full name" error={errors.fullName}>
          <input
            id="trial-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={fields.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={describedBy('trial-fullName', errors.fullName)}
            aria-required="true"
            className={cn(inputClass, errors.fullName ? 'border-danger' : 'border-border-strong')}
          />
        </Field>

        <Field id="trial-email" label="Email" error={errors.email}>
          <input
            id="trial-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={120}
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('trial-email', errors.email)}
            aria-required="true"
            className={cn(inputClass, errors.email ? 'border-danger' : 'border-border-strong')}
          />
        </Field>

        <Field id="trial-program" label="Preferred program" error={errors.program}>
          <select
            id="trial-program"
            name="program"
            value={program}
            onChange={(e) => updateProgram(e.target.value as ProgramId | '')}
            aria-invalid={Boolean(errors.program)}
            aria-describedby={describedBy('trial-program', errors.program)}
            aria-required="true"
            className={cn(inputClass, 'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10', errors.program ? 'border-danger' : 'border-border-strong')}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23b7f34a' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select a program</option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>

        <Field id="trial-plan" label="Membership of interest" optional>
          <select
            id="trial-plan"
            name="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value as MembershipId | '')}
            className={cn(inputClass, 'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10 border-border-strong')}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23b7f34a' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Not sure yet</option>
            {memberships.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </Field>

        <fieldset className="sm:col-span-2">
          <legend className="mb-3 text-sm font-semibold">Preferred contact method</legend>
          <div className="flex flex-wrap gap-3">
            {(['email', 'phone'] as const).map((method) => (
              <label
                key={method}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 text-sm capitalize transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring',
                  fields.contactMethod === method ? 'border-accent text-foreground' : 'border-border-strong text-muted-foreground',
                )}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={fields.contactMethod === method}
                  onChange={() => update('contactMethod', method)}
                  className="size-4 accent-[#b7f34a] focus-visible:outline-none"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>

        {fields.contactMethod === 'phone' && (
          <div className="sm:col-span-2">
            <Field id="trial-phone" label="Phone number" error={errors.phone} hint="Not required for email contact. Any format with 7 to 15 digits.">
              <input
                id="trial-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={20}
                value={fields.phone}
                onChange={(e) => update('phone', e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={describedBy('trial-phone', errors.phone, true)}
                aria-required="true"
                className={cn(inputClass, errors.phone ? 'border-danger' : 'border-border-strong')}
              />
            </Field>
          </div>
        )}

        <div className="sm:col-span-2">
          <Field
            id="trial-message"
            label="Message"
            optional
            error={errors.message}
            hint={`${fields.message.length}/${MESSAGE_LIMIT} characters. Please don't include health or other sensitive details.`}
          >
            <textarea
              id="trial-message"
              name="message"
              rows={4}
              value={fields.message}
              onChange={(e) => update('message', e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={describedBy('trial-message', errors.message, true)}
              className={cn(inputClass, 'resize-y', errors.message ? 'border-danger' : 'border-border-strong')}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="trial-acknowledge" className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
            <input
              id="trial-acknowledge"
              name="acknowledge"
              type="checkbox"
              checked={fields.acknowledge}
              onChange={(e) => update('acknowledge', e.target.checked)}
              aria-invalid={Boolean(errors.acknowledge)}
              aria-describedby={errors.acknowledge ? 'trial-acknowledge-error' : undefined}
              aria-required="true"
              className="mt-1 size-4 shrink-0 accent-[#b7f34a]"
            />
            <span>
              I understand this is a portfolio demo. My details will not be sent or stored, and no session will be booked.
              <span className="ml-1 text-accent" aria-hidden="true">
                *
              </span>
            </span>
          </label>
          {errors.acknowledge && (
            <p id="trial-acknowledge-error" className="mt-2 text-sm text-danger">
              {errors.acknowledge}
            </p>
          )}
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          <span className="text-accent" aria-hidden="true">
            *
          </span>{' '}
          Required field
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting} aria-disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Checking request…
            </>
          ) : (
            'Send demo request'
          )}
        </Button>
      </div>
      <p aria-live="polite" className="sr-only">
        {isSubmitting ? 'Checking your demo request.' : ''}
      </p>
    </form>
  )
}

import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('font-display-tight text-2xl font-extrabold uppercase leading-none', className)}>
      Nova<span className="text-accent">Fit</span>
    </span>
  )
}

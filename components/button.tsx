import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export const buttonStyles = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-accent-foreground hover:bg-accent-hover',
        secondary:
          'border border-border-strong bg-transparent text-foreground hover:border-foreground hover:bg-white/5',
        ghost: 'text-foreground underline-offset-4 hover:text-accent hover:underline',
      },
      size: {
        sm: 'h-11 px-4 text-xs',
        md: 'h-12 px-6 text-xs',
        lg: 'h-14 px-8 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonStyleProps = VariantProps<typeof buttonStyles>

export function Button({
  className,
  variant,
  size,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps) {
  return <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props} />
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & ButtonStyleProps & { href: string }) {
  return <a className={cn(buttonStyles({ variant, size }), className)} {...props} />
}

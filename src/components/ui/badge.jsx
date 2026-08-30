import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-sm py-xs font-label-md transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-on-primary',
        secondary: 'border-transparent bg-secondary-container text-on-secondary-container',
        outline: 'border-outline text-on-surface',
        surface: 'border-transparent bg-surface-container text-on-surface',
        success: 'border-transparent bg-green-600 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

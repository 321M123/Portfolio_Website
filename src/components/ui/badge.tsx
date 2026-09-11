import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-sm border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
  {
    variants: {
      variant: {
        default: 'bg-ink text-field',
        secondary: 'bg-field text-muted',
        destructive: 'bg-ink text-field',
        outline: 'bg-field text-ink',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

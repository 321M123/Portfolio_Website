'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  icon: ReactNode;
  name: string;
  description: string;
}

export function TechBadge({ icon, name, description }: TechBadgeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px 0px' });

  const badgeVariants = {
    initial: {
      borderColor: 'var(--rule)',
    },
    visible: {
      borderColor: 'var(--accent)',
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn('flex items-center gap-3 rounded-sm bg-field border px-4 py-3', 'min-w-[180px]')}
      variants={badgeVariants}
      initial="initial"
      animate={isInView ? 'visible' : 'initial'}
      transition={{ duration: 0.5 }}
      whileHover={{
        borderColor: 'var(--accent)',
        backgroundColor: 'color-mix(in srgb, var(--accent) 4%, var(--field))',
      }}>
      <span className="text-2xl text-accent">{icon}</span>
      <div>
        <div className="font-semibold text-ink leading-tight">{name}</div>
        <div className="text-xs text-muted leading-tight">{description}</div>
      </div>
    </motion.div>
  );
}

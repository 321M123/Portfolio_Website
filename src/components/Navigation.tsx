'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#onesheet', label: 'OneSheet' },
  { href: '/#projects', label: 'Projects' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-field border-b border-rule">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-ink" onClick={() => setOpen(false)}>
            Mikaël Kortbaoui
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((prev) => !prev)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="md:hidden border-t border-rule py-3 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-accent transition-colors py-1">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

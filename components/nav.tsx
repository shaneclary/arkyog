'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/site';
import { ButtonLink } from './ui/button';

const NAV = [
  { href: '/teach', label: 'Teach' },
  { href: '/trainings', label: 'Trainings' },
  { href: '/retreats', label: 'Retreats' },
  { href: '/journal', label: 'Journal' },
  { href: '/library', label: 'Library' },
  { href: '/about', label: 'About' },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500',
        scrolled
          ? 'bg-[var(--color-bone)]/85 backdrop-blur-md border-b border-[var(--color-sand)]/60'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl tracking-tight"
          aria-label={`${SITE.name} home`}
        >
          {SITE.name}
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'px-4 py-2 rounded-full text-sm transition-colors',
                  active
                    ? 'text-[var(--color-ink)] bg-[var(--color-cream)]'
                    : 'text-[var(--color-stone)] hover:text-[var(--color-ink)] hover:bg-[var(--color-cream)]/60',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/book" size="sm" className="hidden md:inline-flex">
            Book
          </ButtonLink>
          <ButtonLink href="/book" size="sm" className="md:hidden" variant="primary">
            Book
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-sand)] bg-[var(--color-bone)]"
          >
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              aria-hidden
              className="transition-transform duration-300"
              style={{ transform: open ? 'rotate(90deg)' : 'none' }}
            >
              <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[var(--ease-breath)] border-b border-[var(--color-sand)]/60',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!open}
      >
        <ul className="container-page py-4 flex flex-col gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block px-3 py-3 rounded-md text-base',
                    active ? 'bg-[var(--color-cream)] text-[var(--color-ink)]' : 'text-[var(--color-stone)]',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

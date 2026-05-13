import Link from 'next/link';
import * as React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-[background,color,border-color,transform] duration-300 ease-[var(--ease-breath)] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[var(--color-terracotta)] focus-visible:outline-offset-3 active:scale-[0.98]';

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-terracotta-deep)]',
  secondary:
    'bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)]/20 hover:border-[var(--color-ink)] hover:bg-[var(--color-cream)]',
  ghost:
    'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-cream)]',
  link:
    'bg-transparent text-[var(--color-terracotta-deep)] underline underline-offset-4 px-0 py-0 rounded-none hover:text-[var(--color-ink)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[0.95rem]',
  lg: 'h-14 px-8 text-base tracking-wide',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  href,
  children,
  ...props
}: BaseProps &
  Omit<React.ComponentProps<typeof Link>, 'children'> & { href: string }) {
  const isExternal = href.startsWith('http');
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}

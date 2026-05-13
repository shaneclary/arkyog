import { cn } from '@/lib/utils';

type Tone = 'neutral' | 'terracotta' | 'sage' | 'ink';

const tones: Record<Tone, string> = {
  neutral:
    'bg-[var(--color-cream)] text-[var(--color-stone)] border-[var(--color-sand)]',
  terracotta:
    'bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta-deep)] border-[var(--color-terracotta)]/30',
  sage:
    'bg-[var(--color-sage)]/10 text-[var(--color-sage-deep)] border-[var(--color-sage)]/30',
  ink:
    'bg-[var(--color-ink)] text-[var(--color-bone)] border-transparent',
};

export function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

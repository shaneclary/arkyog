'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { subscribeAction, type NewsletterState } from '@/app/actions/newsletter';
import { cn } from '@/lib/utils';

const INITIAL: NewsletterState = { status: 'idle' };

export function NewsletterForm({
  dark = false,
  source = 'footer',
  cta = 'Subscribe',
  placeholder = 'you@studio.com',
}: {
  dark?: boolean;
  source?: string;
  cta?: string;
  placeholder?: string;
}) {
  const [state, action] = useActionState(subscribeAction, INITIAL);
  const success = state.status === 'success';

  return (
    <form
      action={action}
      noValidate
      className={cn(
        'flex flex-col gap-2',
        success && 'opacity-90'
      )}
    >
      <input type="hidden" name="source" value={source} />
      <div
        className={cn(
          'flex h-12 rounded-full overflow-hidden border transition-colors',
          dark
            ? 'border-[var(--color-bone)]/25 focus-within:border-[var(--color-clay)] bg-transparent'
            : 'border-[var(--color-ink)]/20 focus-within:border-[var(--color-ink)] bg-[var(--color-bone)]'
        )}
      >
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={success}
          placeholder={placeholder}
          className={cn(
            'flex-1 bg-transparent px-5 text-sm outline-none placeholder:opacity-50',
            dark ? 'text-[var(--color-bone)]' : 'text-[var(--color-ink)]'
          )}
        />
        <SubmitButton dark={dark} success={success}>
          {success ? '✓ On the list' : cta}
        </SubmitButton>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={cn(
          'text-xs min-h-4 transition-opacity',
          state.status === 'error'
            ? 'text-[var(--color-terracotta)]'
            : dark
            ? 'text-[var(--color-bone)]/55'
            : 'text-[var(--color-stone)]'
        )}
      >
        {state.message ?? (dark ? 'Sundays only. Unsubscribe anytime.' : ' ')}
      </p>
    </form>
  );
}

function SubmitButton({
  children,
  dark,
  success,
}: {
  children: React.ReactNode;
  dark: boolean;
  success: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || success}
      className={cn(
        'px-5 m-1 rounded-full text-sm font-medium transition-colors',
        dark
          ? 'bg-[var(--color-bone)] text-[var(--color-ink)] hover:bg-[var(--color-clay)]'
          : 'bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-terracotta-deep)]',
        (pending || success) && 'opacity-80 cursor-not-allowed'
      )}
    >
      {pending ? '…' : children}
    </button>
  );
}

import { SITE } from '@/lib/site';

/**
 * Renders nothing when `SITE.press` is empty. Add outlets to the array
 * only after you have a live URL for each — listing publication names
 * without source URLs is the single biggest credibility risk.
 */
export function PressStrip() {
  if (SITE.press.length === 0) return null;

  return (
    <section className="border-y border-[var(--color-sand)]/70 bg-[var(--color-cream)]/60">
      <div className="container-page py-10 md:py-14">
        <p className="eyebrow text-center">As featured in</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
          {SITE.press.map((outlet) => (
            <li
              key={outlet}
              className="font-serif italic text-lg md:text-2xl text-[var(--color-stone)]/85 tracking-tight"
            >
              {outlet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

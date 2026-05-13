import { SITE } from '@/lib/site';

export function PressStrip() {
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

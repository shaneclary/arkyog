import { SITE } from '@/lib/site';

/**
 * "Who is it for?" — Arkady's own verbatim list.
 * Sits between hero and the rest of the home page; signals breadth
 * without diluting depth.
 */
export function WhoItsFor() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div>
          <p className="eyebrow">{SITE.audience.headline}</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
            Anyone who wants to improve themselves — physically and mentally —
            in a positive way.
          </h2>
        </div>

        <div>
          <p className="text-lg text-[var(--color-stone)] leading-relaxed max-w-prose">
            {SITE.audience.body}
          </p>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {SITE.audience.groups.map((g) => (
              <li
                key={g}
                className="rounded-full border border-[var(--color-sand)] bg-[var(--color-cream)] px-4 py-2.5 text-center font-serif text-base text-[var(--color-ink)]"
              >
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

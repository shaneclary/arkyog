import type { LineageTeacher } from '@/content/types';

export function LineageBlock({
  teachers,
}: {
  teachers: LineageTeacher[];
}) {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div>
          <p className="eyebrow">Lineage</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
            Practice as transmission, not invention.
          </h2>
          <p className="mt-6 text-[var(--color-stone)] leading-relaxed max-w-md">
            Every teacher worth studying with names theirs. These are the
            humans whose hours of instruction sit in my hands and voice when
            I teach you.
          </p>
        </div>

        <ol className="relative">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-clay)]"
          />
          {teachers.map((t) => (
            <li key={t.name} className="relative pl-10 pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[var(--color-terracotta)] ring-4 ring-[var(--color-bone)]"
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-serif text-xl md:text-2xl">{t.name}</h3>
                <span className="text-xs tracking-widest uppercase text-[var(--color-stone)]">
                  {t.years} · {t.lineage}
                </span>
              </div>
              <p className="mt-3 text-[var(--color-stone)] leading-relaxed max-w-prose">
                {t.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

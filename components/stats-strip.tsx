import { SITE } from '@/lib/site';

export function StatsStrip() {
  const stats = [
    { value: `${SITE.studentsTaught.toLocaleString()}+`, label: 'Students taught worldwide' },
    { value: `${SITE.teachersTrained}+`, label: 'Teachers trained' },
    { value: `${SITE.yearsTeaching}`, label: 'Years in practice' },
    { value: '60+', label: 'Countries reached' },
  ];

  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-bone)]">
      <div className="container-page py-20 md:py-28">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center md:text-left">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs uppercase tracking-[0.18em] text-[var(--color-clay)]">
                {s.label}
              </dt>
              <dd className="mt-3 font-serif text-5xl md:text-6xl leading-none">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

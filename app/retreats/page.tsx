import type { Metadata } from 'next';
import Script from 'next/script';
import { RetreatCard } from '@/components/retreat-card';
import { CtaBand } from '@/components/cta-band';
import { RETREATS } from '@/content/retreats';
import { eventSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Retreats',
  description:
    "Hawaii, Mysore, and Baltic banya retreats with Arkady Shirin. Small groups, the full Body Mastery method, the kind of week that recalibrates a year.",
};

export const revalidate = 3600;

export default function RetreatsPage() {
  return (
    <>
      {RETREATS.map((r) => (
        <Script
          key={r.slug}
          id={`ld-event-${r.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema(r)) }}
        />
      ))}

      <header className="container-page pt-24 md:pt-32 pb-16 md:pb-20">
        <p className="eyebrow">Three a year, never more</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0] max-w-4xl">
          The kind of week that recalibrates a year.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          Retreats are not vacations and not bootcamps. They're the rare
          condition under which a real practice can land. Small groups, real
          places, honest schedules.
        </p>
      </header>

      <section className="container-page pb-24 grid gap-8">
        {RETREATS.map((r, i) => (
          <RetreatCard key={r.slug} item={r} feature={i === 0} />
        ))}
      </section>

      <CtaBand
        eyebrow="Stay close"
        heading="First to know when a retreat opens."
        body="Most retreats sell out from the newsletter before reaching the public page. Sundays only. No spam, ever."
        primary={{ href: '/library', label: 'Join the list' }}
        secondary={{ href: '/book?topic=retreat', label: 'Ask about a custom retreat' }}
      />
    </>
  );
}

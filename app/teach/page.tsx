import type { Metadata } from 'next';
import { ClassCard } from '@/components/class-card';
import { CtaBand } from '@/components/cta-band';
import { CLASSES } from '@/content/classes';

export const metadata: Metadata = {
  title: 'Teach · Classes',
  description:
    'Online and live yoga classes spanning Ashtanga, slow Vinyasa, Yin, pranayama and meditation — for serious practitioners and curious beginners alike.',
};

export const revalidate = 3600;

export default function TeachPage() {
  const free = CLASSES.filter((c) => c.isFree);
  const paid = CLASSES.filter((c) => !c.isFree);

  return (
    <>
      <header className="container-page pt-24 md:pt-32 pb-12">
        <p className="eyebrow">The library · 20+ hours</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0] max-w-3xl">
          The classes I actually practice.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          Foundation work, the Master's practices, the kriyas, the
          conditioning. The full Body Mastery system, recorded over the last
          ten years. Begin with the free classes — then join the live Sunday
          three-hour class as a member.
        </p>
      </header>

      <section className="container-page pb-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">Start here — free</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {free.map((c) => (
            <ClassCard key={c.slug} item={c} />
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <h2 className="font-serif text-2xl md:text-3xl">Members library</h2>
          <p className="text-sm text-[var(--color-stone)]">
            {paid.length} classes · new release every Friday
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paid.map((c) => (
            <ClassCard key={c.slug} item={c} />
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Membership"
        heading="$29 / month. Live Sunday class included."
        body="Full library access, the live three-hour Sunday class with Arkady, members-only Q&A on the new moon, and no contracts. First seven days free."
        primary={{ href: '/book?plan=monthly', label: 'Start 7-day trial' }}
        secondary={{ href: '/about', label: 'Who is Arkady?' }}
      />
    </>
  );
}

import { Hero } from '@/components/hero';
import { PressStrip } from '@/components/press-strip';
import { ClassCard } from '@/components/class-card';
import { RetreatCard } from '@/components/retreat-card';
import { Testimonials } from '@/components/testimonials';
import { LeadMagnet } from '@/components/lead-magnet';
import { StatsStrip } from '@/components/stats-strip';
import { CtaBand } from '@/components/cta-band';
import { ButtonLink } from '@/components/ui/button';
import { CLASSES } from '@/content/classes';
import { RETREATS } from '@/content/retreats';
import { TESTIMONIALS } from '@/content/testimonials';
import { TRAININGS } from '@/content/trainings';
import { SITE } from '@/lib/site';
import { formatPrice } from '@/lib/utils';

export const revalidate = 3600;

export default function HomePage() {
  const featuredClasses = CLASSES.slice(0, 3);
  const nextRetreat = RETREATS[0];
  const anchorTraining = TRAININGS[0]; // Foundation Series

  return (
    <>
      <Hero />
      <PressStrip />

      {/* Featured classes */}
      <section className="container-page py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow">Begin here</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
              The classes new students start with.
            </h2>
          </div>
          <ButtonLink href="/teach" variant="secondary">
            All classes →
          </ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredClasses.map((c) => (
            <ClassCard key={c.slug} item={c} />
          ))}
        </div>
      </section>

      {/* The anchor offer: Foundation Series / Certified Yoga Student */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-sand)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow">The pre-requisite</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
                Become a Certified Yoga Student.
              </h2>
              <p className="mt-6 text-lg text-[var(--color-stone)] leading-relaxed">
                Everyone certifies yoga teachers. No one certifies yoga
                students. The Foundation Series is one year of real
                preliminary work — daily warm-up, yamas and niyamas, the
                bandhas. Complete this before anything else.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={`/trainings/${anchorTraining.slug}`}>
                  Begin the year →
                </ButtonLink>
                <ButtonLink href="/trainings" variant="secondary">
                  All programs
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] bg-[var(--color-bone)] border border-[var(--color-sand)] p-8 md:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                  {anchorTraining.title}
                </h3>
                <span className="text-xs uppercase tracking-widest text-[var(--color-stone)] shrink-0">
                  {anchorTraining.spotsLeft} spots
                </span>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <Detail label="Begins" value="Announced soon" />
                <Detail label="Format" value="Online · self-paced" />
                <Detail label="Duration" value="12 months" />
                <Detail label="Investment" value={formatPrice(anchorTraining.price)} />
              </dl>
              <ul className="mt-8 space-y-3">
                {anchorTraining.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip />

      {/* The 22 qualities — Body Mastery */}
      <section className="container-page py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">Body Mastery · 22 qualities</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
            What we are training for.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-stone)] leading-relaxed">
            Not flexibility alone. Not strength alone. Twenty-two qualities,
            each of which the practice develops simultaneously when it is
            taught correctly.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {SITE.qualities.map((q, i) => (
            <li
              key={q}
              className="flex items-baseline gap-3 py-2.5 border-b border-[var(--color-sand)]/70"
            >
              <span className="font-serif text-sm text-[var(--color-clay)] w-6">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-lg">{q}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured retreat */}
      <section className="container-page py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow">Travel & practice</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
              Next retreat.
            </h2>
          </div>
          <ButtonLink href="/retreats" variant="secondary">
            All retreats →
          </ButtonLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <RetreatCard item={nextRetreat} feature />
          <div className="grid gap-6">
            {RETREATS.slice(1, 3).map((r) => (
              <RetreatCard key={r.slug} item={r} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials items={TESTIMONIALS.slice(0, 3)} />
      <LeadMagnet />

      <CtaBand
        heading="Have a question worth asking?"
        body="One-on-one sessions, mentorship for serious students, or a conversation about whether the work is for you. Limited slots each month — I read every inquiry myself."
        primary={{ href: '/book', label: 'Book a session' }}
        secondary={{ href: '/about', label: 'Who is Arkady?' }}
      />
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-[var(--color-stone)]">{label}</dt>
      <dd className="mt-1 font-serif text-lg">{value}</dd>
    </div>
  );
}

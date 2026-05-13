import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TRAININGS } from '@/content/trainings';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { formatPrice, formatDateRange } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TRAININGS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = TRAININGS.find((x) => x.slug === slug);
  if (!t) return {};
  return {
    title: t.title,
    description: t.summary,
    openGraph: { title: t.title, description: t.summary },
  };
}

export default async function TrainingDetail({ params }: PageProps) {
  const { slug } = await params;
  const t = TRAININGS.find((x) => x.slug === slug);
  if (!t) notFound();

  return (
    <>
      <Script
        id="ld-course"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema(t)) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Trainings', href: '/trainings' },
              { name: t.title, href: `/trainings/${t.slug}` },
            ]),
          ),
        }}
      />

      <article>
        <header className="container-page pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="flex items-center gap-2 mb-6">
            <Badge tone="ink">{t.hours}-hour</Badge>
            <Badge tone="terracotta">{t.format}</Badge>
            <Badge tone="sage">{t.spotsLeft} spots left</Badge>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.0] max-w-4xl">
            {t.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
            {t.summary}
          </p>
        </header>

        <section className="bg-[var(--color-cream)] border-y border-[var(--color-sand)]">
          <div className="container-page py-12 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Detail label="Begins" value={t.datesTba ? 'Announced soon' : formatDateRange(t.startDate, t.endDate).split('–')[0].trim()} />
            <Detail label="Duration" value={t.duration} />
            <Detail label="Location" value={t.location} />
            <Detail label="Investment" value={t.priceTba ? 'Inquire' : formatPrice(t.price)} />
          </div>
        </section>

        <section className="container-page py-20 md:py-28 grid lg:grid-cols-[1.4fr_1fr] gap-16">
          <div>
            <p className="eyebrow">What you'll receive</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">The work, in detail.</h2>
            <ul className="mt-8 space-y-4 max-w-prose">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
                  <span className="text-[var(--color-ink)] leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-16 font-serif text-3xl md:text-4xl">Curriculum sample</h2>
            <p className="mt-3 text-[var(--color-stone)] max-w-prose">
              A short look at the first weeks. Full module list shared during application.
            </p>
            <ol className="mt-8 space-y-6">
              {t.curriculum.map((c) => (
                <li
                  key={c.week}
                  className="rounded-2xl border border-[var(--color-sand)] bg-[var(--color-cream)] p-6"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-3xl text-[var(--color-clay)]">
                      {String(c.week).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-xl">{c.theme}</h3>
                  </div>
                  <ul className="mt-4 ml-12 list-disc text-sm text-[var(--color-stone)] space-y-1">
                    {c.topics.map((tp) => (
                      <li key={tp}>{tp}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <h2 className="mt-16 font-serif text-3xl md:text-4xl">Faculty</h2>
            <ul className="mt-6 space-y-2">
              {t.faculty.map((f) => (
                <li key={f} className="text-[var(--color-stone)]">
                  · {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-ink)] text-[var(--color-bone)] p-8 md:p-10">
              <p className="text-xs uppercase tracking-widest text-[var(--color-clay)]">
                Application opens
              </p>
              <p className="mt-2 font-serif text-3xl">12 weeks before start</p>
              <p className="mt-6 text-sm text-[var(--color-bone)]/70 leading-relaxed">
                A short written application followed by a 30-minute call. No fee
                to apply. I respond personally within one week.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-bone)]/15">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-clay)]">
                    Cohort size
                  </p>
                  <p className="mt-1 font-serif text-2xl">{t.capacity}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-clay)]">
                    Remaining
                  </p>
                  <p className="mt-1 font-serif text-2xl">{t.spotsLeft}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink
                  href={`/book?topic=ytt&track=${t.slug}`}
                  size="lg"
                  className="bg-[var(--color-bone)] !text-[var(--color-ink)] hover:bg-[var(--color-clay)]"
                >
                  Start application
                </ButtonLink>
                <ButtonLink
                  href="/book?topic=ytt-question"
                  variant="ghost"
                  size="lg"
                  className="!text-[var(--color-bone)] hover:!bg-white/10"
                >
                  Ask a question first
                </ButtonLink>
              </div>
            </div>
          </aside>
        </section>
      </article>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-[var(--color-stone)]">{label}</dt>
      <dd className="mt-2 font-serif text-xl md:text-2xl">{value}</dd>
    </div>
  );
}

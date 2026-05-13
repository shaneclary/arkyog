import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RETREATS } from '@/content/retreats';
import { eventSchema, breadcrumbSchema } from '@/lib/schema';
import { formatPrice, formatDateRange } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RETREATS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const r = RETREATS.find((x) => x.slug === slug);
  if (!r) return {};
  return {
    title: r.title,
    description: r.summary,
    openGraph: {
      title: r.title,
      description: r.summary,
      images: [{ url: r.image }],
    },
  };
}

export default async function RetreatDetail({ params }: PageProps) {
  const { slug } = await params;
  const r = RETREATS.find((x) => x.slug === slug);
  if (!r) notFound();

  return (
    <>
      <Script
        id="ld-event"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema(r)) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Retreats', href: '/retreats' },
              { name: r.title, href: `/retreats/${r.slug}` },
            ]),
          ),
        }}
      />

      <article>
        <section className="relative isolate overflow-hidden h-[60vh] min-h-[28rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={r.image}
            alt={r.title}
            className="absolute inset-0 h-full w-full object-cover -z-10"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
            }}
          />
          <div className="container-page h-full flex items-end pb-12 md:pb-16 text-[var(--color-bone)]">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <Badge tone="ink">
                  {r.datesTba ? 'Dates announced soon' : formatDateRange(r.startDate, r.endDate)}
                </Badge>
                <Badge tone="terracotta">{r.format}</Badge>
                {!r.datesTba && r.spotsLeft <= 4 && (
                  <Badge tone="sage">{r.spotsLeft} spots remaining</Badge>
                )}
              </div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05]">{r.title}</h1>
              <p className="mt-4 text-base md:text-lg opacity-90">
                {r.venue} · {r.location}
              </p>
            </div>
          </div>
        </section>

        <section className="container-page py-20 md:py-28 grid lg:grid-cols-[1.4fr_1fr] gap-16">
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-[var(--color-ink)] max-w-prose">
              {r.summary}
            </p>

            <h2 className="mt-16 font-serif text-3xl md:text-4xl">A typical day</h2>
            <ul className="mt-6 space-y-2 max-w-md">
              {r.schedule.map((s) => (
                <li
                  key={s}
                  className="flex items-baseline gap-4 py-3 border-b border-[var(--color-sand)] last:border-0"
                >
                  <span className="font-serif text-base text-[var(--color-clay)] shrink-0 w-16">
                    {s.split('—')[0].trim()}
                  </span>
                  <span className="text-[var(--color-ink)]">{s.split('—')[1]?.trim()}</span>
                </li>
              ))}
            </ul>

            <div className="mt-16 grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-serif text-2xl">What's included</h3>
                <ul className="mt-6 space-y-2.5">
                  {r.included.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mt-1 shrink-0 text-[var(--color-sage-deep)]" aria-hidden>
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl">Not included</h3>
                <ul className="mt-6 space-y-2.5">
                  {r.notIncluded.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-[var(--color-stone)]">
                      <span aria-hidden className="mt-2 inline-block h-1 w-3 bg-[var(--color-stone)]/40 shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-sand)] bg-[var(--color-cream)] p-8 md:p-10">
              <p className="eyebrow">{r.priceTba ? 'Reserve your place' : 'Reserve your place'}</p>
              <div className="mt-5 flex items-baseline justify-between">
                <p className="font-serif text-4xl">
                  {r.priceTba ? 'Inquire' : formatPrice(r.price)}
                </p>
                <p className="text-sm text-[var(--color-stone)]">
                  {r.priceTba ? 'pricing announced soon' : 'all-inclusive'}
                </p>
              </div>
              <p className="mt-2 text-sm text-[var(--color-stone)]">
                {r.priceTba
                  ? 'Final pricing announced with retreat dates. Waitlist students get first booking access.'
                  : `Reserve with ${formatPrice(r.deposit)} deposit. Balance due 60 days before retreat.`}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-sand)]">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-stone)]">
                    Capacity
                  </p>
                  <p className="mt-1 font-serif text-xl">{r.capacity}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-stone)]">
                    {r.datesTba ? 'Status' : 'Remaining'}
                  </p>
                  <p className="mt-1 font-serif text-xl">
                    {r.datesTba ? 'Waitlist' : r.spotsLeft}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {r.datesTba ? (
                  <>
                    <ButtonLink href={`/book?topic=retreat-waitlist&retreat=${r.slug}`} size="lg">
                      Join the waitlist
                    </ButtonLink>
                    <ButtonLink href={`/book?topic=retreat-question&retreat=${r.slug}`} variant="secondary" size="lg">
                      Ask a question
                    </ButtonLink>
                  </>
                ) : (
                  <>
                    <ButtonLink href={`/book?retreat=${r.slug}`} size="lg">
                      Reserve with deposit
                    </ButtonLink>
                    <ButtonLink href={`/book?topic=retreat-question&retreat=${r.slug}`} variant="secondary" size="lg">
                      Ask a question
                    </ButtonLink>
                  </>
                )}
              </div>
            </div>
          </aside>
        </section>
      </article>
    </>
  );
}

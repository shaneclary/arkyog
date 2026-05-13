import type { Metadata } from 'next';
import { Card, CardBody } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book',
  description: `Book a private session, training application call, or general inquiry with ${SITE.teacher}.`,
};

const OFFERINGS = [
  {
    slug: 'practitioner-evaluation',
    title: 'Practitioner Evaluation',
    duration: '75 minutes',
    price: 30000,
    summary:
      "A full evaluation — body, breath, attitude, history, the three obstacles. Done over video. You leave with a custom practice prescription and a clear sense of where to begin.",
    cadence: 'Single session',
  },
  {
    slug: 'mentorship',
    title: 'Student Mentorship',
    duration: '60 minutes · monthly',
    price: 35000,
    summary:
      'For serious students in the Foundation Series or Body Mastery Program — a monthly call to refine the practice, troubleshoot, and keep you honest. Six-month minimum.',
    cadence: '6 sessions over 6 months',
  },
  {
    slug: 'program-call',
    title: 'Program Application Call',
    duration: '30 minutes',
    price: 0,
    summary:
      "A short conversation to determine which ARKademy program is the right fit — or whether you should start with the free guides first. Required before enrollment. No charge.",
    cadence: 'One-time',
  },
];

export default function BookPage() {
  return (
    <>
      <header className="container-page pt-24 md:pt-32 pb-12 md:pb-16">
        <p className="eyebrow">Book</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0] max-w-4xl">
          Work with me directly.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          A small number of private slots each month. Choose what fits, pick a
          time, pay if applicable. I confirm within 24 hours.
        </p>
      </header>

      <section className="container-page pb-16 grid gap-6 md:grid-cols-3">
        {OFFERINGS.map((o) => (
          <Card key={o.slug}>
            <CardBody>
              <div className="flex items-center justify-between mb-5">
                <Badge tone={o.price === 0 ? 'sage' : 'terracotta'}>
                  {o.price === 0 ? 'No charge' : formatPrice(o.price)}
                </Badge>
                <span className="text-xs uppercase tracking-widest text-[var(--color-stone)]">
                  {o.duration}
                </span>
              </div>
              <h3 className="font-serif text-2xl leading-tight">{o.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-stone)] leading-relaxed">
                {o.summary}
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest text-[var(--color-stone)]">
                {o.cadence}
              </p>
            </CardBody>
          </Card>
        ))}
      </section>

      <section className="container-page pb-24 md:pb-32">
        <div className="rounded-[var(--radius-xl)] bg-[var(--color-cream)] border border-[var(--color-sand)] overflow-hidden">
          <div className="px-8 md:px-12 py-10 md:py-14 grid md:grid-cols-[1fr_1.4fr] gap-10 items-center border-b border-[var(--color-sand)]">
            <div>
              <p className="eyebrow">Schedule</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                Choose a time
              </h2>
              <p className="mt-4 text-[var(--color-stone)] leading-relaxed">
                Bookings handled by Cal.com — your calendar, your inbox, your
                time zone. Payment (when applicable) processed through Stripe at
                confirmation.
              </p>
            </div>

            {/* Cal.com embed placeholder.
                Replace this block with <Cal calLink={...} /> from @calcom/atoms
                once env vars are set and the package is installed. */}
            <div
              className="aspect-[3/2] md:aspect-[16/10] rounded-[var(--radius-lg)] border border-dashed border-[var(--color-clay)] bg-[var(--color-bone)] flex items-center justify-center text-center px-6"
              role="region"
              aria-label="Calendar booking"
            >
              <div>
                <p className="font-serif text-2xl text-[var(--color-stone)]">
                  Cal.com Atoms mount point
                </p>
                <p className="mt-3 text-sm text-[var(--color-stone)] max-w-sm mx-auto">
                  Wire <code className="text-[var(--color-terracotta-deep)]">@calcom/atoms</code>{' '}
                  here. Set <code>NEXT_PUBLIC_CAL_LINK</code> + <code>CAL_API_KEY</code> in env.
                  Atoms render as native React components — they inherit your theme,
                  no iframe.
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 md:px-12 py-6 md:py-8 grid md:grid-cols-3 gap-6 text-sm text-[var(--color-stone)]">
            <p>
              <strong className="text-[var(--color-ink)]">No-show policy</strong> — Late
              cancellations and no-shows are charged 50%.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Sliding scale</strong> — Available
              for students who need it. Just ask.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Time zones</strong> — All sessions
              held on Hawaii time (HST). Cal.com auto-converts to yours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { JOURNAL } from '@/content/journal';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Notes on practice, teaching, and the long work of becoming a better teacher. Published monthly.',
};

export const revalidate = 3600;

export default function JournalPage() {
  const [hero, ...rest] = JOURNAL;

  return (
    <>
      <header className="container-page pt-24 md:pt-32 pb-16">
        <p className="eyebrow">Notes from the cushion</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0] max-w-4xl">
          Journal.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          Short essays on practice, teaching, and what I'm reading. Published
          monthly, longer-form than the newsletter, more honest than Instagram.
        </p>
      </header>

      {/* Hero post */}
      <section className="container-page pb-16">
        <Link
          href={`/journal/${hero.slug}`}
          className="group block rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-cream)] border border-[var(--color-sand)]"
        >
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[24rem] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  {hero.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">
                  {hero.title}
                </h2>
                <p className="mt-5 text-[var(--color-stone)] leading-relaxed">
                  {hero.summary}
                </p>
              </div>
              <p className="mt-8 text-xs uppercase tracking-widest text-[var(--color-stone)]">
                {formatDate(hero.date)} · {hero.readingTime} min read
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* Index */}
      <section className="container-page pb-24">
        <ul className="border-t border-[var(--color-sand)]">
          {rest.map((p) => (
            <li key={p.slug} className="border-b border-[var(--color-sand)]">
              <Link
                href={`/journal/${p.slug}`}
                className="group grid md:grid-cols-[1fr_2fr_auto] gap-6 py-8 md:py-10 items-baseline transition-colors hover:bg-[var(--color-cream)]/50 -mx-4 md:-mx-6 px-4 md:px-6 rounded-md"
              >
                <p className="text-sm uppercase tracking-widest text-[var(--color-stone)]">
                  {formatDate(p.date)}
                </p>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight group-hover:text-[var(--color-terracotta-deep)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-stone)] leading-relaxed max-w-prose">
                    {p.summary}
                  </p>
                </div>
                <p className="text-sm text-[var(--color-stone)] whitespace-nowrap">
                  {p.readingTime} min →
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JOURNAL } from '@/content/journal';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/newsletter-form';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = JOURNAL.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: {
      title: p.title,
      description: p.summary,
      type: 'article',
      publishedTime: p.date,
      images: [{ url: p.image }],
    },
  };
}

export default async function JournalPost({ params }: PageProps) {
  const { slug } = await params;
  const p = JOURNAL.find((x) => x.slug === slug);
  if (!p) notFound();

  const more = JOURNAL.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(p)) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Journal', href: '/journal' },
              { name: p.title, href: `/journal/${p.slug}` },
            ]),
          ),
        }}
      />

      <article>
        <header className="container-page pt-24 md:pt-32 pb-12">
          <Link
            href="/journal"
            className="text-sm text-[var(--color-stone)] hover:text-[var(--color-ink)] underline underline-offset-4"
          >
            ← All journal entries
          </Link>
          <div className="mt-8 flex items-center gap-2">
            {p.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            {p.title}
          </h1>
          <p className="mt-6 text-sm uppercase tracking-widest text-[var(--color-stone)]">
            {formatDate(p.date)} · {p.readingTime} min read
          </p>
        </header>

        <div className="container-page">
          <div className="relative aspect-[16/9] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-clay)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <section className="container-page py-16 md:py-24">
          <div className="prose-yoga mx-auto">
            {p.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className="container-page pb-24">
          <div className="rounded-[var(--radius-xl)] bg-[var(--color-cream)] border border-[var(--color-sand)] p-8 md:p-12 max-w-2xl mx-auto">
            <p className="eyebrow">Continue reading</p>
            <h2 className="mt-4 font-serif text-2xl md:text-3xl">
              Sundays only. The good stuff lands in the newsletter first.
            </h2>
            <div className="mt-6">
              <NewsletterForm source={`journal-${p.slug}`} cta="Subscribe" />
            </div>
          </div>
        </section>

        <section className="container-page pb-24">
          <p className="eyebrow mb-6">More journal</p>
          <ul className="grid md:grid-cols-2 gap-6">
            {more.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/journal/${m.slug}`}
                  className="group block rounded-[var(--radius-lg)] border border-[var(--color-sand)] p-6 transition-colors hover:bg-[var(--color-cream)]"
                >
                  <p className="text-xs uppercase tracking-widest text-[var(--color-stone)]">
                    {formatDate(m.date)}
                  </p>
                  <h3 className="mt-3 font-serif text-xl group-hover:text-[var(--color-terracotta-deep)] transition-colors">
                    {m.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}

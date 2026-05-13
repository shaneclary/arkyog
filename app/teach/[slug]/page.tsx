import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CLASSES } from '@/content/classes';
import { ClassCard } from '@/components/class-card';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CLASSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = CLASSES.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
  };
}

export default async function ClassDetail({ params }: PageProps) {
  const { slug } = await params;
  const c = CLASSES.find((x) => x.slug === slug);
  if (!c) notFound();

  const more = CLASSES.filter((x) => x.slug !== c.slug && x.style === c.style).slice(0, 3);

  return (
    <article>
      <header className="container-page pt-24 md:pt-32 pb-12">
        <Link
          href="/teach"
          className="text-sm text-[var(--color-stone)] hover:text-[var(--color-ink)] underline underline-offset-4"
        >
          ← All classes
        </Link>
        <div className="mt-8 flex items-center gap-2">
          <Badge tone="terracotta">{c.style}</Badge>
          <Badge>{c.level}</Badge>
          <Badge tone="ink">{c.duration} min</Badge>
          {c.isFree && <Badge tone="sage">Free</Badge>}
        </div>
        <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl">
          {c.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          {c.description}
        </p>
      </header>

      <section className="container-page pb-12">
        {/* Mux player mount point. Wire @mux/mux-player-react when ready. */}
        <div className="aspect-video rounded-[var(--radius-xl)] bg-[var(--color-ink)] flex items-center justify-center text-center px-6">
          <div className="text-[var(--color-bone)]/80">
            <p className="font-serif text-2xl">Mux player mount</p>
            <p className="mt-2 text-sm max-w-sm mx-auto opacity-70">
              Replace with <code>{'<MuxPlayer playbackId={...} />'}</code>.
              Use signed URLs from a server action for members-only classes.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-[var(--radius-xl)] bg-[var(--color-cream)] border border-[var(--color-sand)] p-8 md:p-12 max-w-2xl mx-auto text-center">
          {c.isFree ? (
            <>
              <p className="eyebrow">Free preview</p>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl">
                The full library is $24 / month.
              </h2>
              <p className="mt-4 text-[var(--color-stone)]">
                {CLASSES.filter((x) => !x.isFree).length}+ classes · new release every Friday · cancel anytime.
              </p>
              <ButtonLink href="/book?plan=monthly" size="lg" className="mt-6">
                Start 7-day free trial
              </ButtonLink>
            </>
          ) : (
            <>
              <p className="eyebrow">Members library</p>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl">Members only.</h2>
              <p className="mt-4 text-[var(--color-stone)]">
                Try the practice free for seven days. $24 / month after, cancel any time.
              </p>
              <ButtonLink href="/book?plan=monthly" size="lg" className="mt-6">
                Start free trial
              </ButtonLink>
            </>
          )}
        </div>
      </section>

      {more.length > 0 && (
        <section className="container-page pb-24">
          <p className="eyebrow mb-6">More {c.style.toLowerCase()}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {more.map((m) => (
              <ClassCard key={m.slug} item={m} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

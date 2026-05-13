import type { Metadata } from 'next';
import { GuideCard } from '@/components/guide-card';
import { NewsletterForm } from '@/components/newsletter-form';
import { GUIDES } from '@/content/guides';

export const metadata: Metadata = {
  title: 'Free Library',
  description:
    'Free downloadable practice guides, audio practices, and sequences for serious students. Delivered to your inbox.',
};

export default function LibraryPage() {
  return (
    <>
      <header className="container-page pt-24 md:pt-32 pb-12">
        <p className="eyebrow">Free · for new students</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0] max-w-4xl">
          Begin without paying.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          The four guides I send every new student. The preliminary warm-up.
          The yamas and niyamas. The three obstacles. And the case for
          becoming a Certified Yoga Student. All free, all delivered to your
          inbox.
        </p>
      </header>

      <section className="container-page pb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {GUIDES.map((g) => (
          <GuideCard key={g.slug} item={g} />
        ))}
      </section>

      <section className="container-page pb-24 md:pb-32">
        <div className="rounded-[var(--radius-xl)] bg-[var(--color-ink)] text-[var(--color-bone)] p-10 md:p-16">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <div>
              <p className="eyebrow text-[var(--color-clay)]">All four, plus the letter</p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-[1.05]">
                One email gets you all four guides — and a quiet Sunday note.
              </h2>
              <p className="mt-6 text-[var(--color-bone)]/70 leading-relaxed max-w-lg">
                Subscribe once. Receive the entire library, plus a short
                weekly letter on practice. Unsubscribe whenever you like — I
                hold no grudge.
              </p>
            </div>
            <div>
              <NewsletterForm dark source="library" cta="Send the library" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

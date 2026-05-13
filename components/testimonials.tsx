import type { Testimonial } from '@/content/types';
import { Card, CardBody } from './ui/card';

export function Testimonials({
  items,
  heading = 'What students say',
  eyebrow = 'Voices',
}: {
  items: Testimonial[];
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">{heading}</h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <Card key={t.name} className="bg-[var(--color-bone)]">
            <CardBody>
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-[var(--color-terracotta)]" aria-hidden>
                <path
                  d="M0 21.6V12c0-3.4 1-6.3 2.9-8.6C4.9 1 7.5 0 10.6 0v5.6c-1.7 0-3 .6-4 1.7-.9 1.1-1.4 2.6-1.4 4.4h5.4v10H0Zm15 0V12c0-3.4 1-6.3 2.9-8.6C20 1 22.6 0 25.7 0v5.6c-1.7 0-3 .6-4 1.7-.9 1.1-1.4 2.6-1.4 4.4H26v10H15Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-4 font-serif italic text-xl leading-snug text-[var(--color-ink)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-[var(--color-sand)]/70">
                <p className="font-medium text-sm">{t.name}</p>
                <p className="mt-0.5 text-xs text-[var(--color-stone)]">{t.role}</p>
              </figcaption>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

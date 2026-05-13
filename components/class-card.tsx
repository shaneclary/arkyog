import Link from 'next/link';
import type { ClassItem } from '@/content/types';
import { Badge } from './ui/badge';
import { Card, CardBody } from './ui/card';

export function ClassCard({ item }: { item: ClassItem }) {
  return (
    <Card>
      <Link
        href={`/teach/${item.slug}`}
        className="block focus-visible:outline-none"
        aria-label={`${item.title} — ${item.duration} minutes`}
      >
        <div className="aspect-[16/10] bg-[var(--color-clay)] relative overflow-hidden">
          {/* Soft generative thumbnail */}
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
            style={{
              background:
                `radial-gradient(60% 80% at 30% 20%, oklch(0.85 0.07 ${50 + item.title.length * 4}) 0%, transparent 60%),` +
                `radial-gradient(60% 80% at 80% 80%, oklch(0.68 0.1 ${120 + item.title.length * 2}) 0%, transparent 65%),` +
                `linear-gradient(135deg, var(--color-clay), var(--color-terracotta))`,
            }}
          />
          {item.isFree && (
            <Badge tone="ink" className="absolute top-4 left-4">
              Free
            </Badge>
          )}
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)]/85 px-3 py-1.5 text-[var(--color-bone)] text-xs">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
              <path d="M2 0v10l8-5z" />
            </svg>
            {item.duration} min
          </span>
        </div>
        <CardBody>
          <div className="flex items-center gap-2 mb-3">
            <Badge tone="terracotta">{item.style}</Badge>
            <Badge>{item.level}</Badge>
          </div>
          <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
          <p className="mt-3 text-sm text-[var(--color-stone)] leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </CardBody>
      </Link>
    </Card>
  );
}

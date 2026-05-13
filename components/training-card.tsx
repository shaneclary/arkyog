import Link from 'next/link';
import type { Course } from '@/content/types';
import { Card, CardBody } from './ui/card';
import { Badge } from './ui/badge';
import { formatPrice } from '@/lib/utils';

export function TrainingCard({ item }: { item: Course }) {
  return (
    <Card>
      <Link
        href={`/trainings/${item.slug}`}
        className="block focus-visible:outline-none"
        aria-label={item.title}
      >
        <CardBody className="md:p-10">
          <div className="flex items-center gap-2">
            <Badge tone="ink">{item.hours}-hour</Badge>
            <Badge tone="terracotta">{item.format}</Badge>
            {item.spotsLeft <= 5 && (
              <Badge tone="sage">
                {item.spotsLeft} spots remaining
              </Badge>
            )}
          </div>

          <h3 className="mt-5 font-serif text-3xl md:text-4xl leading-tight">
            {item.title}
          </h3>
          <p className="mt-4 text-[var(--color-stone)] leading-relaxed max-w-2xl">
            {item.summary}
          </p>

          <ul className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
            {item.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-[var(--color-sand)]/70 grid grid-cols-2 md:grid-cols-4 gap-6 items-end">
            <Meta label="Duration" value={item.duration} />
            <Meta label="Location" value={item.location} />
            <Meta label="Investment" value={formatPrice(item.price)} />
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-[gap]">
                Full curriculum →
              </span>
            </div>
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-[var(--color-stone)]">{label}</dt>
      <dd className="mt-1 font-serif text-lg">{value}</dd>
    </div>
  );
}

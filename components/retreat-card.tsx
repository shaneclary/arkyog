import Link from 'next/link';
import type { Retreat } from '@/content/types';
import { Card, CardBody } from './ui/card';
import { Badge } from './ui/badge';
import { formatDateRange, formatPrice } from '@/lib/utils';

export function RetreatCard({ item, feature = false }: { item: Retreat; feature?: boolean }) {
  return (
    <Card className={feature ? 'md:col-span-2' : ''}>
      <Link
        href={`/retreats/${item.slug}`}
        className="block focus-visible:outline-none"
        aria-label={`${item.title} retreat`}
      >
        <div className={feature ? 'grid md:grid-cols-2 gap-0' : ''}>
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[20rem] overflow-hidden bg-[var(--color-clay)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <Badge tone="ink" className="absolute top-5 left-5">
              {item.format === 'in-person' ? 'In person' : item.format}
            </Badge>
            {item.spotsLeft <= 4 && item.spotsLeft > 0 && (
              <Badge tone="terracotta" className="absolute top-5 right-5">
                {item.spotsLeft} spots left
              </Badge>
            )}
          </div>
          <CardBody className={feature ? 'flex flex-col justify-between' : ''}>
            <div>
              <p className="eyebrow">{formatDateRange(item.startDate, item.endDate)}</p>
              <h3 className={`mt-3 font-serif leading-tight ${feature ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-stone)]">
                {item.venue} · {item.location}
              </p>
              <p className="mt-5 text-sm md:text-base text-[var(--color-stone)] leading-relaxed line-clamp-3">
                {item.summary}
              </p>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--color-stone)]">From</p>
                <p className="mt-1 font-serif text-2xl">{formatPrice(item.price)}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-ink)] group-hover:gap-2 transition-[gap]">
                View retreat →
              </span>
            </div>
          </CardBody>
        </div>
      </Link>
    </Card>
  );
}

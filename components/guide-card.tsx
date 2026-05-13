import type { Guide } from '@/content/types';
import { Card, CardBody } from './ui/card';
import { Badge } from './ui/badge';

export function GuideCard({ item }: { item: Guide }) {
  return (
    <Card>
      <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-[var(--color-sand)] to-[var(--color-clay)]">
        <div
          aria-hidden
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
          style={{
            background:
              `radial-gradient(70% 70% at 30% 30%, oklch(0.85 0.08 ${30 + item.title.length * 8}) 0%, transparent 65%),` +
              `linear-gradient(135deg, var(--color-clay), var(--color-terracotta-deep))`,
          }}
        />
        <div className="relative h-full p-8 flex flex-col justify-between text-[var(--color-bone)]">
          <p className="text-xs tracking-[0.3em] uppercase opacity-75">
            {item.gated ? 'Free with email' : 'Free download'}
          </p>
          <h3 className="font-serif text-3xl leading-[1.05]">{item.title}</h3>
        </div>
      </div>
      <CardBody>
        <div className="flex items-center gap-2">
          <Badge>{item.pages} pages</Badge>
          {item.gated && <Badge tone="terracotta">PDF</Badge>}
        </div>
        <p className="mt-4 text-sm text-[var(--color-stone)] leading-relaxed">
          {item.summary}
        </p>
        <a
          href={`#${item.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 hover:gap-2 transition-[gap]"
        >
          Download →
        </a>
      </CardBody>
    </Card>
  );
}

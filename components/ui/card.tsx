import { cn } from '@/lib/utils';

export function Card({
  children,
  className,
  as: Tag = 'article',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'article' | 'div' | 'section';
}) {
  return (
    <Tag
      className={cn(
        'group relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-cream)] border border-[var(--color-sand)]/60 transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-breath)] hover:border-[var(--color-clay)] hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('p-6 md:p-8', className)}>{children}</div>;
}

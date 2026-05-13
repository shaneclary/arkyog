import { ButtonLink } from './ui/button';

export function CtaBand({
  eyebrow = 'For the practitioner ready',
  heading,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="container-page py-24 md:py-32">
      <div
        className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-cream)] border border-[var(--color-sand)]"
        style={{
          backgroundImage:
            'radial-gradient(70% 100% at 100% 0%, oklch(0.62 0.13 40 / 0.18) 0%, transparent 60%),' +
            'radial-gradient(60% 90% at 0% 100%, oklch(0.62 0.06 145 / 0.18) 0%, transparent 60%)',
        }}
      >
        <div className="px-8 py-16 md:px-16 md:py-24 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02]">{heading}</h2>
          {body && (
            <p className="mt-6 text-lg text-[var(--color-stone)] leading-relaxed max-w-xl">
              {body}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} size="lg" variant="secondary">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

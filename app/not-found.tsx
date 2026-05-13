import Link from 'next/link';
import { ButtonLink } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="container-page py-32 md:py-48 text-center">
      <p className="eyebrow">A wrong turn</p>
      <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[1.0]">
        Off the mat.
      </h1>
      <p className="mt-8 max-w-md mx-auto text-lg text-[var(--color-stone)] leading-relaxed">
        The page you wanted isn't here. Step back to the start, or follow one
        of the paths below.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/teach" variant="secondary">Classes</ButtonLink>
        <ButtonLink href="/journal" variant="secondary">Journal</ButtonLink>
      </div>
    </section>
  );
}

import { ButtonLink } from './ui/button';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Ambient gradient that picks up the warm tropical tones in the portrait */}
      <div
        className="absolute inset-0 -z-10 opacity-95"
        aria-hidden
        style={{
          background:
            'radial-gradient(60% 60% at 78% 20%, oklch(0.82 0.04 60 / 0.55) 0%, transparent 60%),' +
            'radial-gradient(60% 60% at 8% 90%, oklch(0.62 0.06 145 / 0.18) 0%, transparent 60%),' +
            'linear-gradient(180deg, var(--color-bone) 0%, var(--color-cream) 100%)',
        }}
      />
      <div
        aria-hidden
        className="animate-drift absolute -right-24 top-32 -z-10 h-[28rem] w-[28rem] rounded-full opacity-40 blur-2xl"
        style={{ background: 'radial-gradient(circle, var(--color-terracotta) 0%, transparent 70%)' }}
      />

      <div className="container-page pt-16 pb-24 md:pt-28 md:pb-40 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="eyebrow">{SITE.tagline} · The ARKademy</p>
          <h1 className="mt-6 font-serif text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.98] tracking-tight">
            Train the body{' '}
            <em className="not-italic text-[var(--color-terracotta-deep)]">the right way</em>.
            <br />
            Without injury. With real knowledge.
          </h1>
          <p className="mt-7 max-w-xl text-lg md:text-xl text-[var(--color-stone)] leading-relaxed">
            At {SITE.age}, {SITE.teacher} moves with the body of a teenage athlete and
            the lineage of five decades. A complete system of mind and body wellness —
            for athletes, beginners, busy people, and serious students of the
            practice.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="/teach" size="lg">
              Begin the practice
            </ButtonLink>
            <ButtonLink href="/about" size="lg" variant="secondary">
              Who is Arkady?
            </ButtonLink>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <Stat label="Years teaching" value={`${SITE.yearsTeaching}+`} />
            <Stat label="Disciplines integrated" value="6" />
            <Stat label="Hours online practice" value="20+" />
          </dl>
          <p className="mt-4 text-xs text-[var(--color-stone)]">
            Based in Riga, Latvia. Teaching worldwide online and on retreat.
          </p>
        </div>

        {/* Portrait — Arkady on retreat, frangipani lei, holding the Yoga Sutras */}
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[var(--radius-2xl)] overflow-hidden bg-[var(--color-clay)] shadow-2xl shadow-black/15">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE.hero.portrait}
              alt={`${SITE.teacher} — yoga master and founder of the ARKademy`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)',
              }}
            />
            <figcaption className="absolute bottom-6 left-6 right-6 text-[var(--color-bone)]">
              <p className="font-serif text-lg md:text-xl italic leading-tight">
                "{SITE.hero.quote}"
              </p>
              <p className="mt-2 text-xs tracking-widest uppercase opacity-80">
                {SITE.hero.attribution}
              </p>
            </figcaption>
          </div>

          <div className="hidden md:block absolute -left-10 bottom-10 bg-[var(--color-bone)] border border-[var(--color-sand)] rounded-2xl p-4 shadow-xl shadow-black/5 max-w-[14rem]">
            <p className="eyebrow">Lineage</p>
            <p className="mt-2 text-sm leading-snug">
              Studied with <span className="font-medium">Pattabhi Jois</span>,
              at <span className="font-medium">RIMYI Pune</span>, and in
              Shaolin forms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs tracking-widest uppercase text-[var(--color-stone)]">{label}</dt>
      <dd className="mt-2 font-serif text-3xl">{value}</dd>
    </div>
  );
}

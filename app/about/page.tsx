import type { Metadata } from 'next';
import { LineageBlock } from '@/components/lineage-block';
import { Testimonials } from '@/components/testimonials';
import { CtaBand } from '@/components/cta-band';
import { PressStrip } from '@/components/press-strip';
import { LINEAGE } from '@/content/lineage';
import { TESTIMONIALS } from '@/content/testimonials';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `${SITE.teacher} — yoga master and founder of the ARKademy. Four decades of practice across Ashtanga, Iyengar, Shaolin, Tai Chi, ballet, and gymnastics.`,
};

export default function AboutPage() {
  return (
    <>
      <header className="container-page pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="eyebrow">Who is Arkady?</p>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0]">
              {SITE.teacher}
            </h1>
            <p className="mt-7 max-w-xl text-xl text-[var(--color-stone)] leading-relaxed">
              Sixty years old. Forty years teaching. A practice that started with
              ballet and gymnastics in childhood, passed through Mysore, Pune, and
              Shaolin in his twenties and thirties, and has been refined every
              day since.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--color-clay)] max-w-md w-full justify-self-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE.hero.portrait}
              alt={`Portrait of ${SITE.teacher}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <PressStrip />

      <section className="container-page py-24 md:py-32">
        <div className="prose-yoga mx-auto">
          <p>
            I was a gymnast first. Before the word yoga ever crossed my mind, my
            body was being trained by Soviet-era coaches — eight hours a day,
            six days a week, no excuses. By twelve I was on the national track.
            By sixteen I had blown out a knee and been told I would never
            compete again.
          </p>
          <p>
            That injury turned out to be the most important thing that
            happened to me. It sent me looking for something that did not break
            the body. I found ballet next — same discipline, slightly less
            destruction. Then martial arts. Then, in my early twenties, my
            first yoga class.
          </p>
          <p>
            What I noticed immediately was that yoga did everything the other
            disciplines did — and more. But only when it was taught
            traditionally. The watered-down version available in most studios
            was, and remains, a workout dressed in Sanskrit.
          </p>
          <p>
            I went to find the real thing. Three trips to Mysore in the 1990s
            with Pattabhi Jois. Years in Pune with Iyengar. Long stretches in
            India with Akilanka studying the kriyas and the pranayamas. And —
            because I refused to believe the Indians had the only word on
            internal arts — four years going back and forth to the Shaolin
            temple, where I studied the 18 Lohan Hands, the staff, the sword.
          </p>
          <p>
            What I teach today is the result. Not Ashtanga. Not Iyengar. Not
            Shaolin. A complete system of body mastery that integrates all of
            them, calibrated to the practitioner in front of me, with the
            attitude — borrowed from Krishnamacharya — that yoga is adapted to
            the individual, not the individual to yoga.
          </p>
          <p>
            I live mostly in Hawaii now. I teach a live three-hour class every
            Sunday and maintain a library of more than twenty hours of
            recorded practice. My oldest active student is 84. My youngest is
            6. Both of them practice the same Foundation Series — and that, in
            a sentence, is what this work is about.
          </p>
        </div>
      </section>

      {/* The 22 qualities of Body Mastery */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-sand)]">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow">Body Mastery · The 22 Qualities</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] max-w-3xl">
            What I am training for. What I am training you for.
          </h2>
          <ul className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
            {SITE.qualities.map((q, i) => (
              <li
                key={q}
                className="flex items-baseline gap-3 py-2 border-b border-[var(--color-sand)]/70"
              >
                <span className="font-serif text-sm text-[var(--color-clay)] w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-lg">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LineageBlock teachers={LINEAGE} />

      {/* Three obstacles */}
      <section className="container-page py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow">Three obstacles</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
            The three things keeping you from the body you want.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-stone)] leading-relaxed">
            Not flexibility. Not strength. Not age. The three obstacles I look
            for in every evaluation — and the only three you actually need to
            address.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {SITE.obstacles.map((o, i) => (
            <li
              key={o.name}
              className="rounded-[var(--radius-lg)] bg-[var(--color-cream)] border border-[var(--color-sand)] p-8"
            >
              <span className="font-serif text-5xl text-[var(--color-terracotta)]">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-serif text-2xl">{o.name}</h3>
              <p className="mt-4 text-[var(--color-stone)] leading-relaxed text-sm">
                {o.note}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="credentials" className="bg-[var(--color-cream)] border-y border-[var(--color-sand)]">
        <div className="container-page py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="eyebrow">Credentials & training</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
              Trained at the source. For four decades.
            </h2>
            <p className="mt-6 text-[var(--color-stone)] leading-relaxed max-w-md">
              The certifications matter less than the years. But for the
              record, here are both.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              { title: 'Authorized — KPJAYI, Mysore (Pattabhi Jois lineage)', year: '1996' },
              { title: 'Senior Iyengar Teacher · RIMYI Pune', year: '1998' },
              { title: 'Shaolin Instructor — 18 Lohan Hands, Staff, Sword', year: '2001' },
              { title: 'Tai Chi Chuan — Yang style, Cheng Man-Ching lineage', year: '2003' },
              { title: 'Forty years of continuous teaching', year: '1985 — present' },
            ].map((c) => (
              <li
                key={c.title}
                className="flex items-baseline justify-between gap-6 pb-5 border-b border-[var(--color-sand)] last:border-0"
              >
                <span className="font-serif text-lg">{c.title}</span>
                <span className="text-sm uppercase tracking-widest text-[var(--color-stone)] shrink-0">
                  {c.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials items={TESTIMONIALS} eyebrow="Voices" heading="What students say." />

      <CtaBand
        eyebrow="Begin"
        heading="Practice with me."
        body="Start with the Preliminary Warm-Up. Take a year. Then come find me for the rest."
        primary={{ href: '/library', label: 'Get the warm-up' }}
        secondary={{ href: '/teach', label: 'Browse the library' }}
      />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/button';
import { Card, CardBody } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: "The Master's Practice",
  description:
    "Arkady Shirin's signature demonstrations — Chaya Chankalanam, the Dance of Shiva, Tiger by candlelight, Tai Chi and Shaolin sequences, sword and staff forms. The visible end of the work.",
};

/**
 * The Master's Practice — Arkady's own demonstration of what mastery
 * looks like. Doubles as social proof for the lineage claims.
 */
const PRACTICES = [
  {
    name: 'Chaya Chankalanam',
    tradition: 'Classical',
    note: "A subtle, internal practice. The shadow exercise — its name suggests the play of light and form. Difficult to teach. Slower to learn. Worth a lifetime.",
  },
  {
    name: 'Moon Salute Sequence',
    tradition: 'Chandra Namaskar',
    note: "The cooling counterpart to the sun salutation. Practiced at dusk, on the new moon, and at any moment a hot mind needs the gentler half of the day.",
  },
  {
    name: 'Sun Salutations A & B',
    tradition: 'Surya Namaskar',
    note: "The vinyasa heart of every morning practice. Taught here with the breath ratios most teachers skip and the bandhas most teachers do not know.",
  },
  {
    name: 'Ashtavakrasana Family',
    tradition: 'Advanced Asana',
    note: "Eight-bend pose and its relatives — the arm balances that look impossible and are not. The prerequisites are honest; the entry is gradual.",
  },
  {
    name: 'Dance of Shiva',
    tradition: 'Coordination',
    note: "A four-position coordination drill from the classical tradition. Left arm, right arm, in four planes. Looks simple. Is not. The fastest training for the nervous system I know.",
  },
  {
    name: 'Tiger by Candlelight',
    tradition: 'Animal-form sequence',
    note: "Slow, four-limbed, predatory. Done by a single candle. Built from gymnastics, martial arts, and the old Indian animal-form traditions. Strengthens what other practices cannot reach.",
  },
  {
    name: 'Tai Chi Elements',
    tradition: 'Internal arts',
    note: "Short forms from the Yang lineage. Practiced for the joints, the breath, and the slowness modern bodies have forgotten how to enter.",
  },
  {
    name: 'Shaolin Sequence',
    tradition: 'External arts',
    note: "Excerpts from the 18 Lohan Hands and the foundational standing forms. Where yoga's stillness ends, Shaolin's stillness begins.",
  },
  {
    name: 'Sword & Staff Sequence',
    tradition: 'Shaolin weapons',
    note: "The traditional staff and straight-sword forms. Practiced not for combat — for the precision of attention they demand from the body and the mind at once.",
  },
];

export default function MasterPage() {
  return (
    <>
      <header className="container-page pt-24 md:pt-32 pb-12">
        <p className="eyebrow">Be like Nataraja · Mahadeva · Karanas</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0] max-w-4xl">
          The Master's Practice.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          Nine practices that, together, are what forty-five years of training
          looks like in one body. Some of them I demonstrate publicly. Others I
          teach only to students who have completed the Foundation Series. All
          of them are part of the long path of the ARKademy.
        </p>
      </header>

      <section className="container-page pb-12">
        <div className="rounded-[var(--radius-xl)] bg-[var(--color-ink)] text-[var(--color-bone)] p-10 md:p-16">
          <p className="eyebrow text-[var(--color-clay)]">A framing borrowed from Shaiva tradition</p>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-[1.05] max-w-3xl">
            What yoga needs to look like.
          </h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-3">
            <Pillar
              term="Nataraja"
              gloss="Fluidity"
              body="The dancing Shiva — the body in motion that does not lose its center."
            />
            <Pillar
              term="Mahadeva"
              gloss="Stillness"
              body="The unshakeable one — the body at rest that is not absent, but present."
            />
            <Pillar
              term="Karanas"
              gloss="Technique"
              body="Coordination of the parts — the limbs and breath moving as one intelligence."
            />
          </dl>
        </div>
      </section>

      <section className="container-page pb-24 md:pb-32">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((p) => (
            <Card key={p.name} as="div">
              <CardBody>
                <Badge tone="terracotta">{p.tradition}</Badge>
                <h3 className="mt-4 font-serif text-2xl leading-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-stone)] leading-relaxed">
                  {p.note}
                </p>
              </CardBody>
            </Card>
          ))}
        </ul>
      </section>

      <section className="container-page pb-24 md:pb-32">
        <div
          className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-cream)] border border-[var(--color-sand)] px-8 py-16 md:px-16 md:py-24"
          style={{
            backgroundImage:
              'radial-gradient(70% 100% at 100% 0%, oklch(0.62 0.13 40 / 0.18) 0%, transparent 60%),' +
              'radial-gradient(60% 90% at 0% 100%, oklch(0.62 0.06 145 / 0.18) 0%, transparent 60%)',
          }}
        >
          <div className="max-w-3xl">
            <p className="eyebrow">For the long path</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02]">
              The Master's Practice is the destination.
              <br />
              The Foundation Series is the start.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-stone)] leading-relaxed max-w-xl">
              Before any of these practices, one year of preliminary work.
              Most students who complete the year find it is all they need.
              Those who continue arrive — slowly — here.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/trainings/foundation-series" size="lg">
                The Foundation Series
              </ButtonLink>
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium underline underline-offset-4 self-center"
              >
                Who is Arkady? →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({
  term,
  gloss,
  body,
}: {
  term: string;
  gloss: string;
  body: string;
}) {
  return (
    <div>
      <dt>
        <p className="font-serif text-3xl md:text-4xl">{term}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-clay)]">
          {gloss}
        </p>
      </dt>
      <dd className="mt-4 text-[var(--color-bone)]/75 leading-relaxed">{body}</dd>
    </div>
  );
}

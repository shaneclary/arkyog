import { ButtonLink } from '@/components/ui/button';
import { NewsletterForm } from '@/components/newsletter-form';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Ultimate Yoga Teacher Template | ${SITE.name}`,
  description:
    'A high-conversion yoga teacher homepage template built for Vercel: hero, offers, trust, newsletter, testimonials, and a mission-led teaching funnel.',
};

export const revalidate = 3600;

const TRUSTED_IN = ['Yoga Journal', 'NPR', 'Well+Good', 'Yoga International'];

const PROGRAMS = [
  {
    title: 'Online Studio Membership',
    subtitle: 'Daily practices, live sessions, and replay library.',
    button: 'Join membership',
    href: '/teach',
  },
  {
    title: '200hr Teacher Training',
    subtitle: 'A small cohort certification with mentorship and live intensives.',
    button: 'View training',
    href: '/trainings',
  },
  {
    title: 'Retreats + Immersions',
    subtitle: 'Curated journeys for deeper practice and soulful community.',
    button: 'Explore retreats',
    href: '/retreats',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'This is the practice that finally helped me feel strong, calm, and connected again.',
    name: 'Maya L.',
    role: 'Studio Member',
  },
  {
    quote:
      'The training taught me how to guide with subtlety, power, and real compassion.',
    name: 'Priya S.',
    role: 'Yoga Teacher',
  },
  {
    quote:
      'Every retreat felt like a return to myself — grounded, intuitive, and supported.',
    name: 'Noah R.',
    role: 'Retreat Participant',
  },
];

const STATS = [
  { label: 'Years teaching', value: `${SITE.yearsTeaching}` },
  { label: 'Students worldwide', value: `${(SITE.studentsTaught / 1000).toFixed(0)}k+` },
  { label: 'Teachers certified', value: `${SITE.teachersTrained}+` },
];

export default function UltimateYogaTemplatePage() {
  return (
    <main className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,214,179,0.35),transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(168,108,77,0.12),transparent_35%),var(--color-bone)]">
        <div className="container-page grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Yoga teacher website template</p>
            <h1 className="mt-6 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.96] tracking-tight">
              Teach with clarity, trust, and a modern wellness launch funnel.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-stone)]">
              A hero-led homepage designed for yoga teachers and studio founders who want to move students from discovery to membership, trainings, and retreats.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#programs" size="lg">
                See the offerings
              </ButtonLink>
              <ButtonLink href="#community" size="lg" variant="secondary">
                Join the newsletter
              </ButtonLink>
            </div>
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 sm:grid-cols-3">
              {STATS.map((item) => (
                <div key={item.label} className="rounded-[var(--radius-xl)] border border-[var(--color-sand)] bg-[var(--color-cream)] px-4 py-5 text-center">
                  <p className="text-3xl font-serif">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--color-stone)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[var(--radius-2xl)] bg-[var(--color-clay)] p-6 shadow-2xl shadow-black/10 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,rgba(241,142,102,1),rgba(169,82,46,0.4))]" />
            <div className="relative rounded-[var(--radius-2xl)] overflow-hidden bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_55%)] p-6">
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-black/5">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80&auto=format&fit=crop"
                  alt="Yoga teacher portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4 text-[var(--color-bone)]">
              <p className="eyebrow">Your main conversion moment</p>
              <h2 className="font-serif text-3xl leading-tight">
                A single homepage that feels premium, soulful, and direct.
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-bone)]/85">
                High-impact hero, clear mission, trust signals, membership path, teacher training anchor, and a newsletter capture built for earned attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page space-y-10" id="programs">
        <div className="max-w-3xl">
          <p className="eyebrow">Built around a clear funnel</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">
            A homepage structure that gently guides new students to deep offers.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-stone)]">
            The best teacher sites balance emotional storytelling with practical offers: an accessible practice entry point, an anchor membership or training, and a visible path to deeper study.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article key={program.title} className="rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-white p-8 shadow-sm shadow-black/5">
              <h3 className="font-serif text-2xl leading-tight">{program.title}</h3>
              <p className="mt-4 text-[var(--color-stone)] leading-relaxed">{program.subtitle}</p>
              <ButtonLink href={program.href} variant="secondary" className="mt-8 inline-flex">
                {program.button}
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Anchor offer</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05]">
              Turn website traffic into a member, trainee, or retreat guest.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-stone)]">
              Feature one strong offer first, then show supporting offers. This creates one clear next step, with a flexible secondary path for students who are not yet ready to commit.
            </p>
            <ul className="mt-8 grid gap-3 text-[var(--color-stone)]">
              <li className="rounded-3xl border border-[var(--color-sand)] bg-white p-5">Daily classes with a free trial to lower the friction for first-time visitors.</li>
              <li className="rounded-3xl border border-[var(--color-sand)] bg-white p-5">Teacher training and retreats as premium anchor offers that support higher lifetime value.</li>
              <li className="rounded-3xl border border-[var(--color-sand)] bg-white p-5">Strong newsletter CTA to capture interest from browsers who are not ready to enroll.</li>
            </ul>
          </div>

          <div className="rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-white p-10 shadow-xl shadow-black/5">
            <p className="eyebrow">Membership preview</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight">Live classes + library access</h3>
            <dl className="mt-8 grid gap-4 text-[var(--color-stone)]">
              <div>
                <dt className="text-xs uppercase tracking-[0.24em]">Live classes</dt>
                <dd className="mt-2 text-lg font-semibold text-[var(--color-ink)]">3 weekly sessions</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em]">On-demand library</dt>
                <dd className="mt-2 text-lg font-semibold text-[var(--color-ink)]">200+ practices</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em]">Community</dt>
                <dd className="mt-2 text-lg font-semibold text-[var(--color-ink)]">Private group + accountability</dd>
              </div>
            </dl>
            <ButtonLink href="/teach" size="lg" className="mt-8 w-full">
              Start your first class
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-page space-y-10" id="community">
        <div className="max-w-3xl">
          <p className="eyebrow">Community and credibility</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05]">
            Build trust with students before they buy.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-stone)]">
            Combine newsletter sign-up, press mentions, teacher credentials, and student stories to support deeper conversion and better retention.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.75fr]">
          <div className="rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-[var(--color-clay)] p-10 text-[var(--color-bone)] shadow-lg shadow-black/5">
            <p className="eyebrow">Subscribe to the weekly letter</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight">Tools, rituals, and gentle challenges in your inbox.</h3>
            <p className="mt-5 text-[var(--color-bone)]/80 leading-relaxed">
              Use email as your secondary funnel. Low-pressure value first, then occasional workshop, retreat, and course invitations.
            </p>
            <div className="mt-8">
              <NewsletterForm source="ultimate-hero" cta="Join" placeholder="you@mail.com" />
            </div>
          </div>

          <div className="grid gap-4 rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-white p-8 shadow-sm shadow-black/5">
            <p className="eyebrow">Trusted by the wellness press</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[var(--color-stone)] sm:grid-cols-4">
              {TRUSTED_IN.map((name) => (
                <div key={name} className="rounded-3xl border border-[var(--color-sand)] bg-[var(--color-cream)] px-4 py-3 text-center">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="container-page">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-white p-8 shadow-sm shadow-black/5"
                >
                  <p className="text-lg leading-8 text-[var(--color-ink)]">“{testimonial.quote}”</p>
                  <footer className="mt-6 text-sm uppercase tracking-[0.24em] text-[var(--color-stone)]">
                    {testimonial.name}, {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page rounded-[var(--radius-2xl)] border border-[var(--color-sand)] bg-[var(--color-clay)] p-12 text-[var(--color-bone)] shadow-2xl shadow-black/10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="eyebrow">Final invitation</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05]">Create a yoga site that supports practice, training, and a lifelong community.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-bone)]/80">
              This template is designed to feel grounded, premium, and approachable — the exact mix elite teachers use to convert students in 2026.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/trainings" size="lg">
              Start training
            </ButtonLink>
            <ButtonLink href="/teach" size="lg" variant="secondary">
              Start practicing
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

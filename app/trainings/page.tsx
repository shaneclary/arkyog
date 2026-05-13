import type { Metadata } from 'next';
import Script from 'next/script';
import { TrainingCard } from '@/components/training-card';
import { CtaBand } from '@/components/cta-band';
import { Testimonials } from '@/components/testimonials';
import { TRAININGS } from '@/content/trainings';
import { TESTIMONIALS } from '@/content/testimonials';
import { courseSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Teacher Trainings',
  description:
    'Three structured ARKademy programs with Arkady Shirin: the Foundation Series (one year to Certified Yoga Student), the three-year Body Mastery Program, and the 200-hour Yoga Alliance-registered Teacher Training. Hawaii intensives and online.',
};

export const revalidate = 3600;

export default function TrainingsPage() {
  return (
    <>
      {TRAININGS.map((t) => (
        <Script
          key={t.slug}
          id={`ld-course-${t.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema(t)) }}
        />
      ))}

      <header className="container-page pt-24 md:pt-32 pb-16 md:pb-20">
        <p className="eyebrow">The ARKademy · programs</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-[1.0] max-w-4xl">
          Become a student. Then — maybe — a teacher.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-[var(--color-stone)] leading-relaxed">
          Three structured programs, taken in order. Foundation Series first —
          one year as a Certified Yoga Student. Body Mastery Program next —
          three years of the full system. Teacher Training only after both.
        </p>
      </header>

      <section className="container-page pb-16 space-y-8">
        {TRAININGS.map((t) => (
          <TrainingCard key={t.slug} item={t} />
        ))}
      </section>

      <Testimonials
        items={TESTIMONIALS.filter((t) => t.role.includes('Student') || t.role.includes('therapist') || t.role.includes('Studio'))}
        eyebrow="Graduate voices"
        heading="Students who completed the year."
      />

      <CtaBand
        eyebrow="Apply"
        heading="Begin with a short conversation."
        body="No application fee. A 30-minute call with me — to make sure the work is right for you and you are right for the work. I read every inquiry."
        primary={{ href: '/book?topic=program-application', label: 'Schedule the call' }}
        secondary={{ href: 'mailto:hello@arkyog.com', label: 'Email a question' }}
      />
    </>
  );
}

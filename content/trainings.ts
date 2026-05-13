import type { Course } from './types';

/**
 * Dates intentionally TBA. The startDate/endDate fields are placeholders
 * kept only so the Course JSON-LD validates. `datesTba: true` causes the
 * UI to render "Dates announced soon".
 */
const TBA_START = '2099-01-01';
const TBA_END = '2099-12-31';

export const TRAININGS: Course[] = [
  {
    slug: 'foundation-series',
    title: 'The Foundation Series · Become a Certified Yoga Student',
    summary:
      "Everyone certifies yoga teachers. No one certifies yoga students. This is what one year of real preliminary work looks like — daily warm-up, yamas and niyamas, bandhas, the attitude for practice and life. Complete this before any other series. Most students who do say they never need anything else.",
    level: 'Foundation · pre-requisite',
    duration: '1 year · self-paced + monthly live cohort calls',
    format: 'online',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Online · worldwide',
    price: 79000,
    hours: 100,
    highlights: [
      'Daily preliminary warm-up practice (15–35 minutes)',
      'Evaluation of practitioner — where you actually are',
      'The 10 yamas and 10 niyamas, lived not memorized',
      'Bandha introduction — the locks, slowly',
      'The attitude for practice and the attitude for life',
      'Monthly live cohort call with Arkady',
      'Certificate of Yoga Student on completion',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'Evaluation — Where Are You?',
        topics: ['Honest body assessment', 'Breath assessment', 'Where the tension hides', 'The three obstacles in your case'],
      },
      {
        week: 2,
        theme: 'Approaching the Practice',
        topics: ['When, where, how often', 'The attitude that injures vs. heals', 'How to read your own resistance'],
      },
      {
        week: 3,
        theme: 'Yama · The Don\'ts',
        topics: ['Ahimsa, satya, asteya in daily life', 'Brahmacharya beyond celibacy', 'Mitahara — moderate diet'],
      },
      {
        week: 4,
        theme: 'Niyama · The Do\'s',
        topics: ['Hri, santosha, tapas', 'Dana — what charity actually is', 'Japa, mati, sacred vows'],
      },
    ],
    faculty: [
      'Arkady Shirin — lead teacher',
      'Plus rotating guest faculty from the lineage',
    ],
    capacity: 40,
    spotsLeft: 9,
  },
  {
    slug: 'body-mastery-program',
    title: 'Body Mastery Program · The Full System',
    summary:
      "Three years of structured work — once you've completed the Foundation Series. Asana, pranayama, the Yoga Sutras, the Master's practices (Dance of Shiva, Moon and Sun salutes, Shaolin sequences, sword and staff). Designed for the long arc. Designed to keep you injury-free for the next sixty years.",
    level: 'Advanced',
    duration: '3 years · quarterly intensives + weekly online',
    format: 'hybrid',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Riga + retreat intensives + online weekly',
    price: 489000,
    hours: 700,
    highlights: [
      'Full Ashtanga primary, intermediate, and advanced series',
      'Pranayama from beginner through advanced',
      'The Master\'s practices: Chaya Chankalanam, Dance of Shiva, Tiger by candlelight',
      'Tai Chi and Shaolin elements integrated throughout',
      'Yoga Sutra study with classical commentaries',
      'Quarterly retreat-location intensives — small group',
      'Lifetime access to the recorded library',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'Year One · Asana Foundation',
        topics: ['Full primary series', 'Modified versions for every body', 'Therapeutic application'],
      },
      {
        week: 2,
        theme: 'Year Two · Pranayama & Bandha',
        topics: ['The breath ratios', 'The four bandhas', 'Kumbhaka — retention work'],
      },
      {
        week: 3,
        theme: 'Year Three · Master\'s Practices',
        topics: ['Dance of Shiva mastery', 'Sword and staff sequences', 'Sun and moon salutations integrated'],
      },
    ],
    faculty: ['Arkady Shirin'],
    capacity: 20,
    spotsLeft: 7,
  },
  {
    slug: 'teacher-training-200hr',
    title: '200-Hour Teacher Training · Body Mastery Method',
    summary:
      "For practitioners who have completed at least two years in the ARKademy. You will learn how to teach the Body Mastery method, how to adjust without injuring, and how to actually evaluate the practitioner in front of you. Yoga Alliance registered.",
    level: 'Teacher training',
    duration: '6 months · 4 in-person intensives + weekly mentorship',
    format: 'hybrid',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Riga + Online',
    price: 649000,
    hours: 200,
    highlights: [
      'How to evaluate the practitioner in front of you',
      'How to adjust — the touch, the timing, the consent',
      'How to teach the Foundation Series with integrity',
      'Bandha and pranayama for the teacher',
      'Business and ethics of teaching',
      'Yoga Alliance RYS-200 certification',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'Foundations of Teaching',
        topics: ['Anatomy for the teacher', 'Sequencing principles', 'The voice and the room'],
      },
      {
        week: 2,
        theme: 'How to Adjust',
        topics: ['Consent first', 'The four kinds of touch', 'When not to adjust'],
      },
    ],
    faculty: ['Arkady Shirin'],
    capacity: 12,
    spotsLeft: 11,
  },
];

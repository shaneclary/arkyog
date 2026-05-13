import type { Course } from './types';

/**
 * Programs as Arkady defines them in the source document:
 *   - Foundation Series (the prerequisite year)
 *   - Pranayama Series (Beginner + Intermediate)
 *   - Bodywork Series
 *   - Advanced Series (Asana, Pranayama, Yoga Samhita)
 *   - Teacher Training (How to Adjust)
 *
 * Dates and prices intentionally TBA. Placeholders kept only so JSON-LD
 * Course schema validates. UI renders "Announced soon" / "Inquire" instead.
 */
const TBA_START = '2099-01-01';
const TBA_END = '2099-12-31';

export const TRAININGS: Course[] = [
  {
    slug: 'foundation-series',
    title: 'The Foundation Series · Become a Certified Yoga Student',
    summary:
      "Everyone certifies yoga teachers. Almost no one certifies yoga students. This is one year of real preliminary work — Evaluation of the Practitioner, the Attitude for Practice and Life, the Preliminary Warm-Up, the ten Yamas and ten Niyamas, the Bandhas. Complete this and you are ready for the First Series. Many students who do find the preliminary work is all they will ever need.",
    level: 'Foundation · prerequisite',
    duration: '1 year · self-paced + monthly cohort calls',
    format: 'online',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Online · worldwide',
    price: 0,
    priceTba: true,
    hours: 100,
    highlights: [
      'Evaluation of the Practitioner — honest where you are now',
      'Approaching the Practice & Attitude for Practice and Life',
      'Preliminary Work (Warm Up) — daily, for a full year',
      'The 10 Yamas and 10 Niyamas — lived, not memorized',
      'Bandha — the locks, slowly',
      'Certificate of Yoga Student on completion',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'Evaluation & Attitude',
        topics: [
          'Where you actually are in body, breath, and mind',
          'The attitude that heals vs. the attitude that injures',
          'How to read your own resistance',
        ],
      },
      {
        week: 2,
        theme: 'The Preliminary Warm-Up',
        topics: [
          'Wake up the organs',
          'Release stress and tension — indoor and outdoor versions',
          'Daily 30–45 minute home practice',
        ],
      },
      {
        week: 3,
        theme: 'Yama — the ten don\'ts',
        topics: [
          'Ahimsa, Satya, Asteya, Brahmacharya, Kshama',
          'Dhriti, Daya, Arjava, Mitahara, Saucha',
          'How each shows up on the mat and off',
        ],
      },
      {
        week: 4,
        theme: 'Niyama — the ten do\'s',
        topics: [
          'Hri, Santosha, Dana, Astikya, Ishvarapujana',
          'Siddhanta-shravana, Mati, Vrata, Japa, Tapas',
          'A weekly practice for each',
        ],
      },
      {
        week: 5,
        theme: 'Bandha — the locks',
        topics: [
          'Mula bandha, Uddiyana bandha, Jalandhara bandha',
          'Maha bandha — the integration',
          'Introduction to Uddiyana and Nauli',
        ],
      },
    ],
    faculty: ['Arkady Shirin'],
    capacity: 40,
    spotsLeft: 40,
  },
  {
    slug: 'pranayama-series',
    title: 'Pranayama Series · Beginner through Intermediate',
    summary:
      "A structured pranayama path for students who have completed the Foundation Series. Beginner level establishes the breath itself — diaphragmatic, three-part, the breath ratios. Intermediate adds nadi shodhana, kumbhaka (retention), and the deeper bandha work. Open to all serious practitioners.",
    level: 'Beginner & Intermediate',
    duration: 'Two levels · self-paced',
    format: 'online',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Online · worldwide',
    price: 0,
    priceTba: true,
    hours: 60,
    highlights: [
      'Beginner: breath mechanics, three-part breath, ratios',
      'Intermediate: nadi shodhana, kumbhaka, bandha-with-breath',
      'Daily 20–40 minute home practice support',
      'Counts toward continuing education for teachers',
      'Pre-recorded library of all practices',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'Beginner · Breath Mechanics',
        topics: ['Diaphragmatic breathing', 'Three-part breath', 'Breath ratios — 1:1, 1:2, 1:4'],
      },
      {
        week: 2,
        theme: 'Intermediate · Subtle Work',
        topics: ['Nadi shodhana with retention', 'Kumbhaka — internal and external', 'Bandha integrated with breath'],
      },
    ],
    faculty: ['Arkady Shirin'],
    capacity: 30,
    spotsLeft: 30,
  },
  {
    slug: 'bodywork-series',
    title: 'Bodywork Series · Different Styles of Bodywork',
    summary:
      "A practical series on the bodywork I have used and taught for decades — what each style does, when it helps, when to refer out, and how to use simple self-massage and partner-work to recover from practice. Includes the introduction to Banya bodywork as I learned it growing up.",
    level: 'All practitioners · open to teachers and students',
    duration: 'Modular · 12 sessions',
    format: 'online',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Online · worldwide',
    price: 0,
    priceTba: true,
    hours: 40,
    highlights: [
      'Different styles of bodywork — what each does',
      'Self-massage protocols you can do daily',
      'Partner work — how to give without injuring',
      'The Banya ritual: mask, thermo, salt-honey scrub, stretching',
      'When bodywork is the answer and when it is not',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'A Survey of Styles',
        topics: ['Thai massage basics', 'Russian/Banya bodywork', 'Shiatsu touchpoints', 'Trigger-point release'],
      },
      {
        week: 2,
        theme: 'How to Massage',
        topics: ['The four kinds of touch', 'Consent and pressure', 'When not to touch'],
      },
    ],
    faculty: ['Arkady Shirin'],
    capacity: 20,
    spotsLeft: 20,
  },
  {
    slug: 'advanced-series',
    title: 'Advanced Series · Asana, Pranayama, Yoga Samhita',
    summary:
      "For students who have completed the Foundation Series and the Pranayama Series. Advanced asana (including poses related to ashtavakrasana and the inversions), advanced pranayama, and primary-source study of the Yoga Samhita and the Sutras. The work most modern studios will not teach you — because most modern teachers were not taught it.",
    level: 'Advanced',
    duration: 'Multi-year · open enrollment',
    format: 'hybrid',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Riga + retreat intensives + online',
    price: 0,
    priceTba: true,
    hours: 200,
    highlights: [
      'Advanced asana — including poses related to ashtavakrasana',
      'Inversions and the full inverted routine',
      'Advanced pranayama',
      'Primary-source study of the Yoga Samhita',
      'Quarterly intensives at retreat locations',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'Advanced Asana',
        topics: ['Ashtavakrasana family', 'Arm balances and transitions', 'The inversions, properly prepared'],
      },
      {
        week: 2,
        theme: 'Yoga Samhita Study',
        topics: ['Reading primary sources', 'Sanskrit basics for practitioners', 'The classical commentaries'],
      },
    ],
    faculty: ['Arkady Shirin'],
    capacity: 16,
    spotsLeft: 16,
  },
  {
    slug: 'teacher-training-how-to-adjust',
    title: 'Teacher Training · How to Adjust',
    summary:
      "For practitioners with at least two years in the ARKademy. The teacher-training component focuses heavily on the single skill most yoga teachers lack: how to adjust a body without injuring it. Anatomy, consent, the four kinds of touch, when to adjust, when not to. The rest of teacher training is included alongside.",
    level: 'Teacher training',
    duration: 'Multi-month program',
    format: 'hybrid',
    startDate: TBA_START,
    endDate: TBA_END,
    datesTba: true,
    location: 'Riga + Online',
    price: 0,
    priceTba: true,
    hours: 200,
    highlights: [
      'How to evaluate the practitioner in front of you',
      'How to adjust — the touch, the timing, the consent',
      'How to teach the Foundation Series with integrity',
      'Sequencing for real bodies, not magazine bodies',
      'Business and ethics of teaching',
    ],
    curriculum: [
      {
        week: 1,
        theme: 'How to Adjust',
        topics: ['Consent first', 'The four kinds of touch', 'When not to adjust'],
      },
      {
        week: 2,
        theme: 'Sequencing & Voice',
        topics: ['Building a class arc', 'Voice and pacing', 'The room you are actually in'],
      },
    ],
    faculty: ['Arkady Shirin'],
    capacity: 12,
    spotsLeft: 12,
  },
];

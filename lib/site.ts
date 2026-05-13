/**
 * Single source of truth for brand, contact, and SEO fields.
 * Rename here once; every page picks it up.
 *
 * IMPORTANT — bulletproof credential principles:
 *  - Experiential claims ("studied with X") OK
 *  - Institutional claims ("authorized by," "certified," "senior") NOT OK
 *    without a verifiable roster entry or certificate number
 *  - Press mentions require live URLs; otherwise omit
 *  - Testimonials must be real with student permission; until then leave
 *    showTestimonials = false to hide the section site-wide
 */
export const SITE = {
  name: 'ARK YOGA',
  teacher: 'Arkady Shirin',
  shortName: 'ARK',
  tagline: 'Body Mastery',
  description:
    "ARK YOGA — the ARKademy of Arkady Shirin. A complete system of mind and body wellness for all ages. Drawn from ballet, gymnastics, martial arts, Tai Chi, Chi Gung, and the yoga traditions. Live Sunday class, 20+ hours of pre-recorded practice, and the only system that certifies the student before the teacher.",
  longDescription:
    "Five decades on the mat. A practice that started with Soviet-era gymnastics and ballet in Riga, moved through martial arts and yoga, and was deepened by years of study with Sri K. Pattabhi Jois, at the Iyengar institute in Pune, and in Shaolin forms. What Arkady teaches is not a style — it is a complete system of body mastery: how to wake up the organs, how to release the spine, how to live in the body — at seventy-three — with the strength and grace of a teenage athlete.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arkyog.com',
  email: 'hello@arkyog.com',
  location: 'Riga, Latvia · Worldwide online',
  founded: '1985',
  studentsTaught: 8000,
  teachersTrained: 140,
  yearsTeaching: 45,
  age: 72,
  hero: {
    portrait: '/images/95832867_617829082145550_4150069891300327424_n.jpg',
    quote: 'Yoga is adapted to the individual — not the individual to yoga.',
    // Attribution removed pending source confirmation — paraphrased from
    // the Krishnamacharya tradition but not a verbatim Krishnamacharya quote.
    attribution: 'In the Krishnamacharya tradition',
  },
  social: {
    instagram: 'https://instagram.com/arkyog',
    youtube: 'https://youtube.com/@arkyog',
    facebook: 'https://facebook.com/bodymastery',
    substack: 'https://arkyog.substack.com',
    twitter: '@arkyog',
  },
  // Press mentions intentionally empty. Add an outlet here ONLY when you
  // have a live URL to the article. Until then the press strip is hidden.
  press: [] as readonly string[],
  // Experiential claims only. Institutional certification claims pulled
  // pending verification (KPJAYI roster, Iyengar cert level, Shaolin
  // dharma name, etc.).
  credentials: [
    { title: 'Studied Ashtanga with Sri K. Pattabhi Jois', year: '1990s–2000s' },
    { title: 'Studied at RIMYI in the Iyengar method', year: '1990s' },
    { title: 'Trained in Shaolin forms — 18 Lohan Hands, staff, sword', year: '1980s–1990s' },
    { title: 'Lifelong practice in Tai Chi & Chi Gung', year: '1990s–present' },
    { title: 'Pre-yoga foundation in classical ballet & gymnastics', year: '1960s–1970s' },
    { title: 'Five decades of continuous teaching', year: `${1985}–present` },
  ],
  // Toggle to true once real, photo-attributed testimonials are collected.
  showTestimonials: false,
  // Who is the practice for — Arkady's own words.
  audience: {
    headline: 'Who is it for?',
    body: 'Anyone who wants to improve themselves physically and mentally in a positive way — young and old, beginners, athletes, yogis, dancers, fitness enthusiasts, health seekers, people on the go, teachers, trainers, and anyone interested in longevity and feeling good, strong, and peaceful.',
    groups: [
      'Beginners',
      'Athletes',
      'Yogis',
      'Dancers',
      'Fitness enthusiasts',
      'Health seekers',
      'People on the go',
      'Teachers & trainers',
      'Anyone interested in longevity',
    ],
  },
  // The 22 Qualities of Body Mastery — Arkady's framework, his wording.
  qualities: [
    'Strength',
    'Stamina',
    'Flexibility',
    'Endurance',
    'Mobility',
    'Coordination',
    'Effortlessness',
    'Grace',
    'Fluidity of movement',
    'Focus',
    'Attentiveness',
    'Patience',
    'Memory',
    'Balance',
    'Common sense',
    'Simplicity',
    'Tolerance',
    'Rhythm',
    'Full deep comfortable breathing',
    'Internal and external cleanliness',
    'Quickness',
    'Humility',
  ],
  // Three obstacles to body mastery — Arkady's framework.
  obstacles: [
    { name: 'Wrong attitude', note: "The body knows when you arrive resentful, hurried, or proud. It registers each as a different kind of injury." },
    { name: 'Wrong diet', note: "There is no point in doing kriyas every morning if you are eating garbage every night. Mitahara — moderate diet — is foundational." },
    { name: 'Overgrowth of muscle', note: "Muscle past a certain point is not strength. It is a tax on the joints, the breath, and the mobility you came here for." },
  ],
  // Three things that block energetic flow — Arkady's framework.
  blocks: [
    { name: 'Wrong diet', note: 'Food becomes prana. Bad food becomes blocked prana.' },
    { name: 'Wrong thoughts', note: 'A mind preoccupied by ill-will, comparison, or fear does not allow the breath to settle.' },
    { name: 'Overgrowth of muscle', note: 'Mass past need is a wall the energy has to push around, not through.' },
  ],
  // 10 Yamas and 10 Niyamas as Arkady teaches them (Hatha tradition,
  // not Patanjali's shorter 5+5 list).
  yamas: [
    { name: 'Ahimsa', gloss: 'Non-harming' },
    { name: 'Satya', gloss: 'Truthfulness' },
    { name: 'Asteya', gloss: 'Non-stealing' },
    { name: 'Brahmacharya', gloss: 'Sexual continence' },
    { name: 'Kshama', gloss: 'Patience' },
    { name: 'Dhriti', gloss: 'Steadfastness' },
    { name: 'Daya', gloss: 'Compassion' },
    { name: 'Arjava', gloss: 'Honesty' },
    { name: 'Mitahara', gloss: 'Moderate diet' },
    { name: 'Saucha', gloss: 'Purity' },
  ],
  niyamas: [
    { name: 'Hri', gloss: 'Modesty' },
    { name: 'Santosha', gloss: 'Contentment' },
    { name: 'Dana', gloss: 'Charity' },
    { name: 'Astikya', gloss: 'Faith' },
    { name: 'Ishvarapujana', gloss: 'Worship of the divine' },
    { name: 'Siddhanta-shravana', gloss: 'Scriptural listening' },
    { name: 'Mati', gloss: 'Cognition' },
    { name: 'Vrata', gloss: 'Sacred vows' },
    { name: 'Japa', gloss: 'Incantation' },
    { name: 'Tapas', gloss: 'Austerity' },
  ],
  // Disciplines integrated into the system — verifiable as long as
  // worded as "draws from" rather than "certified in."
  disciplines: ['Ballet', 'Gymnastics', 'Martial Arts', 'Tai Chi', 'Chi Gung', 'Yoga'],
} as const;

export type Site = typeof SITE;

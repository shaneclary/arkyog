/**
 * Single source of truth for brand, contact, and SEO fields.
 * Rename here once; every page picks it up.
 */
export const SITE = {
  name: 'ARK YOGA',
  teacher: 'Arkady Shirin',
  shortName: 'ARK',
  tagline: 'Body Mastery',
  description:
    "ARK YOGA — the ARKademy of Arkady Shirin. A complete system of mind and body wellness for all ages. Drawn from Ashtanga, Iyengar, Shaolin, Tai Chi, ballet, and gymnastics. Live Sunday class, 20+ hours of pre-recorded practice, and the only system that certifies the student before the teacher.",
  longDescription:
    "Six decades on the mat. A direct line back to Jois, Iyengar, and Akilanka. A body trained by ballet, gymnastics, and Shaolin before yoga ever entered the picture. What Arkady teaches is not a style — it is a complete system of body mastery: how to wake up the organs, how to release the spine, how to live in the body without injury for sixty more years.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arkyog.com',
  email: 'hello@arkyog.com',
  location: 'Hawaii · New York · Worldwide online',
  founded: '1985',
  studentsTaught: 8000,
  teachersTrained: 140,
  yearsTeaching: 40,
  age: 60,
  hero: {
    portrait: '/images/95832867_617829082145550_4150069891300327424_n.jpg',
    quote: 'Yoga is adapted to the individual — not the individual to yoga.',
    attribution: 'Sri T. Krishnamacharya',
  },
  social: {
    instagram: 'https://instagram.com/arkyog',
    youtube: 'https://youtube.com/@arkyog',
    facebook: 'https://facebook.com/arkyog',
    substack: 'https://arkyog.substack.com',
    twitter: '@arkyog',
  },
  press: [
    'Yoga Journal',
    'Tricycle',
    'Mantra Magazine',
    'Hawaii Public Radio',
    'OM Yoga',
    'Origin Magazine',
  ],
  certifications: [
    'Authorized by KPJAYI (Pattabhi Jois lineage)',
    'Iyengar Yoga Senior',
    'Shaolin instructor — 18 Lohan Hands',
    '40+ years teaching',
  ],
  // The 22 qualities of Body Mastery
  qualities: [
    'Strength',
    'Stamina',
    'Flexibility',
    'Endurance',
    'Mobility',
    'Coordination',
    'Effortlessness',
    'Grace',
    'Fluidity',
    'Focus',
    'Attentiveness',
    'Patience',
    'Memory',
    'Balance',
    'Common sense',
    'Simplicity',
    'Tolerance',
    'Rhythm',
    'Deep breathing',
    'Cleanliness',
    'Quickness',
    'Humility',
  ],
  // Three obstacles to body mastery
  obstacles: [
    { name: 'Wrong attitude', note: 'The body knows when you arrive resentful, hurried, or proud. It registers each of these as a different injury.' },
    { name: 'Wrong diet', note: 'You cannot build a temple on a foundation of garbage. Mitahara — moderate diet — is the third yama for a reason.' },
    { name: 'Overgrowth of muscle', note: 'Muscle past a certain point is not strength. It is a tax on the joints, the breath, and the mobility you came here for.' },
  ],
} as const;

export type Site = typeof SITE;

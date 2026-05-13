import type { LineageTeacher } from './types';

/**
 * Lineage entries follow the bulletproof rule:
 *  - "Studied with X" / "Trained in Y" — defensible, experiential
 *  - "Authorized by X" / "Certified in Y" / "Senior teacher" — REMOVED
 *    pending verifiable roster entries or certificate numbers
 *
 * Photos with named teachers (Jois, Iyengar, Akilanka, Shaolin masters)
 * are referenced in Arkady's own EPK and can be shown directly when
 * scanned and added to /public.
 */
export const LINEAGE: LineageTeacher[] = [
  {
    name: 'Sri K. Pattabhi Jois',
    years: 'studied 1990s–2000s',
    lineage: 'Ashtanga',
    note: "Years of direct study with Pattabhi Jois — the discipline of self-practice, the heat of the practice room, the rhythm of breath and movement. All of it begins here.",
  },
  {
    name: 'B.K.S. Iyengar',
    years: 'studied 1990s',
    lineage: 'Iyengar method · RIMYI Pune',
    note: 'Time at the institute in Pune. Iyengar taught the precision of alignment and the courage of long holds — intelligence in the pose mattering more than ambition.',
  },
  {
    name: 'Sri T. Krishnamacharya',
    years: 'transmitted through Jois & Iyengar',
    lineage: 'The source of modern yoga',
    note: "His insistence — yoga is adapted to the individual, not the individual to yoga — is the operating principle of everything I teach.",
  },
  {
    name: 'Akilanka',
    years: '1980s',
    lineage: 'Classical Hatha',
    note: "Early years studying the bandhas, the kriyas, and the long pranayama work — the parts of yoga that are not on Instagram and never will be.",
  },
  {
    name: 'Shaolin teachers',
    years: '1980s–1990s',
    lineage: 'Shaolin Kung Fu',
    note: 'Years of training in Shaolin forms — including the 18 Lohan Hands, the staff, and the sword. The discipline of Shaolin is what lets the yoga go deep.',
  },
  {
    name: 'Classical ballet & gymnastics',
    years: '1960s–1970s · childhood through teens',
    lineage: 'Pre-yoga foundation · Riga',
    note: "Years of Soviet-era ballet and competitive gymnastics taught my body what a body was capable of long before I ever heard the word asana. Most yoga teachers don't have this foundation. I do.",
  },
  {
    name: 'Tai Chi & Chi Gung',
    years: 'studied 1990s–present',
    lineage: 'Internal arts',
    note: "Tai Chi and Chi Gung are the missing pieces in most yoga educations. The internal-arts tradition was practicing what the West now calls 'flow' a thousand years before the word existed.",
  },
];

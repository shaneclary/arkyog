export type Level = 'all-levels' | 'beginner' | 'intermediate' | 'advanced';
export type Format = 'online' | 'in-person' | 'hybrid';

export interface ClassItem {
  slug: string;
  title: string;
  style: string;
  level: Level;
  duration: number;
  preview?: string;
  description: string;
  isFree: boolean;
}

export interface Course {
  slug: string;
  title: string;
  summary: string;
  level: string;
  duration: string;
  format: Format;
  startDate: string;
  endDate: string;
  location: string;
  price: number;
  hours: number;
  highlights: string[];
  curriculum: { week: number; theme: string; topics: string[] }[];
  faculty: string[];
  capacity: number;
  spotsLeft: number;
}

export interface Retreat {
  slug: string;
  title: string;
  summary: string;
  venue: string;
  location: string;
  startDate: string;
  endDate: string;
  price: number;
  deposit: number;
  capacity: number;
  spotsLeft: number;
  image: string;
  format: Format;
  schedule: string[];
  included: string[];
  notIncluded: string[];
}

export interface JournalPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: number;
  image: string;
  tags: string[];
  body: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface Guide {
  slug: string;
  title: string;
  summary: string;
  pages: number;
  cover: string;
  gated: boolean;
}

export interface LineageTeacher {
  name: string;
  years: string;
  lineage: string;
  note: string;
}

export interface Event extends Retreat {}

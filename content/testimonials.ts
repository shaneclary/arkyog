import type { Testimonial } from './types';

/**
 * Testimonials are HIDDEN by default — set `SITE.showTestimonials = true`
 * in `lib/site.ts` once you have real, attributed, photo-permissioned
 * student quotes. Until then this file is unused by the live site.
 *
 * The entries below are placeholders kept as a structural reference for
 * the kind of testimonial that performs well (specific outcome, named
 * role, no anonymous stars). Do NOT publish these as real.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Placeholder · Replace before launch',
    role: 'Replace this entire file with real, attributed quotes',
    quote:
      "These cards are hidden in production until SITE.showTestimonials is set to true. Collect real student quotes — full name (or first name + initial), city, one specific outcome, and explicit permission to publish.",
  },
];

import { SITE } from './site';
import type { Course, Event, Retreat, JournalPost } from '@/content/types';

/**
 * JSON-LD helpers. Emit one schema per page via <Script type="application/ld+json">.
 * Schemas: Person, Organization, Course, Event, Article, VideoObject, BreadcrumbList.
 */

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: SITE.teacher,
    url: SITE.url,
    description: SITE.description,
    jobTitle: 'Yoga Master & Founder of the ARKademy',
    image: `${SITE.url}${SITE.hero.portrait}`,
    sameAs: [
      SITE.social.instagram,
      SITE.social.youtube,
      SITE.social.facebook,
      SITE.social.substack,
    ],
    knowsAbout: [
      'Ashtanga yoga (Pattabhi Jois lineage)',
      'Iyengar yoga',
      'Shaolin kung fu',
      'Tai Chi & Chi Gung',
      'Pranayama and kriya',
      'Body Mastery method',
    ],
    hasCredential: SITE.certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: c,
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#org`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    founder: { '@id': `${SITE.url}/#person` },
    foundingDate: SITE.founded,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE.email,
      contactType: 'customer service',
    },
    sameAs: [SITE.social.instagram, SITE.social.youtube, SITE.social.substack],
  };
}

export function courseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.summary,
    provider: { '@id': `${SITE.url}/#org` },
    instructor: { '@id': `${SITE.url}/#person` },
    url: `${SITE.url}/trainings/${course.slug}`,
    educationalLevel: course.level,
    timeRequired: course.duration,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.format,
      startDate: course.startDate,
      endDate: course.endDate,
      location: course.location,
    },
    offers: {
      '@type': 'Offer',
      price: course.price / 100,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function eventSchema(event: Retreat | Event) {
  const e = event as Retreat;
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.title,
    description: e.summary,
    startDate: e.startDate,
    endDate: e.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode:
      e.format === 'online'
        ? 'https://schema.org/OnlineEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: e.venue,
      address: e.location,
    },
    organizer: { '@id': `${SITE.url}/#org` },
    performer: { '@id': `${SITE.url}/#person` },
    image: e.image,
    offers: {
      '@type': 'Offer',
      price: e.price / 100,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/retreats/${e.slug}`,
      validFrom: new Date().toISOString(),
    },
  };
}

export function articleSchema(post: JournalPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@id': `${SITE.url}/#person` },
    publisher: { '@id': `${SITE.url}/#org` },
    image: post.image,
    mainEntityOfPage: `${SITE.url}/journal/${post.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

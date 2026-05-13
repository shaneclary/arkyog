import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { TRAININGS } from '@/content/trainings';
import { RETREATS } from '@/content/retreats';
import { JOURNAL } from '@/content/journal';
import { CLASSES } from '@/content/classes';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/teach`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/trainings`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/master`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/retreats`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/library`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/book`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  return [
    ...base,
    ...TRAININGS.map((t) => ({
      url: `${SITE.url}/trainings/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...RETREATS.map((r) => ({
      url: `${SITE.url}/retreats/${r.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...JOURNAL.map((p) => ({
      url: `${SITE.url}/journal/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...CLASSES.map((c) => ({
      url: `${SITE.url}/teach/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}

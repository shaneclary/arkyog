import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import Script from 'next/script';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { personSchema, organizationSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

export const viewport: Viewport = {
  themeColor: '#f7f3eb',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.teacher} — ${SITE.tagline}`,
    template: `%s — ${SITE.teacher}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.teacher }],
  keywords: [
    'yoga teacher',
    'yoga teacher training',
    'yoga retreats',
    'online yoga',
    'breathwork',
    'meditation',
    SITE.teacher,
  ],
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.teacher} — ${SITE.tagline}`,
    description: SITE.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: SITE.social.twitter,
    title: `${SITE.teacher} — ${SITE.tagline}`,
    description: SITE.description,
  },
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/journal/rss.xml' },
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-bone)] text-[var(--color-ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--color-ink)] focus:text-[var(--color-bone)] focus:px-3 focus:py-2 focus:rounded-sm"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </body>
    </html>
  );
}

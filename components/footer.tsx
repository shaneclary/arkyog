import Link from 'next/link';
import { SITE } from '@/lib/site';
import { NewsletterForm } from './newsletter-form';

const COLUMNS = [
  {
    label: 'Practice',
    links: [
      { href: '/teach', label: 'Practice library' },
      { href: '/trainings', label: 'Programs' },
      { href: '/master', label: "Master's Practice" },
      { href: '/retreats', label: 'Retreats' },
      { href: '/book', label: 'Book a 1:1' },
    ],
  },
  {
    label: 'Read & Listen',
    links: [
      { href: '/journal', label: 'Journal' },
      { href: '/library', label: 'Free Library' },
      { href: SITE.social.substack, label: 'Substack' },
      { href: SITE.social.youtube, label: 'YouTube' },
    ],
  },
  {
    label: 'About',
    links: [
      { href: '/about', label: 'Bio & Lineage' },
      { href: '/about#credentials', label: 'Credentials' },
      { href: '/about#press', label: 'Press' },
      { href: `mailto:${SITE.email}`, label: 'Contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bone)] mt-32">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="eyebrow text-[var(--color-clay)]">{SITE.tagline}</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-[1.1]">
              The Sunday letter.
            </h2>
            <p className="mt-4 max-w-md text-[var(--color-bone)]/70 leading-relaxed">
              One short note a week from Riga — practice prompts, philosophy,
              and the occasional contrarian opinion. Sent Sundays. Read by
              {' '}twelve thousand students worldwide. No spam, ever.
            </p>
            <div className="mt-6 max-w-md">
              <NewsletterForm dark />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.label}>
              <h3 className="font-serif text-sm tracking-[0.18em] uppercase text-[var(--color-clay)]">
                {col.label}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <FootLink href={link.href}>{link.label}</FootLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-bone)]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-[var(--color-bone)]/55">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Designed in Riga. Built on{' '}
            <a
              href="https://nextjs.org"
              className="underline underline-offset-4 hover:text-[var(--color-bone)]"
            >
              Next.js
            </a>{' '}
            &amp; deployed on{' '}
            <a
              href="https://vercel.com"
              className="underline underline-offset-4 hover:text-[var(--color-bone)]"
            >
              Vercel
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http');
  const cls = 'text-[var(--color-bone)]/70 hover:text-[var(--color-bone)] transition-colors';
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

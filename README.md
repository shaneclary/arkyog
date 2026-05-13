# ARK YOGA — Arkady Shirin

The website for **Arkady Shirin** and the **ARKademy** — a complete system of mind and body wellness drawn from Ashtanga (Pattabhi Jois), Iyengar, Shaolin, Tai Chi, ballet, and gymnastics. Built on Next.js 15 + Tailwind v4, deployable to Vercel in one click.

This codebase doubles as a generic, opinionated elite-yoga-teacher template. Rebrand by editing one file: [`lib/site.ts`](lib/site.ts).

Built from a 16-site audit of the world's most prominent yoga teachers (Adriene Mishler, Kino MacGregor, Tara Stiles, Seane Corn, Shiva Rea, Eddie Stern, Jessamyn Stanley, Elena Brower, J Brown, Tiffany Cruikshank, and more) — fixing what their sites get wrong and codifying what they get right.

---

## Why this template exists

Almost every elite yoga teacher's site has the same three problems:

1. **Brand evaporates at checkout.** The hero is beautiful; then the booking flow drops into an ugly Mindbody, Momence, or Union iframe and the magic ends.
2. **Hidden pricing on the high-ticket offers.** Retreats and trainings — the most lucrative SKUs — sit behind a "request info" wall.
3. **Blog graveyards.** High-DA personal domains run blogs that haven't been updated in two years, wasting massive SEO surface.

This template solves each:

- **Brand-skinned booking** via Cal.com Atoms (native React, no iframe) + Stripe Checkout for high-ticket
- **Transparent pricing** baked into card primitives — no "request info" mode
- **First-class journal** with `articleSchema`, RSS, sitemap auto-inclusion, prose typography that respects long reads

---

## What's in the box

### 8 pages, fully built

| Route | What it is |
|---|---|
| `/` | Home — hero, press strip, featured classes, anchor training, stats, featured retreat, testimonials, lead magnet, CTA |
| `/teach` | Class library (free + members) |
| `/trainings` | Index of 200hr / 300hr / immersions with course schema |
| `/trainings/[slug]` | Detail page — curriculum, faculty, pricing sidebar |
| `/retreats` | Retreat index with event schema |
| `/retreats/[slug]` | Detail page — schedule, included/not-included, deposit booking |
| `/journal` | Hero post + chronological index |
| `/journal/[slug]` | Article with prose typography, article schema, newsletter CTA |
| `/about` | Bio, lineage block, credentials, press, testimonials |
| `/book` | Cal.com Atoms mount + 1:1 offerings + sliding-scale note |
| `/library` | Free guides with email-gated download |

### Design system (Tailwind v4 with `@theme`)

- **Palette**: warm cream base (`bone`, `cream`, `sand`) + terracotta accent + sage support, defined in OKLCH for perceptual uniformity
- **Typography**: Inter (body) + Fraunces variable serif (display) via `next/font` with SOFT and optical-size axes
- **Motion**: breath-like easing (`cubic-bezier(0.32, 0.72, 0.32, 1)`) at slower-than-default durations, every animation gated by `prefers-reduced-motion`
- **Primitives**: `Button`/`ButtonLink`, `Card`, `Badge` — copy-paste shadcn philosophy, no runtime dependency

### Trust scaffolding components

- `<Hero>` — single warm portrait, transformation copy, floating lineage credential card
- `<PressStrip>` — itemized publication names (no anonymous logo soup)
- `<LineageBlock>` — timeline of named teachers with notes (the single biggest underexploited credibility move from the audit)
- `<Testimonials>` — full name, role, quote — no anonymous stars
- `<StatsStrip>` — quantified social proof
- `<LeadMagnet>` — Elena Brower's free-PDF pattern, the gold standard

### SEO & Schema

- Next.js Metadata API on every page
- JSON-LD via hand-typed helpers in [`lib/schema.ts`](lib/schema.ts):
  - `Person` (root) — global, on every page
  - `Organization` (root) — global, on every page
  - `Course` — on trainings index and each detail
  - `Event` — on retreats index and each detail
  - `Article` — on each journal post
  - `BreadcrumbList` — on every nested detail
- Dynamic `app/sitemap.ts` and `app/robots.ts`
- Edge-rendered `app/opengraph-image.tsx` (1200×630, warm gradient + teacher name)
- Edge-rendered `app/icon.tsx`

### Accessibility

- Skip-to-content link, visible focus rings everywhere
- `prefers-reduced-motion` honored globally
- WCAG-checked contrast on the warm palette
- Semantic landmarks, `aria-current`, `aria-label`s where icons stand alone
- Mobile-first; `Book` CTA always visible in mobile header (never buried in hamburger)

### Performance

- Tailwind v4 (CSS-first, ~10x build speed)
- `next/font` with `display: 'swap'`
- Hero image marked `fetchPriority="high"`
- Static-by-default with `revalidate = 3600` on dynamic pages — opts into ISR
- `experimental.ppr: 'incremental'` enabled in `next.config.mjs`
- Self-cleaning headers via `next.config.mjs` (X-Content-Type-Options, Referrer-Policy, etc.)

### Newsletter

- Server action at [`app/actions/newsletter.ts`](app/actions/newsletter.ts) wired to Kit (ConvertKit) API v4
- Falls back to dev-mode console log if `KIT_API_KEY` is unset — form works locally with no setup
- Two surfaces: footer (dark) and lead-magnet block (light)
- Used as social proof inline on every journal post

### Cron

- `vercel.json` registers a weekly Sunday 09:00 UTC digest cron at `/api/cron/digest` (stub provided, auth via `CRON_SECRET`)

---

## The stack — opinionated picks

Every choice below is justified by 2026 research on what serious solo teachers actually need:

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router, PPR incremental, RSC default)** | The marketing surface is content-heavy; PPR streams the dynamic "is member?" holes |
| Styling | **Tailwind v4 + shadcn philosophy (copy-paste)** | CSS-first config in [`globals.css`](app/globals.css); no runtime, no JS config |
| CMS | **Payload v3** (recommended; not wired) | Mounts inside same Next app; Postgres on Neon; weekly-updater friendly |
| Booking | **Cal.com Atoms** | Native React, inherits theme — solves the "ugly iframe" problem |
| Payments (high ticket) | **Stripe Checkout + Stripe Tax** | Retreats, TT, memberships. Native deposit/balance support |
| Payments (digital) | **Polar** (Merchant of Record) | Handles VAT/sales tax globally — cheaper than Lemon Squeezy post-Stripe-acquisition |
| Auth + members | **Clerk** | Free tier covers 100-2k MAU; Server Component helpers; Stripe Customer Portal link |
| Video | **Mux + `next-video`** | HLS, signed URLs (essential for gated member video), per-viewer analytics |
| Transactional email | **Resend + React Email** | Cleanest Next.js integration |
| Newsletter | **Kit (ConvertKit)** | Tag-based automations for course funnels — Beehiiv is for writers, Kit is for creators-who-sell |
| Analytics | **Vercel Web Analytics + Speed Insights + Plausible** | Cookieless, GDPR-clean — the wellness audience demands it |
| Forms | **Conform + Zod** (recommended) | Same schema client + server; works without JS for accessibility |
| Rate limiting | **Vercel KV + `@upstash/ratelimit`** | Wrap newsletter signup + contact form at 10 req/min/IP |
| Storage | **Vercel Blob** | Teacher uploads (retreat photos, intake PDFs) |

See [`.env.example`](.env.example) for the full env contract.

---

## Quick start

```bash
# 1. Install
npm install

# 2. Copy env
cp .env.example .env.local

# 3. Edit brand
# Open lib/site.ts and replace the SITE object with your details.
# That's the only file you need to touch for basic rebranding.

# 4. Run
npm run dev
```

Open <http://localhost:3000>.

---

## Deploy to Vercel

```bash
# Option A: one-click
# Push to GitHub, then "Import Project" on vercel.com

# Option B: CLI
npm i -g vercel
vercel
```

Add env vars in the Vercel dashboard from [`.env.example`](.env.example). At minimum, `NEXT_PUBLIC_SITE_URL` is needed for correct `metadataBase`, OG images, and sitemap.

---

## Rebranding checklist

1. **`lib/site.ts`** — name, teacher, tagline, location, social, press, stats. One file, 30 seconds.
2. **`app/globals.css`** — `@theme` block. Adjust palette OKLCH values, fonts via `next/font` in `app/layout.tsx`.
3. **`content/*.ts`** — replace mock content with yours. Each file is plain TypeScript with full type safety — drop into your CMS later.
4. **Hero image** — replace the Unsplash URL in [`components/hero.tsx`](components/hero.tsx) and [`app/about/page.tsx`](app/about/page.tsx) with your portrait.
5. **OG image** — edit `app/opengraph-image.tsx` if you want different copy.

---

## Wiring the integrations

### Cal.com Atoms (booking)

```bash
npm install @calcom/atoms
```

In [`app/book/page.tsx`](app/book/page.tsx), replace the mount placeholder with:

```tsx
import { Cal } from '@calcom/atoms';

<Cal
  calLink={process.env.NEXT_PUBLIC_CAL_LINK!}
  config={{ theme: 'light', layout: 'month_view' }}
/>
```

Atoms inherit your Tailwind theme — no iframe.

### Stripe (retreat deposits, training applications, memberships)

The `/book?retreat=...` and `/book?topic=ytt&track=...` query patterns are intentional. Wire these to a server action that creates a Stripe Checkout session with the relevant `price_id`. See [Stripe Checkout docs](https://stripe.com/docs/payments/checkout) — for retreats specifically, use Checkout's payment-plan support for deposit + balance.

### Kit newsletter

Set `KIT_API_KEY` and `KIT_FORM_ID` in env. The server action in [`app/actions/newsletter.ts`](app/actions/newsletter.ts) is already wired to Kit v4 API.

### Mux video for members library

```bash
npm install @mux/mux-node next-video
```

Drop `<MuxPlayer playbackId={signed} />` into `app/teach/[slug]/page.tsx` (build this route when ready). Generate signed URLs in a server action so URLs expire after 6 hours.

### Payload v3 CMS

```bash
npx create-payload-app@latest -t blank --use-pnpm
```

Migrate the content from `content/*.ts` into Payload collections. The `lib/schema.ts` helpers stay the same — they just consume Payload's typed responses instead of static arrays.

---

## What the audit found

**The 5 things elite teachers all do right:**
1. Tiered monetization stacks (free funnel → membership/courses → high-ticket TT/retreats)
2. Teacher Training as the anchor offer (highest margin + authority signal)
3. Press-logo or named-peer endorsement walls
4. Newsletter-as-CRM with a real lead magnet
5. A single warm portrait hero

**The 5 mistakes even elite teachers make:**
1. Fragmented booking that drops users into an ugly third-party iframe
2. Hidden pricing on retreats and trainings
3. Blog graveyards on high-DA domains
4. No or weak lead magnets
5. Aging WordPress/Squarespace stacks with slow LCP

**Three underexploited opportunities** (all baked into this template):
1. Owning the booking + payment layer with brand-skinned UI
2. Structured lineage + credentials module with `schema.org/Person`
3. Standardized free-guide library as a content type

---

## License

MIT — fork it, rebrand it, sell with it, ship it. Attribution appreciated, not required.

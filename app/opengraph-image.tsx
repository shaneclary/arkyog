import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${SITE.teacher} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'linear-gradient(135deg, #f7f3eb 0%, #ede2d2 70%, #d49b75 100%)',
          color: '#2a221e',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 28, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {SITE.name}
          </div>
          <div style={{ fontSize: 22, opacity: 0.65 }}>{SITE.location}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 26, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.7 }}>
            {SITE.tagline}
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.0,
              marginTop: 24,
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em',
              maxWidth: 980,
            }}
          >
            Practice that returns you to yourself.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 28, fontFamily: 'Georgia, serif' }}>{SITE.teacher}</div>
          <div style={{ fontSize: 22, opacity: 0.6 }}>{SITE.url.replace('https://', '')}</div>
        </div>
      </div>
    ),
    size,
  );
}

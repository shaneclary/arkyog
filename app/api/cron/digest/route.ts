import { NextResponse } from 'next/server';

/**
 * Weekly digest cron — fires Sundays 09:00 UTC per vercel.json.
 *
 * Wire here:
 *  - Pull the week's new journal posts and class releases
 *  - Send via Resend or queue to Kit broadcast
 *  - revalidateTag('digest') if you cache the rendered email
 *
 * Auth: protect with CRON_SECRET in headers when going live.
 * @see https://vercel.com/docs/cron-jobs/manage-cron-jobs
 */
export async function GET(request: Request) {
  const auth = request.headers.get('authorization');
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  // TODO: implement digest send
  return NextResponse.json({
    ok: true,
    ranAt: new Date().toISOString(),
    note: 'Stub — wire Resend + Kit broadcast here.',
  });
}

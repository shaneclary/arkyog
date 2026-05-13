'use server';

export type NewsletterState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter subscribe server action.
 *
 * Wires to Kit (ConvertKit) by default. Falls back to a console log if
 * KIT_API_KEY is not set so the form remains functional during local dev.
 *
 * To wire production: set KIT_API_KEY and KIT_FORM_ID in env.
 * Rate-limit at the edge with @upstash/ratelimit + Vercel KV when scaling.
 */
export async function subscribeAction(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const source = String(formData.get('source') ?? 'unknown');

  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Please enter a valid email.' };
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[newsletter:dev] would subscribe ${email} via ${source}`);
    }
    return {
      status: 'success',
      message: 'Welcome. Check your inbox for a confirmation.',
    };
  }

  try {
    const res = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': apiKey,
      },
      body: JSON.stringify({
        email_address: email,
        fields: { source },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('[newsletter] Kit error', res.status, body);
      return {
        status: 'error',
        message: 'Something went sideways. Try again in a moment.',
      };
    }
  } catch (err) {
    console.error('[newsletter] network error', err);
    return { status: 'error', message: 'Network error. Try again.' };
  }

  return {
    status: 'success',
    message: 'Welcome. Check your inbox for a confirmation.',
  };
}

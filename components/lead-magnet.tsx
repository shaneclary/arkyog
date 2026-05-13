import { NewsletterForm } from './newsletter-form';

export function LeadMagnet() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="eyebrow">Free · for new students</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
            The Preliminary Warm-Up.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-stone)] leading-relaxed max-w-lg">
            The 35-minute series I ask every new student to practice daily for
            a year — before any other series, any other style. If you do
            nothing else from this library, do this. Most students who finish
            the year say they never needed anything else.
          </p>
          <div className="mt-8 max-w-md">
            <NewsletterForm
              source="lead-magnet-home"
              cta="Send me the warm-up"
              placeholder="Your best email"
            />
          </div>
          <p className="mt-4 text-xs text-[var(--color-stone)]">
            You'll receive the full audio + PDF cue card, plus the Sunday
            letter. Unsubscribe with one click.
          </p>
        </div>

        <div className="relative max-w-md mx-auto w-full">
          <div className="aspect-[3/4] rounded-[var(--radius-xl)] overflow-hidden bg-gradient-to-br from-[var(--color-terracotta)] to-[var(--color-terracotta-deep)] shadow-2xl shadow-black/10 p-10 flex flex-col justify-between text-[var(--color-bone)]">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase opacity-75">
                The ARKademy
              </p>
              <h3 className="mt-6 font-serif text-4xl leading-[1.05]">
                Preliminary<br />
                Warm-Up<br />
                Series
              </h3>
            </div>
            <div>
              <div className="h-px w-12 bg-[var(--color-bone)]/60" />
              <p className="mt-4 font-serif italic text-sm opacity-90">
                Thirty-five minutes. Once a day. For one year.
              </p>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[var(--radius-2xl)] bg-[var(--color-sand)] -rotate-3"
          />
        </div>
      </div>
    </section>
  );
}

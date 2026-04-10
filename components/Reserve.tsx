import LogoMark from "./LogoMark";

export default function Reserve() {
  return (
    <section
      id="reserve"
      className="relative bg-green-mid py-24 md:py-32 overflow-hidden"
    >
      {/* Soft radial highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(250,246,237,0.12), transparent 70%)",
        }}
      />
      {/* Decorative oversized mark */}
      <LogoMark
        className="absolute -left-20 -bottom-16 h-80 w-auto text-cream-bg/[0.04] hidden md:block"
        strokeWidth={3}
      />
      <LogoMark
        className="absolute -right-16 -top-16 h-64 w-auto text-cream-bg/[0.04] hidden md:block"
        strokeWidth={3}
      />

      <div className="relative max-w-content mx-auto px-6 md:px-16 text-center">
        <LogoMark className="mx-auto h-14 w-auto text-cream-bg/80 mb-8" />

        <p className="eyebrow text-cream-bg/70 mb-5">
          <span>Bookings</span>
        </p>

        <h2 className="font-display text-cream-bg text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] tracking-[-0.015em]">
          Ready to <span className="italic font-normal">join us?</span>
        </h2>

        <p className="mt-6 mx-auto max-w-xl font-sans text-base md:text-lg text-cream-bg/80 leading-relaxed font-light">
          Bookings available Tuesday to Sunday. We recommend reserving at least
          48 hours ahead.
        </p>

        <div className="mt-10">
          <a
            href="tel:+441296000000"
            className="group inline-flex items-center justify-center rounded-full bg-cream-bg px-10 py-4 text-base font-medium text-green-mid hover:bg-cream-border transition-all shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
          >
            Reserve a Table
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 8h12M9 3l5 5-5 5" />
            </svg>
          </a>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-12 flex items-center justify-center gap-3 text-cream-bg/30"
        >
          <span className="block h-px w-16 bg-current" />
          <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx="3" cy="3" r="1.5" fill="currentColor" />
          </svg>
          <span className="block h-px w-16 bg-current" />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-cream-bg/85">
          <a
            href="tel:+441296000000"
            className="hover:text-cream-bg transition-colors tabular"
          >
            01296 000 000
          </a>
          <span className="hidden sm:block text-cream-bg/30">&bull;</span>
          <a
            href="mailto:hello@groveandgrain.co.uk"
            className="hover:text-cream-bg transition-colors"
          >
            hello@groveandgrain.co.uk
          </a>
        </div>
      </div>
    </section>
  );
}

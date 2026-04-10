import LogoMark from "./LogoMark";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen bg-cream-bg flex items-center pt-32 pb-24 overflow-hidden grain"
    >
      {/* Soft radial warmth behind the type */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(99,153,34,0.10), transparent 70%)",
        }}
      />

      {/* Thin corner ornaments to frame the hero */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-28 left-10 w-24 h-24 border-l border-t border-cream-border"
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute bottom-16 right-10 w-24 h-24 border-r border-b border-cream-border"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-16 w-full text-center">
        <LogoMark className="mx-auto h-16 md:h-20 w-auto text-green-deep mb-8" />

        <p className="eyebrow ornament-rule mb-8">
          <span>Est. 2019 &middot; Aylesbury</span>
        </p>

        <h1 className="font-display text-green-deep font-medium leading-[1.02] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5.5rem)]">
          Grown nearby.
          <br />
          Cooked with <span className="italic font-normal">care</span>.
        </h1>

        <div
          aria-hidden="true"
          className="mx-auto my-10 flex items-center justify-center gap-3 text-green-mid/60"
        >
          <span className="block h-px w-14 bg-current" />
          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
            <circle cx="4" cy="4" r="2" fill="currentColor" />
          </svg>
          <span className="block h-px w-14 bg-current" />
        </div>

        <p className="mx-auto max-w-2xl font-sans text-lg md:text-xl text-text-warm leading-relaxed font-light">
          A neighbourhood bistro serving seasonal British produce,
          <br className="hidden sm:block" />
          sourced from farms within thirty miles.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reserve"
            className="group inline-flex items-center justify-center rounded-full bg-green-mid px-8 py-4 text-base font-medium text-cream-bg hover:bg-green-deep transition-all shadow-[0_1px_0_rgba(28,58,15,0.2)] hover:shadow-[0_8px_24px_-8px_rgba(28,58,15,0.4)]"
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
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-green-mid bg-transparent px-8 py-4 text-base font-medium text-green-mid hover:bg-green-mid hover:text-cream-bg transition-colors"
          >
            View the Menu
          </a>
        </div>

        <p className="mt-14 text-[0.72rem] md:text-xs uppercase tracking-[0.22em] text-text-warm/70">
          Open Tuesday to Sunday
          <span className="mx-3 text-green-mid/50">&bull;</span>
          Lunch &amp; Dinner
          <span className="mx-3 text-green-mid/50">&bull;</span>
          Aylesbury Town Centre
        </p>
      </div>
    </section>
  );
}

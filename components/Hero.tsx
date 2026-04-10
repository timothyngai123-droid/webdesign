export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen bg-cream-bg flex items-center pt-28 pb-24"
    >
      <div className="max-w-content mx-auto px-6 md:px-16 w-full text-center">
        <h1 className="font-display text-green-deep font-medium leading-[1.05] tracking-tight text-[40px] sm:text-5xl md:text-6xl lg:text-[72px]">
          Grown nearby.
          <br />
          Cooked with care.
        </h1>

        <p className="mt-8 mx-auto max-w-2xl font-sans text-lg md:text-xl text-text-warm leading-relaxed">
          A neighbourhood bistro serving seasonal British produce, sourced from
          farms within 30 miles.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full bg-green-mid px-8 py-3.5 text-base font-medium text-cream-bg hover:bg-green-deep transition-colors"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-green-mid bg-transparent px-8 py-3.5 text-base font-medium text-green-mid hover:bg-green-mid hover:text-cream-bg transition-colors"
          >
            View the Menu
          </a>
        </div>

        <p className="mt-12 text-xs md:text-sm uppercase tracking-[0.18em] text-text-warm/80">
          Open Tuesday to Sunday &middot; Lunch &amp; Dinner &middot; Aylesbury Town Centre
        </p>
      </div>
    </section>
  );
}

export default function Reserve() {
  return (
    <section id="reserve" className="bg-green-mid py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-16 text-center">
        <h2 className="font-display text-cream-bg text-4xl md:text-[56px] leading-tight">
          Ready to join us?
        </h2>
        <p className="mt-6 mx-auto max-w-xl font-sans text-base md:text-lg text-cream-bg/90 leading-relaxed">
          Bookings available Tuesday to Sunday. We recommend reserving at least
          48 hours ahead.
        </p>

        <div className="mt-10">
          <a
            href="tel:+441296000000"
            className="inline-flex items-center justify-center rounded-full bg-cream-bg px-10 py-4 text-base font-medium text-green-mid hover:bg-cream-border transition-colors"
          >
            Reserve a Table
          </a>
        </div>

        <div className="mt-8 text-sm text-cream-bg/90 space-y-1">
          <p>01296 000 000</p>
          <p>hello@groveandgrain.co.uk</p>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* PLACEHOLDER COPY: replace with real founder story before launch. */}
          <div className="space-y-6">
            <p className="font-sans text-base md:text-lg text-text-warm leading-relaxed">
              Grove &amp; Grain was started by Eleanor and James Whitcombe in
              2019, after years of cooking in London kitchens and a longer time
              still of wishing they could cook with ingredients that hadn&apos;t
              travelled halfway across a continent. They came home to
              Buckinghamshire with a simple idea: serve only what their
              neighbours grow.
            </p>
            <p className="font-sans text-base md:text-lg text-text-warm leading-relaxed">
              Today the bistro works with a small circle of farms, dairies and
              growers — none further than thirty miles from the kitchen door.
              We know the people who raise our lamb, press our rapeseed oil and
              pick our leaves. The menu shifts with the weather and the
              harvest, because that&apos;s how food should be.
            </p>
          </div>

          <div className="bg-cream-bg border border-cream-border rounded-xl p-10 md:p-14">
            <p className="font-display text-green-deep text-3xl md:text-[42px] leading-[1.15]">
              30 miles.
              <br />
              That&apos;s as far as our ingredients travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

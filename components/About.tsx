import LogoMark from "./LogoMark";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* PLACEHOLDER COPY: replace with real founder story before launch. */}
          <div>
            <p className="eyebrow mb-6">
              <span>Our story</span>
            </p>
            <p className="font-sans text-base md:text-lg text-text-warm leading-relaxed drop-cap font-light">
              Grove &amp; Grain was started by Eleanor and James Whitcombe in
              2019, after years of cooking in London kitchens and a longer time
              still of wishing they could cook with ingredients that hadn&apos;t
              travelled halfway across a continent. They came home to
              Buckinghamshire with a simple idea: serve only what their
              neighbours grow.
            </p>
            <p className="mt-6 font-sans text-base md:text-lg text-text-warm leading-relaxed font-light">
              Today the bistro works with a small circle of farms, dairies and
              growers &mdash; none further than thirty miles from the kitchen
              door. We know the people who raise our lamb, press our rapeseed
              oil and pick our leaves. The menu shifts with the weather and the
              harvest, because that&apos;s how food should be.
            </p>
            <p className="mt-8 font-display italic text-green-deep text-lg">
              &mdash; Eleanor &amp; James Whitcombe, founders
            </p>
          </div>

          <div className="relative">
            <div className="relative bg-cream-bg border border-cream-border rounded-2xl p-10 md:p-14 overflow-hidden">
              <LogoMark className="absolute -right-8 -top-8 h-44 w-auto text-green-deep/5" />
              <div className="relative">
                <svg
                  className="text-green-mid/30 mb-4"
                  width="42"
                  height="32"
                  viewBox="0 0 42 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 32V18C0 8 6 2 17 0l2 4c-7 2-10 6-10 12h9v16H0Zm23 0V18C23 8 29 2 40 0l2 4c-7 2-10 6-10 12h9v16H23Z" />
                </svg>
                <p className="font-display text-green-deep text-[clamp(1.75rem,4vw,2.6rem)] leading-[1.1] tracking-[-0.01em]">
                  30 miles.
                  <br />
                  That&apos;s as far as our
                  <br />
                  ingredients <span className="italic font-normal">travel</span>.
                </p>
                <span className="block w-14 h-px bg-green-mid/40 mt-8" />
                <p className="mt-4 eyebrow text-green-mid/80">
                  Our sourcing promise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

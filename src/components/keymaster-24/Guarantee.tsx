"use client";

import FadeUp from "../animations/FadeUp";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import CountUp from "../animations/CountUp";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l5 5L20 7" />
  </svg>
);

const bullets = [
  "On-site in 30 minutes",
  "Fixed pricing, quoted upfront",
  "No damage to your property",
  "Fully insured on every job",
];

export default function Guarantee() {
  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column — big "30" */}
        <FadeUp whenInView className="text-center lg:text-left">
          <div
            className="font-display font-bold text-navy-light tabular leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(8rem, 18vw, 11rem)" }}
          >
            <CountUp target={30} duration={1.1} />
          </div>
          <p className="font-display font-bold text-navy-deep text-3xl md:text-[32px] leading-tight mt-2 tracking-tight">
            minutes or less.
          </p>
        </FadeUp>

        {/* Right column — copy + checklist */}
        <div>
          <FadeUp whenInView delay={0.15}>
            <h2 className="font-display font-bold text-navy-deep text-3xl md:text-[32px] leading-tight tracking-tight mb-6">
              We mean it when we say fast.
            </h2>
            {/* Placeholder copy — replace with live response guarantee details */}
            <p className="font-sans text-lg text-text-muted leading-relaxed mb-5">
              Our engineers are positioned across the region around the clock,
              so the nearest technician is always minutes away from you. If
              you&rsquo;re inside our primary coverage area we&rsquo;ll be at
              your door in thirty minutes or less &mdash; guaranteed, day or
              night.
            </p>
            {/* Placeholder copy — replace with miss-the-window policy */}
            <p className="font-sans text-lg text-text-muted leading-relaxed">
              On the rare occasion we miss that window, the call-out is on us.
              No small print, no excuses. Speed and honesty are how we earn
              every single job.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-8 space-y-3">
            {bullets.map((text) => (
              <StaggerItem
                key={text}
                y={16}
                className="flex items-center gap-3 text-[17px] font-medium text-navy-deep"
              >
                <CheckIcon className="h-5 w-5 text-navy-light shrink-0" />
                <span>{text}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

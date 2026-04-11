"use client";

/**
 * Narrow full-width band that loops a list of trust statements left to
 * right forever. Implemented as a pure CSS keyframe so it can run
 * outside the Framer Motion tree — the `.marquee-track` class handles
 * the infinite loop and pauses on hover. The content is duplicated
 * once so the 50% translate still shows a seamless loop.
 */
const STATEMENTS = [
  "Fixed price quoted upfront",
  "No call-out fee",
  "Same-day emergency cover",
  "Fully insured",
  "Gas Safe registered",
  "Family business",
  "No hidden costs",
  "15 years experience",
];

export default function PromiseBand() {
  return (
    <section
      aria-label="FlowRight Plumbing promises"
      className="bg-fr-surface-1 border-y border-fr-border h-[52px] overflow-hidden"
    >
      <div className="marquee-track h-full items-center">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1 ? true : undefined}
            className="flex items-center h-full shrink-0"
          >
            {STATEMENTS.map((s) => (
              <li
                key={`${dup}-${s}`}
                className="flex items-center font-display text-[14px] font-medium text-fr-blue-pale tracking-[0.04em] px-7 whitespace-nowrap"
              >
                {s}
                <span aria-hidden="true" className="ml-7 text-fr-border">
                  &middot;
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

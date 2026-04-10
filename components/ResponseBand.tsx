"use client";

import FadeUp from "./animations/FadeUp";

/**
 * Tight full-width band that sits directly below the hero. Acts as a
 * stamp of confidence — not a full section, just a single statement.
 */
export default function ResponseBand() {
  return (
    <section className="bg-navy-mid text-white">
      <FadeUp
        whenInView
        className="max-w-content mx-auto px-6 md:px-12 h-20 flex items-center justify-center text-center"
      >
        <p className="font-display font-bold text-xl md:text-2xl tracking-tight">
          Average response time: 28 minutes. Any time of day or night.
        </p>
      </FadeUp>
    </section>
  );
}

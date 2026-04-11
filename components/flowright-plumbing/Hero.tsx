"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../animations/motion-tokens";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number, duration = 0.6, y = 40) => ({
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: EASE_OUT,
    },
  });

  const fade = (delay: number, duration = 0.5) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: EASE_OUT,
    },
  });

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] bg-fr-canvas flex items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      {/* Subtle radial glow behind the type — pressurised, deep water */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 42%, rgba(55,138,221,0.12), transparent 65%)",
        }}
      />

      {/* Hairline vertical accents on the far edges */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fr-border to-transparent"
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fr-border to-transparent"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-12 w-full text-center">
        <motion.p
          {...fade(0, 0.5)}
          className="eyebrow text-fr-muted mb-8"
        >
          PLUMBING &middot; HEATING &middot; BATHROOMS &middot; EMERGENCY CALLOUTS
        </motion.p>

        <motion.h1
          {...fadeUp(0.15, 0.7)}
          className="font-display font-bold text-fr-white leading-[0.96] tracking-tight"
          style={{ fontSize: "clamp(2.875rem, 8.4vw, 5.125rem)" }}
        >
          No leaks.
          <br />
          No excuses.
          <br />
          <span className="strike-draw">No hidden costs.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3, 0.6)}
          className="mt-8 mx-auto max-w-[540px] font-sans text-lg md:text-[20px] text-fr-blue-pale leading-relaxed"
        >
          Family-run plumbers covering the whole region. Fixed prices quoted
          before we start. Boilers, bathrooms, leaks, and everything in
          between.
        </motion.p>

        <motion.div
          {...fadeUp(0.45, 0.5)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#cta"
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.03, backgroundColor: "#185FA5" }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center justify-center rounded-full bg-fr-blue-core px-8 py-[18px] text-base font-semibold text-fr-white shadow-[0_10px_32px_-10px_rgba(55,138,221,0.6)]"
          >
            Get a Fixed Quote
          </motion.a>
          <motion.a
            href="tel:+441234567890"
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.03, backgroundColor: "#162333" }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center justify-center rounded-full border border-fr-border bg-transparent px-8 py-[18px] text-base font-semibold text-fr-blue-pale"
          >
            Call Us Now
          </motion.a>
        </motion.div>

        <motion.div
          {...fade(0.65, 0.5)}
          className="mt-14 mx-auto max-w-[620px]"
        >
          <div className="h-px w-full bg-fr-border mb-5" />
          <p className="text-[13px] text-fr-muted flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2">
              <span className="fr-success-dot" aria-hidden="true" />
              Fixed price, always
            </span>
            <span className="text-fr-border">&middot;</span>
            <span>Same-day availability</span>
            <span className="text-fr-border">&middot;</span>
            <span>Family-run since 2009</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

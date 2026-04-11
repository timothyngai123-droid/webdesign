"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "../animations/motion-tokens";

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="cta"
      ref={ref}
      className="relative bg-fr-surface-1 border-t border-fr-border py-24 md:py-32 overflow-hidden"
    >
      {/* Curtain reveal — scales from top on scroll entry */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-fr-surface-1 origin-top"
        initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: EASE_OUT }}
      />
      {/* Subtle highlight glow behind heading */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(55,138,221,0.12), transparent 70%)",
        }}
      />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : 0.2,
          ease: EASE_OUT,
        }}
        className="relative max-w-content mx-auto px-6 md:px-12 text-center"
      >
        <h2
          className="font-display font-bold text-fr-white leading-[1.02] tracking-tight mx-auto max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 6.4vw, 4rem)" }}
        >
          Ready to fix it properly?
        </h2>

        <p className="mt-6 mx-auto max-w-xl font-sans text-lg md:text-[19px] text-fr-blue-pale leading-relaxed">
          Tell us what you need and we&rsquo;ll send you a fixed price. No
          obligation, no call-out fee.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="mailto:hello@flowrightplumbing.co.uk"
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.04, backgroundColor: "#185FA5" }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center justify-center rounded-full bg-fr-blue-core px-10 py-[18px] text-base font-semibold text-fr-white shadow-[0_10px_32px_-10px_rgba(55,138,221,0.6)]"
          >
            Get a Fixed Quote
          </motion.a>
          <motion.a
            href="tel:+441234567890"
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.04, backgroundColor: "#162333" }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center justify-center rounded-full border border-fr-border bg-transparent px-10 py-[18px] text-base font-semibold text-fr-blue-pale"
          >
            Call Us Now
          </motion.a>
        </div>

        <p className="mt-8 text-sm text-fr-muted">
          Or email us at{" "}
          <a
            href="mailto:hello@flowrightplumbing.co.uk"
            className="text-fr-muted hover:text-fr-blue-core hover:underline underline-offset-4 transition-colors"
          >
            hello@flowrightplumbing.co.uk
          </a>
        </p>
      </motion.div>
    </section>
  );
}

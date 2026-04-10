"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "../animations/motion-tokens";

export default function Reserve() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="reserve"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Curtain reveal — scales from top to full */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-green-mid origin-top"
        initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: EASE_OUT }}
      />

      {/* Soft radial highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(250,246,237,0.12), transparent 70%)",
        }}
      />

      {/* Decorative oversized mark watermarks */}
      <LogoMark
        className="absolute -left-20 -bottom-16 h-80 w-auto text-cream-bg/[0.04] hidden md:block"
        strokeWidth={3}
      />
      <LogoMark
        className="absolute -right-16 -top-16 h-64 w-auto text-cream-bg/[0.04] hidden md:block"
        strokeWidth={3}
      />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : 0.9,
          ease: EASE_OUT,
        }}
        className="relative max-w-content mx-auto px-6 md:px-16 text-center"
      >
        <LogoMark className="mx-auto h-14 w-auto text-cream-bg/80 mb-8" />

        <p className="eyebrow text-cream-bg/70 mb-5">
          <span>Bookings</span>
        </p>

        <h2 className="font-display text-cream-bg text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] tracking-[-0.015em]">
          Ready to <span className="italic font-normal">join us?</span>
        </h2>

        <p className="mt-6 mx-auto max-w-xl font-sans text-base md:text-lg text-cream-bg/80 leading-relaxed font-light">
          Bookings available Tuesday to Sunday. We recommend reserving at least
          48 hours ahead.
        </p>

        <div className="mt-10">
          <motion.a
            href="tel:+441296000000"
            initial={false}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.04,
                    backgroundColor: "#FAF6ED",
                    boxShadow: "0 0 0 3px rgba(99, 153, 34, 0.2)",
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="group inline-flex items-center justify-center rounded-full bg-cream-bg px-10 py-4 text-base font-medium text-green-mid shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
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
          </motion.a>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-12 flex items-center justify-center gap-3 text-cream-bg/30"
        >
          <span className="block h-px w-16 bg-current" />
          <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx="3" cy="3" r="1.5" fill="currentColor" />
          </svg>
          <span className="block h-px w-16 bg-current" />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-cream-bg/85">
          <a
            href="tel:+441296000000"
            className="hover:text-cream-bg transition-colors tabular"
          >
            01296 000 000
          </a>
          <span className="hidden sm:block text-cream-bg/30">&bull;</span>
          <a
            href="mailto:hello@groveandgrain.co.uk"
            className="hover:text-cream-bg transition-colors"
          >
            hello@groveandgrain.co.uk
          </a>
        </div>
      </motion.div>
    </section>
  );
}

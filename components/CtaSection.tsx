"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "./animations/motion-tokens";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-navy-deep"
    >
      {/* Curtain reveal — scales from top to full navy-light */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-navy-light origin-top"
        initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: EASE_OUT }}
      />

      {/* Subtle highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.12), transparent 70%)",
        }}
      />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : 0.9,
          ease: EASE_OUT,
        }}
        className="relative max-w-content mx-auto px-6 md:px-12 text-center"
      >
        <h2 className="font-display font-bold text-white text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.05] tracking-tight">
          Don&rsquo;t wait outside in the cold.
        </h2>

        <p className="mt-6 mx-auto max-w-xl font-sans text-lg md:text-xl text-white/90 leading-relaxed">
          Call us now and we&rsquo;ll be with you in 30 minutes.
        </p>

        <div className="mt-10">
          <motion.a
            href="tel:+448000000024"
            initial={false}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.04,
                    boxShadow: "0 0 0 4px rgba(255,255,255,0.2)",
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-navy-mid shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
          >
            <PhoneIcon className="h-[18px] w-[18px]" />
            Call Now
          </motion.a>
        </div>

        <p className="mt-8 text-sm md:text-base text-white/90">
          Or{" "}
          <a
            href="tel:+448000000024"
            className="underline-offset-4 hover:underline text-white font-medium"
          >
            request a callback
          </a>{" "}
          and we&rsquo;ll call you within 5 minutes.
        </p>
      </motion.div>
    </section>
  );
}

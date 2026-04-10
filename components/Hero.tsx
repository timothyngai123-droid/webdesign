"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "./animations/motion-tokens";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
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
      className="relative min-h-screen bg-navy-deep flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle radial glow behind the type for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 40%, rgba(55,138,221,0.18), transparent 65%)",
        }}
      />

      {/* Vertical accent line on the far left */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-navy-light/20 to-transparent"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <motion.p
            {...fade(0, 0.5)}
            className="eyebrow text-navy-light mb-8 flex items-center gap-3"
          >
            <span className="pulse-dot" aria-hidden="true" />
            <span>Available Now &middot; 24 Hours &middot; 7 Days</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.15, 0.7)}
            className="font-display font-bold text-white leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5rem)]"
          >
            Locked out?
            <br />
            We&rsquo;re already on our way.
          </motion.h1>

          <motion.p
            {...fadeUp(0.3, 0.6)}
            className="mt-8 max-w-[560px] font-sans text-lg md:text-xl text-silver leading-relaxed"
          >
            Emergency locksmith covering the whole region. On your doorstep in{" "}
            <span className="underline-draw text-white font-medium">
              30 minutes
            </span>{" "}
            or less. Fully insured, DBS checked, no call-out fee.
          </motion.p>

          <motion.div
            {...fadeUp(0.45, 0.5)}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <motion.a
              href="tel:+448000000024"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-navy-light px-8 py-[18px] text-base font-semibold text-white hover:bg-[#2a74c2] transition-colors shadow-[0_8px_24px_-8px_rgba(55,138,221,0.6)]"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </motion.a>
            <motion.a
              href="#cta"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-navy-deep transition-colors"
            >
              Get a Quote
            </motion.a>
          </motion.div>

          <motion.div
            {...fade(0.65, 0.5)}
            className="mt-16 max-w-[620px]"
          >
            <div className="h-px w-full bg-silver/20 mb-5" />
            <p className="text-[13px] text-silver flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>30-min response</span>
              <span className="text-silver/50">&middot;</span>
              <span>No call-out fee</span>
              <span className="text-silver/50">&middot;</span>
              <span>Fully insured</span>
              <span className="text-silver/50">&middot;</span>
              <span>DBS checked</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

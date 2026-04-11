"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeUp from "../animations/FadeUp";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import { EASE_OUT } from "../animations/motion-tokens";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l5 5L20 7" />
  </svg>
);

const CHECKLIST = [
  "Price agreed before work begins",
  "No call-out fee, ever",
  "No charge for overruns on our side",
  "Fully itemised invoice on completion",
];

const WORD = "Fixed.".split("");

export default function Guarantee() {
  const reduceMotion = useReducedMotion();

  const letterVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : i * 0.04,
        ease: EASE_OUT,
      },
    }),
  };

  return (
    <section
      id="guarantee"
      className="relative bg-fr-surface-1 py-24 md:py-[120px]"
    >
      <div className="max-w-content mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column — "Fixed." split-text */}
        <div className="lg:col-span-5 relative">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-display font-bold text-fr-blue-core leading-[0.85] tracking-tight flex"
            style={{ fontSize: "clamp(4.5rem, 14vw, 7.5rem)" }}
            aria-label="Fixed."
          >
            {WORD.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                custom={i}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00a0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <FadeUp whenInView delay={0.3}>
            <p className="font-display font-bold text-fr-white text-[26px] md:text-[28px] leading-tight tracking-tight mt-4 max-w-md">
              That&rsquo;s the price you pay.
            </p>
          </FadeUp>
        </div>

        {/* Vertical divider — grows top → bottom on scroll entry */}
        <div className="hidden lg:flex lg:col-span-1 justify-center relative">
          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: EASE_OUT }}
            className="block w-[2px] bg-fr-blue-core origin-top"
            style={{ height: "100%", minHeight: "340px" }}
          />
        </div>

        {/* Right column — body copy + checklist */}
        <div className="lg:col-span-6">
          <FadeUp whenInView delay={0.1}>
            <h3 className="font-display font-bold text-fr-white text-[22px] md:text-[24px] leading-tight tracking-tight">
              We quote before we start. We charge what we quote.
            </h3>
            {/* Placeholder copy — replace with live fixed-price guarantee copy.
                Should cover: the guarantee itself, what happens if a job
                takes longer than expected, and why they don't charge call-out fees. */}
            <p className="mt-6 font-sans text-[17px] text-fr-blue-pale leading-relaxed">
              Every job starts with a visit. We look at what&rsquo;s needed,
              talk you through the options, and give you a single fixed price
              in writing before any work begins. No estimates. No
              &ldquo;starting from&rdquo; prices. The number we give you is
              the number on your invoice.
            </p>
            <p className="mt-4 font-sans text-[17px] text-fr-blue-pale leading-relaxed">
              If a job takes longer than we expected, that&rsquo;s our
              problem, not yours. We don&rsquo;t charge call-out fees because
              showing up is the minimum &mdash; not something worth billing
              you for.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-10 space-y-3">
            {CHECKLIST.map((text) => (
              <StaggerItem
                key={text}
                y={16}
                className="flex items-center gap-3 text-[16px] md:text-[17px] font-medium text-fr-white"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fr-success/15 text-fr-success shrink-0">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>{text}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

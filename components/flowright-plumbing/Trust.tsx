"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeUp from "../animations/FadeUp";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import CountUp from "../animations/CountUp";
import { EASE_OUT } from "../animations/motion-tokens";

type Card = {
  /** Rendered in the big number slot. */
  stat: React.ReactNode;
  label: string;
  body: string;
};

const CARDS: Card[] = [
  {
    stat: (
      <>
        <CountUp target={15} />+
      </>
    ),
    label: "Years in business",
    body: "Family-run since 2009. Still the same team, still the same standards.",
  },
  {
    stat: "Gas Safe",
    label: "Registered engineers",
    body: "Every boiler job is carried out by a Gas Safe registered engineer. No exceptions.",
  },
  {
    stat: (
      <>
        &pound;<CountUp target={2} />M
      </>
    ),
    label: "Public liability",
    body: "Fully insured on every job. Your property is protected from the moment we arrive.",
  },
  {
    stat: "Same day",
    label: "Emergency response",
    body: "Call before noon and we will be with you the same day in most cases.",
  },
];

export default function Trust() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-fr-canvas py-24 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <FadeUp whenInView className="max-w-2xl mb-14 md:mb-16">
          <p className="eyebrow text-fr-muted mb-5">WHY FLOWRIGHT</p>
          <h2 className="font-display font-bold text-fr-white text-4xl md:text-[52px] leading-[1.05] tracking-tight">
            The people you&rsquo;d want in your house.
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {CARDS.map((c, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        backgroundColor: "#162333",
                        borderColor: "#185FA5",
                        boxShadow: "0 16px 48px rgba(55, 138, 221, 0.08)",
                      }
                }
                transition={{ duration: 0.25, ease: EASE_OUT }}
                className="relative rounded-xl border border-fr-border bg-fr-surface-1 p-8 h-full"
              >
                <div
                  className="font-display font-bold text-fr-blue-core tabular leading-none tracking-tight"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                >
                  {c.stat}
                </div>
                <h3 className="mt-5 font-display font-bold text-[18px] text-fr-white leading-tight tracking-tight">
                  {c.label}
                </h3>
                <p className="mt-3 font-sans text-[15px] text-fr-muted leading-relaxed">
                  {c.body}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

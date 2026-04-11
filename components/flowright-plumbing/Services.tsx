"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeUp from "../animations/FadeUp";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import { EASE_OUT } from "../animations/motion-tokens";

type Service = {
  number: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Boiler installation & repair",
    body: "Gas Safe registered engineers. New installs, breakdowns, and annual servicing on all major brands.",
  },
  {
    number: "02",
    title: "Emergency plumbing",
    body: "Burst pipes, leaks, and flooding dealt with fast. Same-day response, no call-out fee.",
  },
  {
    number: "03",
    title: "Bathroom fitting",
    body: "Full bathroom design and installation. Tiling, sanitary ware, and wet rooms from start to finish.",
  },
  {
    number: "04",
    title: "Central heating",
    body: "Full system installs, power flushes, radiator replacements, and underfloor heating.",
  },
  {
    number: "05",
    title: "Drain unblocking",
    body: "CCTV drain surveys and high-pressure jetting. We find the problem and fix it the same day.",
  },
  {
    number: "06",
    title: "Leak detection",
    body: "Non-invasive leak detection. We find concealed leaks without unnecessary damage to your property.",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-fr-canvas py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <FadeUp whenInView className="mb-16">
          <p className="eyebrow text-fr-muted mb-5">WHAT WE DO</p>
          <h2 className="font-display font-bold text-fr-white text-4xl md:text-[52px] leading-[1.05] tracking-tight max-w-3xl">
            Every pipe. Every boiler. Every time.
          </h2>
        </FadeUp>

        <StaggerContainer className="relative">
          {/* Top border line — drawn in left-to-right on first stagger */}
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              ease: EASE_OUT,
            }}
            className="h-px bg-fr-border origin-left"
          />

          {services.map((s) => (
            <StaggerItem key={s.number} y={20}>
              <motion.a
                href="#cta"
                initial="rest"
                whileHover={reduceMotion ? undefined : "hover"}
                animate="rest"
                className="group block"
              >
                <motion.div
                  variants={{
                    rest: { backgroundColor: "rgba(15,25,35,0)" },
                    hover: { backgroundColor: "rgba(15,25,35,1)" },
                  }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center py-7 md:py-8 px-4 md:px-6 -mx-4 md:-mx-6"
                >
                  <motion.span
                    variants={{
                      rest: { color: "#6B8099" },
                      hover: { color: "#378ADD" },
                    }}
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                    className="font-display font-bold text-[44px] md:text-[56px] leading-none tabular md:col-span-2"
                  >
                    {s.number}
                  </motion.span>
                  <h3 className="font-display font-bold text-fr-white text-[22px] md:text-[26px] leading-tight tracking-tight md:col-span-5">
                    {s.title}
                  </h3>
                  <p className="font-sans text-[15px] md:text-base text-fr-muted leading-relaxed md:col-span-5 md:text-right">
                    {s.body}
                  </p>
                </motion.div>
              </motion.a>
              {/* Per-row bottom border — each draws in on stagger */}
              <motion.div
                aria-hidden="true"
                initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  ease: EASE_OUT,
                }}
                className="h-px bg-fr-border origin-left"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

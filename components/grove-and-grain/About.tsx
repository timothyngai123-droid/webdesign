"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import LogoMark from "./LogoMark";
import FadeUp from "@/components/animations/FadeUp";
import CountUp from "@/components/animations/CountUp";
import { EASE_OUT } from "@/components/animations/motion-tokens";

export default function About() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const inView = useInView(quoteRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* PLACEHOLDER COPY: replace with real founder story before launch. */}
          <FadeUp whenInView>
            <p className="eyebrow mb-6">
              <span>Our story</span>
            </p>
            <p className="font-sans text-base md:text-lg text-text-warm leading-relaxed drop-cap font-light">
              Grove &amp; Grain was started by Eleanor and James Whitcombe in
              2019, after years of cooking in London kitchens and a longer time
              still of wishing they could cook with ingredients that hadn&apos;t
              travelled halfway across a continent. They came home to
              Buckinghamshire with a simple idea: serve only what their
              neighbours grow.
            </p>
            <p className="mt-6 font-sans text-base md:text-lg text-text-warm leading-relaxed font-light">
              Today the bistro works with a small circle of farms, dairies and
              growers &mdash; none further than thirty miles from the kitchen
              door. We know the people who raise our lamb, press our rapeseed
              oil and pick our leaves. The menu shifts with the weather and the
              harvest, because that&apos;s how food should be.
            </p>
            <p className="mt-8 font-display italic text-green-deep text-lg">
              &mdash; Eleanor &amp; James Whitcombe, founders
            </p>
          </FadeUp>

          <FadeUp whenInView delay={0.15}>
            <div
              ref={quoteRef}
              className="relative bg-cream-bg border border-cream-border rounded-2xl p-10 md:p-14 overflow-hidden"
            >
              {/* Growing left border */}
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-0 w-[3px] bg-green-light origin-top"
                initial={reduceMotion ? { height: "100%" } : { height: 0 }}
                animate={inView ? { height: "100%" } : { height: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease: EASE_OUT,
                }}
              />
              <LogoMark className="absolute -right-8 -top-8 h-44 w-auto text-green-deep/5" />
              <div className="relative">
                <svg
                  className="text-green-mid/30 mb-4"
                  width="42"
                  height="32"
                  viewBox="0 0 42 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 32V18C0 8 6 2 17 0l2 4c-7 2-10 6-10 12h9v16H0Zm23 0V18C23 8 29 2 40 0l2 4c-7 2-10 6-10 12h9v16H23Z" />
                </svg>
                <p className="font-display text-green-deep text-[clamp(1.75rem,4vw,2.6rem)] leading-[1.1] tracking-[-0.01em]">
                  <CountUp target={30} duration={1.2} /> miles.
                  <br />
                  That&apos;s as far as our
                  <br />
                  ingredients{" "}
                  <span className="italic font-normal">travel</span>.
                </p>
                <span className="block w-14 h-px bg-green-mid/40 mt-8" />
                <p className="mt-4 eyebrow text-green-mid/80">
                  Our sourcing promise
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Fixed 2px progress bar that sits above the nav. Driven by
 * `useScroll` and smoothed by a `useSpring` for a slightly elastic,
 * organic feel.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-navy-light origin-left z-[9999] pointer-events-none"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
    />
  );
}

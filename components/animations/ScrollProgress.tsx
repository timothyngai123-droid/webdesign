"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

type ScrollProgressProps = {
  /** Bar colour. Defaults to a neutral light grey. */
  color?: string;
  /** Bar height in pixels. */
  height?: number;
};

/**
 * Fixed progress bar that sits above the page content. Driven by
 * `useScroll` and smoothed by a `useSpring` for a slightly elastic
 * feel. Honours `prefers-reduced-motion`. Shared between brand pages —
 * pass a `color` to theme it per brand.
 */
export default function ScrollProgress({
  color = "#B4B2A9",
  height = 2,
}: ScrollProgressProps) {
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
      className="fixed top-0 left-0 right-0 origin-left z-[9999] pointer-events-none"
      style={{
        height,
        backgroundColor: color,
        scaleX: reduceMotion ? scrollYProgress : scaleX,
      }}
    />
  );
}

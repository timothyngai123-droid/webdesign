"use client";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type ScrollProgressProps = {
  /** Tailwind class (or any class) controlling the bar colour. */
  className?: string;
  /** Height in px. Defaults to 2. */
  height?: number;
  /** Stack order. Defaults to 9999. */
  zIndex?: number;
};

/**
 * Brand-agnostic scroll progress bar. Consumers pass their own colour
 * via `className`. Uses `useScroll` + a spring for a slightly elastic
 * feel, and respects `prefers-reduced-motion`.
 */
export default function ScrollProgress({
  className = "bg-black",
  height = 2,
  zIndex = 9999,
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
      className={`fixed top-0 left-0 right-0 origin-left pointer-events-none ${className}`}
      style={{
        height,
        zIndex,
        scaleX: reduceMotion ? scrollYProgress : scaleX,
      }}
    />
  );
}

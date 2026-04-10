"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { DURATION, EASE_OUT } from "./motion-tokens";

type FadeUpProps = HTMLMotionProps<"div"> & {
  delay?: number;
  duration?: number;
  y?: number;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3" | "li";
  /** When true, animation triggers on scroll rather than on mount. */
  whenInView?: boolean;
};

/**
 * Wraps children with the standard Grove & Grain fade-up entrance:
 * opacity 0 → 1, y 24 → 0, decelerate easing. Respects
 * `prefers-reduced-motion` — motion is skipped, final state is used.
 */
export default function FadeUp({
  children,
  delay = 0,
  duration = DURATION.enter,
  y = 24,
  whenInView = false,
  ...rest
}: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const visible = {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: EASE_OUT,
    },
  };

  const viewportProps = whenInView
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.div
      variants={{ hidden, visible }}
      {...viewportProps}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Shared motion tokens for Grove & Grain.
 * Every animation in the site imports from this file so easing, duration
 * and stagger values stay consistent.
 */
import type { Easing } from "framer-motion";

// Default (cubic-bezier equivalent of CSS `ease`)
export const EASE_DEFAULT: Easing = [0.25, 0.1, 0.25, 1];
// Decelerate curve used for every entrance
export const EASE_OUT: Easing = [0.0, 0.0, 0.2, 1];

export const DURATION = {
  enter: 0.6,
  exit: 0.3,
  micro: 0.2,
} as const;

export const STAGGER = 0.12;

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.enter,
      ease: EASE_OUT,
    },
  },
};

export const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER,
      delayChildren: 0.05,
    },
  },
};

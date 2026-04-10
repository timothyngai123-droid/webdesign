"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { DURATION, EASE_OUT } from "./motion-tokens";

type StaggerItemProps = HTMLMotionProps<"div"> & {
  y?: number;
};

/**
 * Child of `StaggerContainer`. Uses `hidden`/`visible` variants so it
 * picks up its delay from the parent's `staggerChildren` transition.
 */
export default function StaggerItem({
  children,
  y = 32,
  ...rest
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const visible = {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : DURATION.enter,
      ease: EASE_OUT,
    },
  };

  return (
    <motion.div variants={{ hidden, visible }} {...rest}>
      {children}
    </motion.div>
  );
}

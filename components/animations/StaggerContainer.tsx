"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { STAGGER } from "./motion-tokens";

type StaggerContainerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delayChildren?: number;
};

/**
 * Container that staggers its `FadeUp` (or other variant-aware) children
 * on scroll entry. Children must use `variants` named `hidden`/`visible`
 * — `StaggerItem` below satisfies this contract.
 */
export default function StaggerContainer({
  children,
  stagger = STAGGER,
  delayChildren = 0.05,
  ...rest
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren: reduceMotion ? 0 : delayChildren,
          },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

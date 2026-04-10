"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { STAGGER, DURATION, EASE_OUT } from "./motion-tokens";

type StaggerContainerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delayChildren?: number;
};

/**
 * Container that staggers its `StaggerItem` children on scroll entry.
 * Children should use the `hidden` / `visible` variants — the exported
 * `StaggerItem` below satisfies this contract.
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

type StaggerItemProps = HTMLMotionProps<"div"> & {
  y?: number;
};

/**
 * Child of `StaggerContainer`. Uses `hidden`/`visible` variants so it
 * picks up its delay from the parent's `staggerChildren` transition.
 */
export function StaggerItem({ children, y = 32, ...rest }: StaggerItemProps) {
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

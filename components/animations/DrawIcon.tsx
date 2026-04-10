"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "./motion-tokens";

type DrawIconProps = {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
};

/**
 * Animates the `strokeDashoffset` of any `<path>` children from full
 * length (invisible) to 0 (fully drawn) when the icon scrolls into
 * view. Each child path is wrapped in a `motion.path`, so pass plain
 * `<path />` elements as children. Respects reduced-motion by rendering
 * fully drawn paths immediately.
 */
export default function DrawIcon({
  children,
  className,
  width = 44,
  height = 44,
  viewBox = "0 0 44 44",
  strokeColor = "currentColor",
  strokeWidth = 1.25,
  duration = 0.8,
  delay = 0,
}: DrawIconProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const pathVariants: Variants = {
    hidden: { pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: reduceMotion ? 0 : duration, ease: EASE_OUT, delay },
        opacity: { duration: 0.01, delay },
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-hidden="true"
    >
      {Array.isArray(children)
        ? children.map((child, i) => {
            if (typeof child !== "object" || child === null) return child;
            const element = child as React.ReactElement<{ d?: string }>;
            return (
              <motion.path
                key={i}
                d={element.props.d}
                variants={pathVariants}
              />
            );
          })
        : (() => {
            const element = children as React.ReactElement<{ d?: string }>;
            return <motion.path d={element.props.d} variants={pathVariants} />;
          })()}
    </motion.svg>
  );
}

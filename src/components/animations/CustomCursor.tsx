"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

type CustomCursorProps = {
  /** Tailwind class (or any class) controlling the dot colour. */
  className?: string;
  /** Resting diameter in px. Defaults to 10. */
  size?: number;
  /** Diameter when hovering an interactive element. Defaults to 26. */
  hoverSize?: number;
  /** Opacity applied to the dot when hovering. Defaults to 0.4. */
  hoverOpacity?: number;
};

/**
 * Brand-agnostic custom cursor. Consumers pass the dot colour via
 * `className`. Only renders on devices with `pointer: fine`, and is
 * a no-op when `prefers-reduced-motion` is set. Hides the native
 * cursor by toggling a `custom-cursor-active` class on `body`.
 */
export default function CustomCursor({
  className = "bg-black",
  size = 10,
  hoverSize = 26,
  hoverOpacity = 0.4,
}: CustomCursorProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 400, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (reduceMotion) return;
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], [data-cursor="magnetic"]'
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [x, y, reduceMotion]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        className={`rounded-full ${className}`}
        animate={{
          width: hovering ? hoverSize : size,
          height: hovering ? hoverSize : size,
          opacity: hovering ? hoverOpacity : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
    </motion.div>
  );
}

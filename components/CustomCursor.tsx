"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A small green dot that follows the cursor on fine-pointer devices,
 * with a slight spring lag and a "magnetic" expand on interactive
 * elements (anything with `[data-cursor="magnetic"]`, or buttons/links).
 *
 * - Hidden entirely on touch devices (no `pointer: fine`)
 * - Hidden when `prefers-reduced-motion: reduce`
 * - Hides the native cursor via a `body.custom-cursor-active` class
 */
export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 150, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 20, mass: 0.4 });

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
        className="rounded-full bg-green-mid"
        animate={{
          width: hovering ? 26 : 10,
          height: hovering ? 26 : 10,
          opacity: hovering ? 0.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
    </motion.div>
  );
}

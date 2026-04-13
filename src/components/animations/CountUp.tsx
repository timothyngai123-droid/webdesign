"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  target: number;
  duration?: number;
  className?: string;
};

/**
 * Counts from 0 → `target` when scrolled into view, using an ease-out
 * curve driven by requestAnimationFrame. Honours reduced-motion by
 * rendering the final number immediately.
 */
export default function CountUp({
  target,
  duration = 1.2,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setValue(target);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const ms = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / ms);
      // ease-out cubic — fast at start, slow at finish
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration, reduceMotion]);

  return (
    <span ref={ref} className={className} aria-label={String(target)}>
      {value}
    </span>
  );
}

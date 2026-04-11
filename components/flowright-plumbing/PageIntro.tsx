"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_OUT } from "../animations/motion-tokens";
import LogoMark from "./LogoMark";

const STORAGE_KEY = "fr-intro-played";

/**
 * Full-screen canvas curtain that lifts on first visit only. Tracks
 * state in `sessionStorage` so subsequent navigations skip the intro.
 * Honours reduced-motion by rendering nothing.
 */
export default function PageIntro() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* sessionStorage unavailable — still play once */
    }
    setShow(true);
    const t = window.setTimeout(() => setLifted(true), 300);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  if (!show) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[9998] bg-fr-canvas flex items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: lifted ? "-100%" : 0 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      onAnimationComplete={() => {
        if (lifted) setShow(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: lifted ? 0 : 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="text-fr-blue-core"
      >
        <LogoMark markOnly className="h-14 w-auto" strokeWidth={4} />
      </motion.div>
    </motion.div>
  );
}

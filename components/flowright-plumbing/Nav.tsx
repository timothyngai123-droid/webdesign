"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_OUT } from "../animations/motion-tokens";

export default function Nav() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "text-sm font-medium text-fr-white transition-opacity duration-300";

  return (
    <motion.nav
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.1, ease: EASE_OUT }}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "#0A0F14" : "rgba(10,15,20,0)",
        borderBottom: `1px solid ${scrolled ? "#1E3048" : "rgba(30,48,72,0)"}`,
      }}
    >
      <div
        className="max-w-content mx-auto px-6 md:px-12 h-20 flex items-center justify-between"
        style={{ opacity: scrolled ? 1 : 0.9 }}
      >
        <a
          href="#top"
          aria-label="FlowRight Plumbing — home"
          className="flex items-center text-fr-white"
        >
          {/* Logo file lives at /public/flowright-plumbing/logo.svg. Swap in
              a real logo.png at the same path if preferred. */}
          <img
            src="/flowright-plumbing/logo.svg"
            alt="FlowRight Plumbing"
            width={180}
            height={44}
            className="h-10 w-auto"
          />
        </a>

        <div className="flex items-center gap-5 md:gap-8">
          <a href="#services" className={`${linkClass} hidden sm:inline`}>
            Services
          </a>
          <a href="#about" className={`${linkClass} hidden sm:inline`}>
            About
          </a>
          <a href="#guarantee" className={`${linkClass} hidden md:inline`}>
            Guarantee
          </a>
          <motion.a
            href="#cta"
            whileHover={
              reduceMotion
                ? undefined
                : { scale: 1.02, backgroundColor: "#185FA5" }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center gap-2 rounded-full bg-fr-blue-core px-5 py-2.5 text-sm font-semibold text-fr-white shadow-[0_6px_20px_-8px_rgba(55,138,221,0.65)]"
          >
            Get a Fixed Quote
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

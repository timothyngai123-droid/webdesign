"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "@/components/animations/motion-tokens";

export default function Nav() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.1, ease: EASE_OUT }}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "#FAF6ED" : "rgba(250,246,237,0)",
        borderBottom: `1px solid ${scrolled ? "#D9CDB4" : "rgba(217,205,180,0)"}`,
      }}
    >
      <div className="max-w-content mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Grove & Grain — home"
        >
          <LogoMark className="h-9 w-auto text-green-deep transition-transform duration-300 group-hover:-rotate-3" />
          <span className="font-display text-xl md:text-[22px] text-green-deep tracking-[0.01em] leading-none">
            Grove <span className="italic font-normal">&amp;</span> Grain
          </span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <a
            href="#menu"
            className="hidden sm:inline text-sm font-medium text-green-deep hover:text-green-mid transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-green-mid after:transition-all hover:after:w-full"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hidden sm:inline text-sm font-medium text-green-deep hover:text-green-mid transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-green-mid after:transition-all hover:after:w-full"
          >
            About
          </a>
          <motion.a
            href="#reserve"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center rounded-full bg-green-mid px-5 py-2.5 text-sm font-medium text-cream-bg hover:bg-green-deep transition-colors shadow-[0_1px_0_rgba(28,58,15,0.15)]"
          >
            Reserve a Table
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

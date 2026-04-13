"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "../animations/motion-tokens";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Nav() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        backgroundColor: scrolled ? "#0C2340" : "rgba(12,35,64,0)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)"}`,
      }}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group text-white"
          aria-label="KeyMaster 24 — home"
        >
          <LogoMark
            markOnly
            strokeWidth={9}
            className="h-8 w-auto transition-transform duration-300 group-hover:rotate-[-4deg]"
          />
          <span className="font-display font-bold text-[19px] tracking-tight leading-none">
            KEYMASTER <span className="text-navy-light">24</span>
          </span>
        </a>

        <div className="flex items-center gap-5 md:gap-8">
          <a
            href="#services"
            className="hidden sm:inline text-sm font-medium text-white hover:text-navy-light transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="hidden sm:inline text-sm font-medium text-white hover:text-navy-light transition-colors"
          >
            About
          </a>
          <a
            href="#coverage"
            className="hidden md:inline text-sm font-medium text-white hover:text-navy-light transition-colors"
          >
            Coverage Area
          </a>
          <motion.a
            href="tel:+448000000024"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-[0_1px_0_rgba(0,0,0,0.15)]"
            style={{
              backgroundColor: scrolled ? "#378ADD" : "#0C447C",
            }}
          >
            <span className="pulse-dot" aria-hidden="true" />
            <PhoneIcon className="h-4 w-4" />
            <span>Call Now — 24/7</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

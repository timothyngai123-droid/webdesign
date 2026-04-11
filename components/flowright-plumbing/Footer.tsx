"use client";

import { motion, useReducedMotion } from "framer-motion";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "../animations/motion-tokens";

const linkClass =
  "text-fr-muted hover:text-fr-blue-pale transition-colors duration-150";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE_OUT }}
      className="bg-fr-footer border-t border-fr-border"
    >
      <div className="max-w-content mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <div>
            <div className="text-fr-blue-pale">
              <LogoMark className="h-11 w-auto" />
            </div>
            <p className="mt-5 text-sm text-fr-muted leading-relaxed max-w-xs">
              Family-run plumbers covering the whole region. Boilers,
              bathrooms, leaks, and everything in between.
            </p>
          </div>

          <div>
            <p className="eyebrow text-fr-muted mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className={linkClass}>
                  Boiler installation &amp; repair
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Emergency plumbing
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Bathroom fitting
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Central heating
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Drain unblocking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-fr-muted mb-5">Contact</p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+441234567890"
                className={`${linkClass} block tabular`}
              >
                01234 567 890
              </a>
              <a
                href="mailto:hello@flowrightplumbing.co.uk"
                className={`${linkClass} block`}
              >
                hello@flowrightplumbing.co.uk
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.22em] text-fr-muted mb-2">
                Gas Safe Registration
              </p>
              <p className="font-display font-bold text-fr-blue-pale text-xl tabular">
                No. 000000
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-fr-border">
          <p className="text-xs text-fr-muted">
            &copy; 2025 FlowRight Plumbing. All rights reserved. Gas Safe
            registered. Fully insured.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

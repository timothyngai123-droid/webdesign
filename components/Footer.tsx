"use client";

import { motion, useReducedMotion } from "framer-motion";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "./animations/motion-tokens";

const linkClass =
  "relative text-silver hover:text-white transition-colors duration-150";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE_OUT }}
      className="bg-navy-deep border-t border-white/10"
    >
      <div className="max-w-content mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <div>
            <div className="flex items-center gap-3 text-white">
              <LogoMark
                markOnly
                strokeWidth={9}
                className="h-9 w-auto"
              />
              <span className="font-display font-bold text-[20px] tracking-tight leading-none">
                KEYMASTER <span className="text-navy-light">24</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-silver leading-relaxed max-w-xs">
              24/7 emergency locksmith covering the whole region. Residential,
              commercial, and automotive.
            </p>
          </div>

          <div>
            <p className="eyebrow text-silver/70 mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className={linkClass}>
                  Home lockouts
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Lock replacement
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Commercial locks
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Automotive
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass}>
                  Burglary repair
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-silver/70 mb-5">Contact</p>
            <p className="text-base text-white font-semibold">
              Available 24 hours, 7 days a week, 365 days a year.
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              <a
                href="tel:+448000000024"
                className={`${linkClass} block tabular`}
              >
                0800 000 00 24
              </a>
              <a
                href="mailto:help@keymaster24.co.uk"
                className={`${linkClass} block`}
              >
                help@keymaster24.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-silver/70">
            &copy; 2025 KeyMaster 24. All rights reserved. Fully insured. DBS
            checked.
          </p>
          <p className="text-xs text-silver/70">
            Emergency locksmith &middot; 24/7
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

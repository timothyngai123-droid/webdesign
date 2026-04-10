"use client";

import { motion, useReducedMotion } from "framer-motion";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "@/components/animations/motion-tokens";

const linkClass =
  "relative text-cream-light hover:text-cream-bg transition-colors duration-150 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-cream-bg after:origin-left after:transition-[width] after:duration-200 hover:after:w-full";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE_OUT }}
      className="bg-green-deep border-t border-green-mid"
    >
      <div className="max-w-content mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-3 text-cream-light">
              <LogoMark className="h-10 w-auto" />
              <span className="font-display text-2xl leading-none">
                Grove <span className="italic font-normal">&amp;</span> Grain
              </span>
            </div>
            <p className="mt-5 text-sm text-cream-light/80 leading-relaxed max-w-xs font-light">
              A farm-to-table neighbourhood bistro in Aylesbury town centre.
              Grown nearby, cooked with care.
            </p>
          </div>

          <div>
            <p className="eyebrow text-cream-light/60 mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#menu" className={linkClass}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className={linkClass}>
                  About
                </a>
              </li>
              <li>
                <a href="#reserve" className={linkClass}>
                  Reserve
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cream-light/60 mb-5">Visit</p>
            <address className="not-italic text-sm text-cream-light leading-relaxed font-light">
              12 Market Square
              <br />
              Aylesbury, HP20 1TN
            </address>
            <p className="mt-4 text-sm text-cream-light/80 leading-relaxed font-light tabular">
              Tue &ndash; Sat &middot; 12:00 – 22:00
              <br />
              Sun &middot; 12:00 – 17:00
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
              <a
                href="tel:+441296000000"
                className={`${linkClass} block tabular`}
              >
                01296 000 000
              </a>
              <a
                href="mailto:hello@groveandgrain.co.uk"
                className={`${linkClass} block`}
              >
                hello@groveandgrain.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-green-mid/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-light/60">
            © 2025 Grove &amp; Grain. All rights reserved.
          </p>
          <p className="text-xs text-cream-light/60 italic font-display">
            Grown nearby. Cooked with care.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

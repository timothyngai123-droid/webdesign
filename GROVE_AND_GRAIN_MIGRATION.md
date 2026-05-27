# Grove & Grain — Migration Package

This document contains **all the code** for the Grove & Grain restaurant website
(live at `https://tnwebdesign.vercel.app/grove-and-grain`). Hand this entire file
to Claude Code in the destination repo and it can recreate the site exactly.

## What this is

A single-page farm-to-table restaurant site built with:

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS v4** (using `@theme` / `@import "tailwindcss"` — no `tailwind.config.js`)
- **Framer Motion 11** for all animation
- **next/font/google** for `Playfair Display` (display) + `Inter` (body)

It is fully self-contained: no images (the logo is inline SVG), no 3D, no Lenis.
The only runtime dependency beyond Next/React is `framer-motion`.

---

## Instructions for the destination Claude Code

You are receiving the Grove & Grain site from another repo. Recreate it as follows.

### 1. If the destination repo is EMPTY / a fresh Next.js app

Create the files exactly as laid out in the "File manifest" below. The site lives
under the route `/grove-and-grain`, so it can coexist with other pages.

### 2. If the destination repo ALREADY has a Next.js + Tailwind v4 setup

- Copy the files under `src/app/grove-and-grain/`, `src/components/grove-and-grain/`,
  `src/components/animations/`, and `public/grove-and-grain/`.
- **Merge** the Grove & Grain theme tokens and the `.gg-scope` component layer into
  your existing `src/app/globals.css` (see the CSS section — only the Grove & Grain
  parts are required; do not clobber your existing styles).
- Ensure your **root `layout.tsx`** loads the `Playfair Display` and `Inter` fonts
  with the CSS variables `--font-playfair` and `--font-inter` (see root layout section).
- Add `framer-motion` to dependencies if missing.

### 3. Required dependencies

The Grove & Grain page itself only needs:

```
next@^14.2.5  react@^18.3.1  react-dom@^18.3.1  framer-motion@^11.3.8
tailwindcss@^4  @tailwindcss/postcss@^4  typescript@^5  @types/react  @types/react-dom  @types/node
```

(The source repo also includes three.js / lenis / lucide for OTHER pages — Grove &
Grain does **not** use any of them. Skip them unless you need them.)

### 4. Path alias

All imports use `@/` → `./src/`. Make sure `tsconfig.json` has:

```json
"paths": { "@/*": ["./src/*"] }
```

### 5. Verify

Run `npm install && npm run dev`, open `/grove-and-grain`, and confirm:
intro curtain lifts on first load, hero underline draws in, scroll-progress bar +
custom cursor work, pillars icons draw on scroll, the "30 miles" number counts up,
and the reserve section curtain wipes down.

---

## File manifest

```
public/grove-and-grain/logo.svg
src/app/grove-and-grain/layout.tsx
src/app/grove-and-grain/page.tsx
src/components/grove-and-grain/Nav.tsx
src/components/grove-and-grain/Hero.tsx
src/components/grove-and-grain/Pillars.tsx
src/components/grove-and-grain/Dishes.tsx
src/components/grove-and-grain/About.tsx
src/components/grove-and-grain/Reserve.tsx
src/components/grove-and-grain/Footer.tsx
src/components/grove-and-grain/PageIntro.tsx
src/components/grove-and-grain/LogoMark.tsx
src/components/animations/motion-tokens.ts
src/components/animations/FadeUp.tsx
src/components/animations/StaggerContainer.tsx
src/components/animations/DrawIcon.tsx
src/components/animations/CountUp.tsx
src/components/animations/ScrollProgress.tsx
src/components/animations/CustomCursor.tsx
src/app/globals.css        (merge the Grove & Grain parts)
src/app/layout.tsx         (ensure fonts are loaded)
postcss.config.mjs
next.config.js
tsconfig.json
```

> Note: `src/components/animations/StaggerItem.tsx` exists in the source repo but is
> NOT used by Grove & Grain — the components import the named `StaggerItem` export
> from `StaggerContainer.tsx`. You can ignore it.

---

# CODE

## `src/app/grove-and-grain/page.tsx`

```tsx
import Nav from "@/components/grove-and-grain/Nav";
import Hero from "@/components/grove-and-grain/Hero";
import Pillars from "@/components/grove-and-grain/Pillars";
import Dishes from "@/components/grove-and-grain/Dishes";
import About from "@/components/grove-and-grain/About";
import Reserve from "@/components/grove-and-grain/Reserve";
import Footer from "@/components/grove-and-grain/Footer";
import PageIntro from "@/components/grove-and-grain/PageIntro";
import ScrollProgress from "@/components/animations/ScrollProgress";
import CustomCursor from "@/components/animations/CustomCursor";

export default function GroveAndGrainPage() {
  return (
    <>
      <PageIntro />
      <ScrollProgress className="bg-green-light" />
      <CustomCursor className="bg-green-mid" />
      <Nav />
      <main id="main">
        <Hero />
        <Pillars />
        <Dishes />
        <About />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
```

## `src/app/grove-and-grain/layout.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grove & Grain — Farm-to-table bistro in Aylesbury",
  description:
    "A neighbourhood bistro serving seasonal British produce, sourced from farms within 30 miles of Aylesbury town centre.",
};

export default function GroveAndGrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gg-scope font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-green-deep focus:px-5 focus:py-3 focus:text-sm focus:text-cream-bg"
      >
        Skip to content
      </a>
      {children}
    </div>
  );
}
```

## `src/components/grove-and-grain/LogoMark.tsx`

```tsx
type Props = {
  className?: string;
  strokeWidth?: number;
};

/**
 * Grove & Grain mark — a single wheat ear with a leaf, drawn from the
 * brand logo. Uses `currentColor` so the stroke can be themed via
 * Tailwind text color utilities.
 */
export default function LogoMark({ className, strokeWidth = 5 }: Props) {
  return (
    <svg
      viewBox="0 0 220 320"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Main stem */}
      <path d="M110 22 L110 270" />
      {/* Top bud */}
      <path d="M110 10 C94 34 94 56 110 68 C126 56 126 34 110 10 Z" />
      {/* Pair 1 */}
      <path d="M110 76 C86 72 62 90 52 114 C78 112 98 98 110 84 Z" />
      <path d="M110 76 C134 72 158 90 168 114 C142 112 122 98 110 84 Z" />
      {/* Pair 2 */}
      <path d="M110 120 C84 116 56 136 44 162 C74 160 98 144 110 128 Z" />
      <path d="M110 120 C136 116 164 136 176 162 C146 160 122 144 110 128 Z" />
      {/* Pair 3 */}
      <path d="M110 168 C80 164 48 186 34 214 C70 212 98 192 110 174 Z" />
      <path d="M110 168 C140 164 172 186 186 214 C150 212 122 192 110 174 Z" />
      {/* Leaf on lower-left of stem */}
      <path d="M110 222 C72 216 30 234 12 264 C46 292 86 278 110 238 Z" />
      {/* Leaf veins */}
      <path d="M110 236 L16 266" />
      <path d="M82 232 L32 272" />
      <path d="M58 240 L22 272" />
      <path d="M36 250 L16 268" />
    </svg>
  );
}
```

## `src/components/grove-and-grain/Nav.tsx`

```tsx
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
```

## `src/components/grove-and-grain/Hero.tsx`

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "@/components/animations/motion-tokens";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number, duration = 0.6, y = 30) => ({
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: EASE_OUT,
    },
  });

  const fade = (delay: number, duration = 0.5) => ({
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: EASE_OUT,
    },
  });

  return (
    <section
      id="top"
      className="relative min-h-screen bg-cream-bg flex items-center pt-32 pb-24 overflow-hidden grain"
    >
      {/* Soft radial warmth behind the type */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(99,153,34,0.10), transparent 70%)",
        }}
      />

      {/* Thin corner ornaments to frame the hero */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-28 left-10 w-24 h-24 border-l border-t border-cream-border"
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute bottom-16 right-10 w-24 h-24 border-r border-b border-cream-border"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-16 w-full text-center">
        <motion.div {...fade(0, 0.6)}>
          <LogoMark className="mx-auto h-16 md:h-20 w-auto text-green-deep mb-8" />
        </motion.div>

        <motion.p {...fade(0, 0.5)} className="eyebrow ornament-rule mb-8">
          <span>Est. 2019 &middot; Aylesbury</span>
        </motion.p>

        <motion.h1
          {...fadeUp(0.15, 0.7)}
          className="font-display text-green-deep font-medium leading-[1.02] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5.5rem)]"
        >
          Grown nearby.
          <br />
          Cooked with{" "}
          <span className="relative inline-block italic font-normal">
            care
            {/* Drawn underline — clip-path animates left-to-right after heading settles */}
            <motion.span
              aria-hidden="true"
              className="absolute left-0 -bottom-1 h-[3px] w-full bg-green-light"
              initial={
                reduceMotion
                  ? { clipPath: "inset(0 0% 0 0)" }
                  : { clipPath: "inset(0 100% 0 0)" }
              }
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.9,
                ease: EASE_OUT,
              }}
            />
          </span>
          .
        </motion.h1>

        <motion.div
          {...fade(0.25, 0.5)}
          aria-hidden="true"
          className="mx-auto my-10 flex items-center justify-center gap-3 text-green-mid/60"
        >
          <span className="block h-px w-14 bg-current" />
          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
            <circle cx="4" cy="4" r="2" fill="currentColor" />
          </svg>
          <span className="block h-px w-14 bg-current" />
        </motion.div>

        <motion.p
          {...fadeUp(0.3, 0.6)}
          className="mx-auto max-w-2xl font-sans text-lg md:text-xl text-text-warm leading-relaxed font-light"
        >
          A neighbourhood bistro serving seasonal British produce,
          <br className="hidden sm:block" />
          sourced from farms within thirty miles.
        </motion.p>

        <motion.div
          {...fadeUp(0.45, 0.5)}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#reserve"
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="group inline-flex items-center justify-center rounded-full bg-green-mid px-8 py-4 text-base font-medium text-cream-bg hover:bg-green-deep transition-colors shadow-[0_1px_0_rgba(28,58,15,0.2)] hover:shadow-[0_8px_24px_-8px_rgba(28,58,15,0.4)]"
          >
            Reserve a Table
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 8h12M9 3l5 5-5 5" />
            </svg>
          </motion.a>
          <motion.a
            href="#menu"
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex items-center justify-center rounded-full border border-green-mid bg-transparent px-8 py-4 text-base font-medium text-green-mid hover:bg-green-mid hover:text-cream-bg transition-colors"
          >
            View the Menu
          </motion.a>
        </motion.div>

        <motion.p
          {...fade(0.65, 0.5)}
          className="mt-14 text-[0.72rem] md:text-xs uppercase tracking-[0.22em] text-text-warm/70"
        >
          Open Tuesday to Sunday
          <span className="mx-3 text-green-mid/50">&bull;</span>
          Lunch &amp; Dinner
          <span className="mx-3 text-green-mid/50">&bull;</span>
          Aylesbury Town Centre
        </motion.p>
      </div>
    </section>
  );
}
```

## `src/components/grove-and-grain/Pillars.tsx`

```tsx
"use client";

import FadeUp from "@/components/animations/FadeUp";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import DrawIcon from "@/components/animations/DrawIcon";

type Pillar = {
  numeral: string;
  title: string;
  body: string;
  paths: string[];
};

const pillars: Pillar[] = [
  {
    numeral: "I",
    title: "Locally sourced",
    body: "Every ingredient on our menu is sourced from farms within 30 miles of our kitchen. No exceptions.",
    paths: [
      "M7 37c0-16 11-26 30-30-2 19-14 30-30 30Z",
      "M7 37 24 20",
      "M18 26l6 3",
      "M25 19l4 4",
    ],
  },
  {
    numeral: "II",
    title: "Seasonal menu",
    body: "Our menu changes with the seasons. What's on your plate today was in the ground last week.",
    paths: [
      "M14 5v11a4 4 0 0 0 8 0V5",
      "M18 19v20",
      "M30 5c-3 0-5 3-5 8s2 8 5 8v18",
    ],
  },
  {
    numeral: "III",
    title: "Honest cooking",
    body: "No theatre. No foam. Just carefully prepared food made by people who care.",
    paths: [
      "M4 22l7-7 4 2 6-4 6 2 7 7",
      "M15 18l6 6 3-2 6 6",
      "M22 30l3 3",
      "M26 26l3 3",
    ],
  },
];

export default function Pillars() {
  return (
    <section id="principles" className="bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <FadeUp whenInView className="text-center mb-16 md:mb-24">
          <p className="eyebrow ornament-rule mb-6">
            <span>Our principles</span>
          </p>
          <h2 className="font-display text-green-deep text-3xl md:text-5xl leading-[1.1] max-w-2xl mx-auto">
            Three things we will
            <br className="hidden sm:block" /> never compromise on.
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12">
          {pillars.map((p, i) => (
            <StaggerItem
              key={p.title}
              className={`group relative flex flex-col items-start pl-0 md:pl-8 rounded-xl p-4 -m-4 transition-colors duration-200 hover:bg-cream-card ${
                i === 0 ? "md:border-l-0" : "md:border-l md:border-cream-border"
              }`}
            >
              <span className="font-display italic text-green-light text-sm tracking-wider mb-5">
                {p.numeral}
              </span>
              <div className="text-green-light group-hover:text-green-mid transition-colors duration-200 mb-6">
                <DrawIcon
                  width={44}
                  height={44}
                  viewBox="0 0 44 44"
                  strokeColor="currentColor"
                  strokeWidth={1.25}
                >
                  {p.paths.map((d, idx) => (
                    <path key={idx} d={d} />
                  ))}
                </DrawIcon>
              </div>
              <h3 className="font-display text-2xl md:text-[28px] text-green-deep mb-4 leading-tight">
                {p.title}
              </h3>
              <span className="block w-10 h-px bg-cream-border mb-5" />
              <p className="font-sans text-[15px] md:text-base text-text-warm leading-relaxed max-w-sm font-light">
                {p.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
```

## `src/components/grove-and-grain/Dishes.tsx`

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { EASE_OUT } from "@/components/animations/motion-tokens";

// PLACEHOLDER CONTENT: sample weekly menu — replace with real dishes before launch.
const dishes = [
  {
    course: "To begin",
    name: "Heritage tomato & burrata",
    description:
      "Sun Gold tomatoes, house-made burrata, basil oil, sourdough crisp.",
    price: "14",
  },
  {
    course: "Main",
    name: "Slow-roast lamb shoulder",
    description:
      "28-day aged Cotswold lamb, root vegetable gratin, rosemary jus.",
    price: "28",
  },
  {
    course: "To finish",
    name: "Forced rhubarb tart",
    description:
      "Shortcrust pastry, crème pâtissière, Oxfordshire rhubarb, pistachio.",
    price: "9",
  },
];

function DishCard({
  dish,
}: {
  dish: (typeof dishes)[number];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className="group relative bg-cream-card border border-cream-border rounded-2xl p-8 md:p-10 flex flex-col overflow-hidden transition-[box-shadow,border-color] duration-300 hover:shadow-[0_8px_32px_rgba(28,58,15,0.08)] hover:border-green-light"
    >
      {/* Sliding top hairline on hover */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-px w-full bg-green-light origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="flex items-center justify-between mb-6">
        <span className="eyebrow text-green-mid/80">{dish.course}</span>
        <span className="h-px flex-1 mx-4 bg-cream-border" />
        <span className="font-display text-lg text-green-light tabular transition-colors duration-150 group-hover:text-green-mid">
          £{dish.price}
        </span>
      </div>
      <h3 className="font-display text-[22px] md:text-2xl text-green-deep mb-4 leading-snug">
        {dish.name}
      </h3>
      <p className="font-sans text-[15px] text-text-warm leading-relaxed font-light flex-1">
        {dish.description}
      </p>
    </motion.article>
  );
}

export default function Dishes() {
  return (
    <section
      id="menu"
      className="relative bg-cream-bg py-20 md:py-32 overflow-hidden grain"
    >
      <div className="relative max-w-content mx-auto px-6 md:px-16">
        <FadeUp whenInView className="text-center mb-16 md:mb-20">
          <p className="eyebrow ornament-rule mb-6">
            <span>This week&apos;s harvest</span>
          </p>
          <h2 className="font-display text-green-deep text-3xl md:text-5xl leading-[1.1]">
            A taste of what&apos;s
            <span className="italic font-normal"> on this week</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish) => (
            <StaggerItem key={dish.name}>
              <DishCard dish={dish} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp whenInView delay={0.1}>
          <p className="mt-14 text-center italic text-sm text-text-warm/80 font-display">
            Menu changes weekly. Ask your server about today&apos;s specials.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
```

## `src/components/grove-and-grain/About.tsx`

```tsx
"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import LogoMark from "./LogoMark";
import FadeUp from "@/components/animations/FadeUp";
import CountUp from "@/components/animations/CountUp";
import { EASE_OUT } from "@/components/animations/motion-tokens";

export default function About() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const inView = useInView(quoteRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* PLACEHOLDER COPY: replace with real founder story before launch. */}
          <FadeUp whenInView>
            <p className="eyebrow mb-6">
              <span>Our story</span>
            </p>
            <p className="font-sans text-base md:text-lg text-text-warm leading-relaxed drop-cap font-light">
              Grove &amp; Grain was started by Eleanor and James Whitcombe in
              2019, after years of cooking in London kitchens and a longer time
              still of wishing they could cook with ingredients that hadn&apos;t
              travelled halfway across a continent. They came home to
              Buckinghamshire with a simple idea: serve only what their
              neighbours grow.
            </p>
            <p className="mt-6 font-sans text-base md:text-lg text-text-warm leading-relaxed font-light">
              Today the bistro works with a small circle of farms, dairies and
              growers &mdash; none further than thirty miles from the kitchen
              door. We know the people who raise our lamb, press our rapeseed
              oil and pick our leaves. The menu shifts with the weather and the
              harvest, because that&apos;s how food should be.
            </p>
            <p className="mt-8 font-display italic text-green-deep text-lg">
              &mdash; Eleanor &amp; James Whitcombe, founders
            </p>
          </FadeUp>

          <FadeUp whenInView delay={0.15}>
            <div
              ref={quoteRef}
              className="relative bg-cream-bg border border-cream-border rounded-2xl p-10 md:p-14 overflow-hidden"
            >
              {/* Growing left border */}
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-0 w-[3px] bg-green-light origin-top"
                initial={reduceMotion ? { height: "100%" } : { height: 0 }}
                animate={inView ? { height: "100%" } : { height: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease: EASE_OUT,
                }}
              />
              <LogoMark className="absolute -right-8 -top-8 h-44 w-auto text-green-deep/5" />
              <div className="relative">
                <svg
                  className="text-green-mid/30 mb-4"
                  width="42"
                  height="32"
                  viewBox="0 0 42 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 32V18C0 8 6 2 17 0l2 4c-7 2-10 6-10 12h9v16H0Zm23 0V18C23 8 29 2 40 0l2 4c-7 2-10 6-10 12h9v16H23Z" />
                </svg>
                <p className="font-display text-green-deep text-[clamp(1.75rem,4vw,2.6rem)] leading-[1.1] tracking-[-0.01em]">
                  <CountUp target={30} duration={1.2} /> miles.
                  <br />
                  That&apos;s as far as our
                  <br />
                  ingredients{" "}
                  <span className="italic font-normal">travel</span>.
                </p>
                <span className="block w-14 h-px bg-green-mid/40 mt-8" />
                <p className="mt-4 eyebrow text-green-mid/80">
                  Our sourcing promise
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
```

## `src/components/grove-and-grain/Reserve.tsx`

```tsx
"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import LogoMark from "./LogoMark";
import { EASE_OUT } from "@/components/animations/motion-tokens";

export default function Reserve() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="reserve"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Curtain reveal — scales from top to full */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-green-mid origin-top"
        initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: EASE_OUT }}
      />

      {/* Soft radial highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(250,246,237,0.12), transparent 70%)",
        }}
      />

      {/* Decorative oversized mark watermarks */}
      <LogoMark
        className="absolute -left-20 -bottom-16 h-80 w-auto text-cream-bg/[0.04] hidden md:block"
        strokeWidth={3}
      />
      <LogoMark
        className="absolute -right-16 -top-16 h-64 w-auto text-cream-bg/[0.04] hidden md:block"
        strokeWidth={3}
      />

      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          delay: reduceMotion ? 0 : 0.9,
          ease: EASE_OUT,
        }}
        className="relative max-w-content mx-auto px-6 md:px-16 text-center"
      >
        <LogoMark className="mx-auto h-14 w-auto text-cream-bg/80 mb-8" />

        <p className="eyebrow text-cream-bg/70 mb-5">
          <span>Bookings</span>
        </p>

        <h2 className="font-display text-cream-bg text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] tracking-[-0.015em]">
          Ready to <span className="italic font-normal">join us?</span>
        </h2>

        <p className="mt-6 mx-auto max-w-xl font-sans text-base md:text-lg text-cream-bg/80 leading-relaxed font-light">
          Bookings available Tuesday to Sunday. We recommend reserving at least
          48 hours ahead.
        </p>

        <div className="mt-10">
          <motion.a
            href="tel:+441296000000"
            initial={false}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.04,
                    backgroundColor: "#FAF6ED",
                    boxShadow: "0 0 0 3px rgba(99, 153, 34, 0.2)",
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="group inline-flex items-center justify-center rounded-full bg-cream-bg px-10 py-4 text-base font-medium text-green-mid shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
          >
            Reserve a Table
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 8h12M9 3l5 5-5 5" />
            </svg>
          </motion.a>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-12 flex items-center justify-center gap-3 text-cream-bg/30"
        >
          <span className="block h-px w-16 bg-current" />
          <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx="3" cy="3" r="1.5" fill="currentColor" />
          </svg>
          <span className="block h-px w-16 bg-current" />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-cream-bg/85">
          <a
            href="tel:+441296000000"
            className="hover:text-cream-bg transition-colors tabular"
          >
            01296 000 000
          </a>
          <span className="hidden sm:block text-cream-bg/30">&bull;</span>
          <a
            href="mailto:hello@groveandgrain.co.uk"
            className="hover:text-cream-bg transition-colors"
          >
            hello@groveandgrain.co.uk
          </a>
        </div>
      </motion.div>
    </section>
  );
}
```

## `src/components/grove-and-grain/Footer.tsx`

```tsx
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
```

## `src/components/grove-and-grain/PageIntro.tsx`

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE_OUT } from "@/components/animations/motion-tokens";
import LogoMark from "./LogoMark";

const STORAGE_KEY = "gg-intro-played";

/**
 * Full-screen cream curtain that lifts on first visit only. Tracks
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
      className="fixed inset-0 z-[9998] bg-cream-bg flex items-center justify-center"
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
        className="text-green-deep"
      >
        <LogoMark className="h-20 w-auto" />
      </motion.div>
    </motion.div>
  );
}
```

---

## Shared animation components (`src/components/animations/`)

### `src/components/animations/motion-tokens.ts`

```ts
/**
 * Shared motion tokens for Grove & Grain.
 * Every animation in the site imports from this file so easing, duration
 * and stagger values stay consistent.
 */
import type { Easing } from "framer-motion";

// Default (cubic-bezier equivalent of CSS `ease`)
export const EASE_DEFAULT: Easing = [0.25, 0.1, 0.25, 1];
// Decelerate curve used for every entrance
export const EASE_OUT: Easing = [0.0, 0.0, 0.2, 1];

export const DURATION = {
  enter: 0.6,
  exit: 0.3,
  micro: 0.2,
} as const;

export const STAGGER = 0.12;

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.enter,
      ease: EASE_OUT,
    },
  },
};

export const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER,
      delayChildren: 0.05,
    },
  },
};
```

### `src/components/animations/FadeUp.tsx`

```tsx
"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { DURATION, EASE_OUT } from "./motion-tokens";

type FadeUpProps = HTMLMotionProps<"div"> & {
  delay?: number;
  duration?: number;
  y?: number;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3" | "li";
  /** When true, animation triggers on scroll rather than on mount. */
  whenInView?: boolean;
};

/**
 * Wraps children with the standard Grove & Grain fade-up entrance:
 * opacity 0 → 1, y 24 → 0, decelerate easing. Respects
 * `prefers-reduced-motion` — motion is skipped, final state is used.
 */
export default function FadeUp({
  children,
  delay = 0,
  duration = DURATION.enter,
  y = 24,
  whenInView = false,
  ...rest
}: FadeUpProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const visible = {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: EASE_OUT,
    },
  };

  const viewportProps = whenInView
    ? { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.div
      variants={{ hidden, visible }}
      {...viewportProps}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
```

### `src/components/animations/StaggerContainer.tsx`

```tsx
"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { STAGGER, DURATION, EASE_OUT } from "./motion-tokens";

type StaggerContainerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delayChildren?: number;
};

/**
 * Container that staggers its `StaggerItem` children on scroll entry.
 * Children should use the `hidden` / `visible` variants — the exported
 * `StaggerItem` below satisfies this contract.
 */
export default function StaggerContainer({
  children,
  stagger = STAGGER,
  delayChildren = 0.05,
  ...rest
}: StaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren: reduceMotion ? 0 : delayChildren,
          },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  y?: number;
};

/**
 * Child of `StaggerContainer`. Uses `hidden`/`visible` variants so it
 * picks up its delay from the parent's `staggerChildren` transition.
 */
export function StaggerItem({ children, y = 32, ...rest }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const visible = {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduceMotion ? 0 : DURATION.enter,
      ease: EASE_OUT,
    },
  };

  return (
    <motion.div variants={{ hidden, visible }} {...rest}>
      {children}
    </motion.div>
  );
}
```

### `src/components/animations/DrawIcon.tsx`

```tsx
"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { EASE_OUT } from "./motion-tokens";

type DrawIconProps = {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
};

/**
 * Animates the `strokeDashoffset` of any `<path>` children from full
 * length (invisible) to 0 (fully drawn) when the icon scrolls into
 * view. Each child path is wrapped in a `motion.path`, so pass plain
 * `<path />` elements as children. Respects reduced-motion by rendering
 * fully drawn paths immediately.
 */
export default function DrawIcon({
  children,
  className,
  width = 44,
  height = 44,
  viewBox = "0 0 44 44",
  strokeColor = "currentColor",
  strokeWidth = 1.25,
  duration = 0.8,
  delay = 0,
}: DrawIconProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const pathVariants: Variants = {
    hidden: { pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: reduceMotion ? 0 : duration, ease: EASE_OUT, delay },
        opacity: { duration: 0.01, delay },
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-hidden="true"
    >
      {Array.isArray(children)
        ? children.map((child, i) => {
            if (typeof child !== "object" || child === null) return child;
            const element = child as React.ReactElement<{ d?: string }>;
            return (
              <motion.path
                key={i}
                d={element.props.d}
                variants={pathVariants}
              />
            );
          })
        : (() => {
            const element = children as React.ReactElement<{ d?: string }>;
            return <motion.path d={element.props.d} variants={pathVariants} />;
          })()}
    </motion.svg>
  );
}
```

### `src/components/animations/CountUp.tsx`

```tsx
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
```

### `src/components/animations/ScrollProgress.tsx`

```tsx
"use client";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type ScrollProgressProps = {
  /** Tailwind class (or any class) controlling the bar colour. */
  className?: string;
  /** Height in px. Defaults to 2. */
  height?: number;
  /** Stack order. Defaults to 9999. */
  zIndex?: number;
};

/**
 * Brand-agnostic scroll progress bar. Consumers pass their own colour
 * via `className`. Uses `useScroll` + a spring for a slightly elastic
 * feel, and respects `prefers-reduced-motion`.
 */
export default function ScrollProgress({
  className = "bg-black",
  height = 2,
  zIndex = 9999,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 origin-left pointer-events-none ${className}`}
      style={{
        height,
        zIndex,
        scaleX: reduceMotion ? scrollYProgress : scaleX,
      }}
    />
  );
}
```

### `src/components/animations/CustomCursor.tsx`

```tsx
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
```

---

## `public/grove-and-grain/logo.svg`

(Only used as a static asset / favicon-style reference — the page itself renders the
inline `LogoMark`. Include it if you want the standalone file.)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 460" fill="none" role="img" aria-label="Grove and Grain">
  <g stroke="#1C3A0F" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" transform="translate(340 10)">
    <path d="M110 22 L110 270" />
    <path d="M110 10 C94 34 94 56 110 68 C126 56 126 34 110 10 Z" />
    <path d="M110 76 C86 72 62 90 52 114 C78 112 98 98 110 84 Z" />
    <path d="M110 76 C134 72 158 90 168 114 C142 112 122 98 110 84 Z" />
    <path d="M110 120 C84 116 56 136 44 162 C74 160 98 144 110 128 Z" />
    <path d="M110 120 C136 116 164 136 176 162 C146 160 122 144 110 128 Z" />
    <path d="M110 168 C80 164 48 186 34 214 C70 212 98 192 110 174 Z" />
    <path d="M110 168 C140 164 172 186 186 214 C150 212 122 192 110 174 Z" />
    <path d="M110 222 C72 216 30 234 12 264 C46 292 86 278 110 238 Z" />
    <path d="M110 236 L16 266" />
    <path d="M82 232 L32 272" />
    <path d="M58 240 L22 272" />
    <path d="M36 250 L16 268" />
  </g>
  <text x="450" y="410" text-anchor="middle" font-family="'Playfair Display', 'Didot', Georgia, serif" font-size="100" font-weight="500" fill="#1C3A0F" letter-spacing="1">Grove &amp; Grain</text>
</svg>
```

---

## Config & global styles

### `src/app/globals.css` — Grove & Grain parts (MERGE these into the destination's globals.css)

The site relies on Tailwind v4 `@theme` tokens plus a `.gg-scope` component layer.
If the destination already has a `globals.css`, **add** the blocks below — don't
remove existing styles. If starting fresh, you can use this whole file.

```css
@import "tailwindcss";

/* ─── Theme tokens (Tailwind v4) — Grove & Grain colours + shared fonts/widths ─── */
@theme {
  /* Grove & Grain */
  --color-green-deep: #1C3A0F;
  --color-green-mid: #2D5A1B;
  --color-green-light: #639922;
  --color-cream-bg: #FAF6ED;
  --color-cream-card: #FDF9F0;
  --color-cream-border: #D9CDB4;
  --color-text-warm: #5C5043;
  --color-cream-light: #C8B99A;

  /* Font families */
  --font-display: var(--font-playfair, 'Playfair Display'), Georgia, serif;
  --font-sans: var(--font-inter, 'Inter'), system-ui, sans-serif;

  /* Max widths */
  --max-w-content: 72rem;
}

/* ─── Base resets relevant to Grove & Grain ─── */
@layer base {
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  /* Hide the native cursor when the custom cursor is active. */
  body.custom-cursor-active,
  body.custom-cursor-active * {
    cursor: none !important;
  }

  h1, h2, h3, h4 { text-wrap: balance; }
  p { text-wrap: pretty; }
}

/* ─────────────────────────────────────────────────────────────
 * Grove & Grain scope — cream palette, Playfair display font.
 * Wrap the Grove & Grain page in `.gg-scope` to activate.
 * ───────────────────────────────────────────────────────────── */
@layer components {
  .gg-scope {
    --font-display-active: var(--font-playfair);
    background-color: #faf6ed;
    color: #5c5043;
    cursor: auto;
  }
  .gg-scope * { cursor: auto; }

  .gg-scope ::selection {
    background-color: #1c3a0f;
    color: #faf6ed;
  }

  .gg-scope :focus-visible {
    outline: 2px solid #2d5a1b;
    outline-offset: 3px;
    border-radius: 2px;
  }

  .gg-scope h1,
  .gg-scope h2,
  .gg-scope h3,
  .gg-scope h4 {
    font-family: var(--font-playfair, 'Playfair Display'), Georgia, serif;
    letter-spacing: normal;
  }

  .gg-scope .ornament-rule {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    color: #2d5a1b;
  }
  .gg-scope .ornament-rule::before,
  .gg-scope .ornament-rule::after {
    content: "";
    display: block;
    width: 2.5rem;
    height: 1px;
    background-color: currentColor;
    opacity: 0.5;
  }

  .gg-scope .eyebrow {
    font-family: var(--font-inter, 'Inter'), system-ui, sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #2d5a1b;
  }

  .gg-scope .grain::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.11 0 0 0 0 0.23 0 0 0 0 0.06 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>");
    background-size: 220px 220px;
    mix-blend-mode: multiply;
    opacity: 0.06;
  }

  .gg-scope .drop-cap::first-letter {
    float: left;
    font-family: var(--font-playfair, 'Playfair Display'), Georgia, serif;
    font-size: 4.4rem;
    line-height: 0.9;
    padding: 0.35rem 0.6rem 0 0;
    color: #1c3a0f;
    font-weight: 500;
  }

  .tabular {
    font-variant-numeric: tabular-nums;
  }
}
```

> Tailwind v4 turns `@theme` tokens into utilities automatically, so
> `--color-green-deep` becomes `bg-green-deep` / `text-green-deep` etc., and
> `--max-w-content` becomes `max-w-content`. No `tailwind.config.js` is needed.

### `src/app/layout.tsx` — ensure these fonts are loaded

Grove & Grain needs the `--font-playfair` and `--font-inter` CSS variables set on
`<html>`. Minimal root layout:

```tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Grove & Grain',
  description: 'Farm-to-table bistro in Aylesbury.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
```

> If your destination repo hosts multiple sites, keep your existing root layout and
> just make sure the Inter + Playfair font variables are added to the `<html>`
> className alongside whatever else you load.

### `postcss.config.mjs`

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
```

> The source repo's `next.config.js` also configures `images.remotePatterns` for
> Unsplash and `transpilePackages: ['three']` for OTHER pages. Grove & Grain needs
> neither — the empty config above is enough.

### `tsconfig.json` (key part — the `@/` path alias)

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `package.json` (minimal — only what Grove & Grain needs)

```json
{
  "name": "grove-and-grain",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.3.8",
    "next": "^14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^20.14.10",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.5.3"
  }
}
```

---

## Summary of dependencies between files

- All `grove-and-grain/*` components import `EASE_OUT` (and friends) from
  `@/components/animations/motion-tokens`.
- `Pillars` and `Dishes` import `FadeUp`, `StaggerContainer` + `StaggerItem`, and
  (Pillars only) `DrawIcon`.
- `About` imports `FadeUp` and `CountUp`.
- `page.tsx` imports `ScrollProgress` and `CustomCursor` from `animations/`.
- Every Grove & Grain component that shows the wheat mark imports the local
  `./LogoMark`.
- Styling depends entirely on the Tailwind v4 `@theme` tokens + `.gg-scope`
  component layer in `globals.css`, and on the Playfair/Inter font variables set in
  the root layout.

That's everything. Nothing else from the source repo is required.
```

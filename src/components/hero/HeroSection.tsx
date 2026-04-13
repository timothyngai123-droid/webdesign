'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SplitText from '../ui/SplitText';
import AnimatedText from '../ui/AnimatedText';
import MagneticButton from '../ui/MagneticButton';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(59,130,246,0.07), transparent)',
        }}
      />

      <motion.div
        className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center"
        style={{ y, opacity, zIndex: 10 }}
      >
        {/* Left — Text content */}
        <div className="flex flex-col gap-8 pt-24 lg:pt-0">
          <h1
            className="text-[clamp(2.5rem,6vw,6rem)] leading-[1.05] font-bold"
            style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
          >
            <SplitText>
              I build websites that make local businesses look world-class.
            </SplitText>
          </h1>

          <AnimatedText delay={0.5}>
            <p
              className="text-lg md:text-xl max-w-lg leading-relaxed"
              style={{ color: '#6b6f7a' }}
            >
              Custom-coded. 3D-animated. Built to convert browsers into
              customers.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.7}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton variant="primary" onClick={scrollToProjects}>
                See My Work &darr;
              </MagneticButton>
              <MagneticButton variant="secondary" href="/contact">
                Get in Touch
              </MagneticButton>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.9}>
            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: '#6b6f7a' }}
            >
              Web Designer &amp; Developer
            </p>
          </AnimatedText>
        </div>

        {/* Right — 3D canvas */}
        <div className="w-full h-[350px] lg:h-[600px]">
          <HeroScene />
        </div>
      </motion.div>
    </section>
  );
}

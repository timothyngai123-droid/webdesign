'use client';

import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import AnimatedText from '../ui/AnimatedText';

const techBadges = [
  { name: 'Next.js', icon: '\u25C6' },
  { name: 'Three.js', icon: '\u25B3' },
  { name: 'Framer Motion', icon: '\u25CE' },
  { name: 'Tailwind CSS', icon: '\u2726' },
  { name: 'Vercel', icon: '\u25B2' },
];

export default function AboutSection() {
  return (
    <section className="py-32 lg:py-40" id="about">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Big statement */}
          <div>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.15] font-bold"
              style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
            >
              <SplitText>
                Your website is your first impression. I make sure
                it&apos;s unforgettable.
              </SplitText>
            </h2>
          </div>

          {/* Right — Description */}
          <div className="flex flex-col gap-6">
            <AnimatedText>
              <p className="text-lg leading-relaxed" style={{ color: '#A1A1AA' }}>
                Every site I build is custom-coded from scratch — no WordPress,
                no templates, no page builders. Just clean, performant code
                tailored to your brand.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <p className="text-lg leading-relaxed" style={{ color: '#A1A1AA' }}>
                I bring 3D elements, smooth animations, and cinematic scroll
                experiences that make visitors stop and pay attention. Your
                website won&apos;t just exist — it&apos;ll make a statement.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <p className="text-lg leading-relaxed" style={{ color: '#A1A1AA' }}>
                You get full ownership — your own hosting, your own domain, your
                own code. No lock-in, no monthly platform fees. It&apos;s yours,
                forever.
              </p>
            </AnimatedText>
          </div>
        </div>

        {/* Tech badges */}
        <motion.div
          className="flex flex-wrap gap-3 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {techBadges.map((badge) => (
            <motion.span
              key={badge.name}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1F1F23] text-sm"
              style={{ backgroundColor: '#111113', color: '#A1A1AA' }}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <span style={{ color: '#7C3AED' }}>{badge.icon}</span>
              {badge.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

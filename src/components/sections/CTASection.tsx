'use client';

import SplitText from '../ui/SplitText';
import AnimatedText from '../ui/AnimatedText';
import MagneticButton from '../ui/MagneticButton';

export default function CTASection() {
  return (
    <section className="py-32 lg:py-48 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59,130,246,0.06), transparent)',
        }}
      />

      <div
        className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center"
        style={{ zIndex: 10 }}
      >
        <h2
          className="text-[clamp(2rem,5vw,4.5rem)] font-bold mb-8"
          style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
        >
          <SplitText>
            Let&apos;s build something your competitors can&apos;t ignore.
          </SplitText>
        </h2>

        <AnimatedText delay={0.3}>
          <p
            className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: '#6b6f7a' }}
          >
            I take on a limited number of projects at a time to give every
            client my full attention.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <MagneticButton variant="primary" href="/contact">
            Start a Project &rarr;
          </MagneticButton>
        </AnimatedText>
      </div>
    </section>
  );
}

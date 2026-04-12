'use client';

import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We talk about your business, your customers, and what success looks like online.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'I design a custom look and feel that matches your brand and wows your visitors.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I hand-code everything from scratch with 3D, animations, and performance in mind.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Your site goes live on your own hosting. I handle deployment and hand you the keys.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 lg:py-40 border-t border-[#252830]" id="process">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2
          className="text-[clamp(2rem,4vw,4rem)] font-bold mb-20"
          style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
        >
          <SplitText>How I Work</SplitText>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Connecting line between steps */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-[1px]"
                  style={{
                    background:
                      'linear-gradient(to right, #252830, transparent)',
                  }}
                />
              )}

              <span
                className="text-5xl font-bold mb-4 block"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'rgba(59,130,246,0.2)',
                }}
              >
                {step.number}
              </span>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b6f7a' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

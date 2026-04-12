'use client';

import { motion } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function SplitText({
  children,
  className,
  delay = 0,
  staggerDelay = 0.04,
}: SplitTextProps) {
  const words = children.split(' ');

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                delay: delay + i * staggerDelay,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}

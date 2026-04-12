'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedText({
  children,
  className,
  delay = 0,
}: AnimatedTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('intro-shown')) {
      setIsLoading(false);
      return;
    }

    setShouldRender(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('intro-shown', 'true');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  const nameLetters = 'TIMOTHY NGAI'.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 10000, backgroundColor: '#0d0e10' }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex flex-col items-center">
            {/* Accent line drawing across center */}
            <motion.div
              className="absolute top-1/2 left-1/2 h-[1px] -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: '#3b82f6' }}
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* TIMOTHY NGAI — letter-by-letter */}
            <div className="flex mb-2">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-3xl md:text-5xl font-bold tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8 + i * 0.03,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* STUDIO */}
            <motion.span
              className="text-lg md:text-2xl tracking-[0.4em] mt-4"
              style={{ fontFamily: 'var(--font-display)', color: '#6b6f7a' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.4,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              STUDIO
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-[#1F1F23]/50'
          : ''
      }`}
      style={{ zIndex: 100 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-wide no-underline"
          style={{ fontFamily: 'var(--font-display)', color: '#FAFAFA' }}
          data-cursor-hover
        >
          TIMOTHY NGAI{' '}
          <span style={{ color: '#7C3AED' }}>STUDIO</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm tracking-wide transition-colors no-underline"
            style={{ color: '#A1A1AA' }}
            data-cursor-hover
          >
            Work
          </a>
          <a
            href="#process"
            className="text-sm tracking-wide transition-colors no-underline"
            style={{ color: '#A1A1AA' }}
            data-cursor-hover
          >
            Process
          </a>
          <Link
            href="/contact"
            className="text-sm tracking-wide transition-colors no-underline"
            style={{ color: '#A1A1AA' }}
            data-cursor-hover
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-sm px-5 py-2.5 rounded-full text-white no-underline transition-colors"
            style={{ backgroundColor: '#7C3AED' }}
            data-cursor-hover
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden bg-transparent border-none"
          style={{ color: '#FAFAFA', cursor: 'none' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          data-cursor-hover
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-[#1F1F23]"
            style={{ backgroundColor: '#0A0A0B' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 p-6">
              <a
                href="#projects"
                className="py-2 transition-colors no-underline"
                style={{ color: '#A1A1AA' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#process"
                className="py-2 transition-colors no-underline"
                style={{ color: '#A1A1AA' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <Link
                href="/contact"
                className="py-2 transition-colors no-underline"
                style={{ color: '#A1A1AA' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="text-center py-3 rounded-full text-white mt-2 no-underline"
                style={{ backgroundColor: '#7C3AED' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

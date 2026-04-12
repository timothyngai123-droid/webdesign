'use client';

import { Instagram, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#252830] py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <AnimatedText>
            <span
              className="font-bold text-lg tracking-wide"
              style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
            >
              TIMOTHY NGAI{' '}
              <span style={{ color: '#3b82f6' }}>STUDIO</span>
            </span>
          </AnimatedText>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition-colors"
                style={{ color: '#6b6f7a' }}
                data-cursor-hover
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-[#252830]">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-xs" style={{ color: '#6b6f7a' }}>
              &copy; 2026 Timothy Ngai Studio. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: '#6b6f7a' }}>
              Designed &amp; built by hand.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs bg-transparent border-none transition-colors"
            style={{ color: '#6b6f7a', cursor: 'none' }}
            data-cursor-hover
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

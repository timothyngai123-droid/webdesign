'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  onClick,
  href,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 300 });
  const springY = useSpring(y, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const inner = (
    <motion.div
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-colors',
        variant === 'primary'
          ? 'bg-[#3b82f6] text-white hover:bg-[#2563eb]'
          : 'border border-[#252830] text-[#e2e4e9] hover:border-[#3b82f6] hover:text-[#3b82f6]',
        className
      )}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  if (onClick || type === 'submit') {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-transparent border-none p-0 cursor-none"
      >
        {inner}
      </button>
    );
  }

  return inner;
}

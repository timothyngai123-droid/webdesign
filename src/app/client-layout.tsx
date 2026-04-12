'use client';

import { type ReactNode } from 'react';
import LenisProvider from '@/components/effects/LenisProvider';
import CustomCursor from '@/components/effects/CustomCursor';
import LoadingScreen from '@/components/effects/LoadingScreen';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/layout/Navbar';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      {/* Skip-to-content link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:px-4 focus:py-2 focus:top-2 focus:left-2 focus:rounded focus:text-white"
        style={{ zIndex: 10001, backgroundColor: '#7C3AED' }}
      >
        Skip to content
      </a>
      <main id="main">{children}</main>
    </LenisProvider>
  );
}

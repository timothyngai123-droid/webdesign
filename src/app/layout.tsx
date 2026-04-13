import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Barlow, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Timothy Ngai Studio — Premium Web Design for Local Businesses',
  description:
    'Custom-coded, 3D-animated websites that make local businesses look world-class. Based in London.',
  openGraph: {
    title: 'Timothy Ngai Studio — Premium Web Design for Local Businesses',
    description:
      'Custom-coded, 3D-animated websites that make local businesses look world-class.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${barlow.variable} ${playfair.variable}`}
    >
      <body
        className="antialiased overflow-x-hidden"
        style={{
          backgroundColor: '#0d0e10',
          color: '#e2e4e9',
          fontFamily: "var(--font-inter, 'Inter'), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}

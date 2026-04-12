import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './client-layout';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased overflow-x-hidden"
        style={{
          backgroundColor: '#0d0e10',
          color: '#e2e4e9',
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

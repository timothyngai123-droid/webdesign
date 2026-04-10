import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Grove & Grain — Farm-to-table bistro in Aylesbury",
  description:
    "A neighbourhood bistro serving seasonal British produce, sourced from farms within 30 miles of Aylesbury town centre.",
};

export default function GroveAndGrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${playfair.variable} ${inter.variable} font-sans bg-cream-bg text-text-warm`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-green-deep focus:px-5 focus:py-3 focus:text-sm focus:text-cream-bg"
      >
        Skip to content
      </a>
      {children}
    </div>
  );
}

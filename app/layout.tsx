import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand pages",
  description: "Index of brand landing pages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

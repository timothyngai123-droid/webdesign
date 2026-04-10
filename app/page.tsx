import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand index",
  description: "Index of brand landing pages.",
};

const brands = [
  { href: "/grove-and-grain", label: "/grove-and-grain" },
  { href: "/keymaster24", label: "/keymaster24" },
  { href: "/flowright-plumbing", label: "/flowright-plumbing" },
  { href: "/sparkle-and-shine", label: "/sparkle-and-shine" },
  { href: "/brightspark-electric", label: "/brightspark-electric" },
];

export default function IndexPage() {
  return (
    <main id="main">
      <ul>
        {brands.map((b) => (
          <li key={b.href}>
            <Link href={b.href}>{b.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

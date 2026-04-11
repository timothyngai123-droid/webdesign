import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FlowRight Plumbing — No leaks. No excuses. No hidden costs.",
  description:
    "Family-run plumbers covering the whole region. Fixed prices quoted before we start. Boilers, bathrooms, leaks, and everything in between. Gas Safe registered, fully insured, same-day availability.",
};

export default function FlowRightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

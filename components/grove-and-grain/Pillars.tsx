"use client";

import FadeUp from "@/components/animations/FadeUp";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import DrawIcon from "@/components/animations/DrawIcon";

type Pillar = {
  numeral: string;
  title: string;
  body: string;
  paths: string[];
};

const pillars: Pillar[] = [
  {
    numeral: "I",
    title: "Locally sourced",
    body: "Every ingredient on our menu is sourced from farms within 30 miles of our kitchen. No exceptions.",
    paths: [
      "M7 37c0-16 11-26 30-30-2 19-14 30-30 30Z",
      "M7 37 24 20",
      "M18 26l6 3",
      "M25 19l4 4",
    ],
  },
  {
    numeral: "II",
    title: "Seasonal menu",
    body: "Our menu changes with the seasons. What's on your plate today was in the ground last week.",
    paths: [
      "M14 5v11a4 4 0 0 0 8 0V5",
      "M18 19v20",
      "M30 5c-3 0-5 3-5 8s2 8 5 8v18",
    ],
  },
  {
    numeral: "III",
    title: "Honest cooking",
    body: "No theatre. No foam. Just carefully prepared food made by people who care.",
    paths: [
      "M4 22l7-7 4 2 6-4 6 2 7 7",
      "M15 18l6 6 3-2 6 6",
      "M22 30l3 3",
      "M26 26l3 3",
    ],
  },
];

export default function Pillars() {
  return (
    <section id="principles" className="bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <FadeUp whenInView className="text-center mb-16 md:mb-24">
          <p className="eyebrow ornament-rule mb-6">
            <span>Our principles</span>
          </p>
          <h2 className="font-display text-green-deep text-3xl md:text-5xl leading-[1.1] max-w-2xl mx-auto">
            Three things we will
            <br className="hidden sm:block" /> never compromise on.
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12">
          {pillars.map((p, i) => (
            <StaggerItem
              key={p.title}
              className={`group relative flex flex-col items-start pl-0 md:pl-8 rounded-xl p-4 -m-4 transition-colors duration-200 hover:bg-cream-card ${
                i === 0 ? "md:border-l-0" : "md:border-l md:border-cream-border"
              }`}
            >
              <span className="font-display italic text-green-light text-sm tracking-wider mb-5">
                {p.numeral}
              </span>
              <div className="text-green-light group-hover:text-green-mid transition-colors duration-200 mb-6">
                <DrawIcon
                  width={44}
                  height={44}
                  viewBox="0 0 44 44"
                  strokeColor="currentColor"
                  strokeWidth={1.25}
                >
                  {p.paths.map((d, idx) => (
                    <path key={idx} d={d} />
                  ))}
                </DrawIcon>
              </div>
              <h3 className="font-display text-2xl md:text-[28px] text-green-deep mb-4 leading-tight">
                {p.title}
              </h3>
              <span className="block w-10 h-px bg-cream-border mb-5" />
              <p className="font-sans text-[15px] md:text-base text-text-warm leading-relaxed max-w-sm font-light">
                {p.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

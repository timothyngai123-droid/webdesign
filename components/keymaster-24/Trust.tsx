"use client";

import FadeUp from "../animations/FadeUp";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";

type Credential = {
  title: string;
  body: string;
};

const credentials: Credential[] = [
  {
    title: "DBS Checked",
    body: "Every engineer is fully background checked. We only send people we'd trust in our own homes.",
  },
  {
    title: "Fully Insured",
    body: "\u00a32 million public liability insurance on every job. You are fully protected.",
  },
  {
    title: "No Hidden Costs",
    body: "Price agreed before we start. What we quote is what you pay. Always.",
  },
  {
    title: "Master Locksmith",
    body: "Trained to the highest industry standard. We solve the jobs others can't.",
  },
];

export default function Trust() {
  return (
    <section id="coverage" className="bg-navy-deep py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <FadeUp whenInView className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="eyebrow text-navy-light mb-5">Credentials</p>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-[1.05] tracking-tight">
            You&rsquo;re in safe hands.
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {credentials.map((c) => (
            <StaggerItem
              key={c.title}
              className="group relative overflow-hidden rounded-xl bg-navy-deep border border-navy-mid p-7 transition-colors duration-[250ms] hover:border-navy-light"
            >
              {/* Top accent line — slides in from left on hover */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-[3px] w-full bg-navy-light origin-left scale-x-0 transition-transform duration-[250ms] group-hover:scale-x-100"
              />
              <h3 className="font-display font-bold text-xl text-white mb-3 leading-tight tracking-tight">
                {c.title}
              </h3>
              <p className="font-sans text-[15px] text-silver leading-relaxed">
                {c.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

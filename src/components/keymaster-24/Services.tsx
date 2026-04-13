"use client";

import FadeUp from "../animations/FadeUp";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import DrawIcon from "../animations/DrawIcon";

type Service = {
  title: string;
  body: string;
  paths: string[];
};

const services: Service[] = [
  {
    title: "Home lockouts",
    body: "Locked out of your house? We'll have you back inside fast, with no damage to your door or frame.",
    paths: [
      // House with keyhole
      "M6 20 L22 6 L38 20",
      "M10 20 V36 H34 V20",
      "M22 24 a2.5 2.5 0 1 1 0 5 a2.5 2.5 0 1 1 0 -5 Z",
      "M22 29 L22 33",
    ],
  },
  {
    title: "Lock replacement",
    body: "Upgrade to high-security locks. We fit and supply all major brands including Yale, Chubb, and Mul-T-Lock.",
    paths: [
      // Padlock
      "M12 20 V14 a10 10 0 0 1 20 0 V20",
      "M8 20 h28 v18 h-28 z",
      "M22 26 a2 2 0 1 1 0 4 a2 2 0 1 1 0 -4 Z",
      "M22 30 L22 34",
    ],
  },
  {
    title: "Commercial locks",
    body: "Office, retail, or industrial. We secure businesses of all sizes with master key systems and access control.",
    paths: [
      // Building
      "M7 38 V12 h14 v26",
      "M21 38 V18 h16 v20",
      "M11 17 h3 M11 23 h3 M11 29 h3",
      "M25 22 h3 M25 28 h3 M25 34 h3",
      "M5 38 h36",
    ],
  },
  {
    title: "Automotive",
    body: "Car, van, or motorcycle. We open vehicles and replace keys without dealer prices or long waits.",
    paths: [
      // Car
      "M5 28 L9 18 h26 L39 28",
      "M4 28 h36 v7 h-36 z",
      "M11 35 v3 M33 35 v3",
      "M11 28 a2 2 0 1 1 0 -0.01 Z",
      "M33 28 a2 2 0 1 1 0 -0.01 Z",
    ],
  },
  {
    title: "Burglary repair",
    body: "Break-in? We'll secure your property immediately, board up if needed, and fit new locks the same visit.",
    paths: [
      // Shield with checkmark
      "M22 5 L36 10 v12 c0 10 -7 16 -14 19 c-7 -3 -14 -9 -14 -19 V10 Z",
      "M15 22 L20 27 L30 17",
    ],
  },
  {
    title: "uPVC & composite doors",
    body: "Specialist in multipoint lock mechanisms. We fix and replace door mechanisms other locksmiths won't touch.",
    paths: [
      // Door
      "M10 6 h24 v34 h-24 z",
      "M14 10 h16 v26 h-16 z",
      "M28 22 a1.5 1.5 0 1 1 0 3 a1.5 1.5 0 1 1 0 -3 Z",
      "M28 25 L28 28",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-silver-light py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <FadeUp whenInView className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
          <p className="eyebrow text-navy-mid mb-5">Our Services</p>
          <h2 className="font-display font-bold text-navy-deep text-4xl md:text-5xl leading-[1.05] tracking-tight mb-5">
            Every lock. Every situation.
          </h2>
          <p className="font-sans text-lg text-text-muted">
            Residential, commercial, and automotive &mdash; we handle it all.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <StaggerItem
              key={s.title}
              className="group relative rounded-xl border border-silver bg-card-bg p-7 md:p-8 transition-all duration-[250ms] hover:-translate-y-1.5 hover:border-navy-light hover:shadow-[0_12px_40px_rgba(12,68,124,0.12)]"
            >
              <div className="text-navy-light group-hover:text-navy-mid transition-colors duration-200 mb-5">
                <DrawIcon
                  width={36}
                  height={36}
                  viewBox="0 0 44 44"
                  strokeColor="currentColor"
                  strokeWidth={1.75}
                >
                  {s.paths.map((d, idx) => (
                    <path key={idx} d={d} />
                  ))}
                </DrawIcon>
              </div>
              <h3 className="font-display font-bold text-xl md:text-[22px] text-navy-deep mb-3 leading-tight tracking-tight">
                {s.title}
              </h3>
              <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                {s.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

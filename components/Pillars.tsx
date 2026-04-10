type Pillar = {
  numeral: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const iconProps = {
  width: 44,
  height: 44,
  viewBox: "0 0 44 44",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const LeafIcon = (
  <svg {...iconProps} aria-hidden="true">
    <path d="M7 37c0-16 11-26 30-30-2 19-14 30-30 30Z" />
    <path d="M7 37 24 20" />
    <path d="M18 26l6 3" />
    <path d="M25 19l4 4" />
  </svg>
);

const ForkIcon = (
  <svg {...iconProps} aria-hidden="true">
    <path d="M14 5v11a4 4 0 0 0 8 0V5" />
    <path d="M18 19v20" />
    <path d="M30 5c-3 0-5 3-5 8s2 8 5 8v18" />
  </svg>
);

const HandshakeIcon = (
  <svg {...iconProps} aria-hidden="true">
    <path d="M4 22l7-7 4 2 6-4 6 2 7 7" />
    <path d="M15 18l6 6 3-2 6 6" />
    <path d="M22 30l3 3" />
    <path d="M26 26l3 3" />
  </svg>
);

const pillars: Pillar[] = [
  {
    numeral: "I",
    title: "Locally sourced",
    body: "Every ingredient on our menu is sourced from farms within 30 miles of our kitchen. No exceptions.",
    icon: LeafIcon,
  },
  {
    numeral: "II",
    title: "Seasonal menu",
    body: "Our menu changes with the seasons. What's on your plate today was in the ground last week.",
    icon: ForkIcon,
  },
  {
    numeral: "III",
    title: "Honest cooking",
    body: "No theatre. No foam. Just carefully prepared food made by people who care.",
    icon: HandshakeIcon,
  },
];

export default function Pillars() {
  return (
    <section id="principles" className="bg-white py-20 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <div className="text-center mb-16 md:mb-24">
          <p className="eyebrow ornament-rule mb-6">
            <span>Our principles</span>
          </p>
          <h2 className="font-display text-green-deep text-3xl md:text-5xl leading-[1.1] max-w-2xl mx-auto">
            Three things we will
            <br className="hidden sm:block" /> never compromise on.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="relative flex flex-col items-start pl-0 md:pl-8 md:border-l md:border-cream-border md:first:border-l-0 md:first:pl-0"
            >
              <span className="font-display italic text-green-light text-sm tracking-wider mb-5">
                {p.numeral}
              </span>
              <div className="text-green-light mb-6">{p.icon}</div>
              <h3 className="font-display text-2xl md:text-[28px] text-green-deep mb-4 leading-tight">
                {p.title}
              </h3>
              <span className="block w-10 h-px bg-cream-border mb-5" />
              <p className="font-sans text-[15px] md:text-base text-text-warm leading-relaxed max-w-sm font-light">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

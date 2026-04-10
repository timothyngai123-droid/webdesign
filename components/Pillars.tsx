type Pillar = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const iconProps = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "#639922",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const LeafIcon = (
  <svg {...iconProps} aria-hidden="true">
    <path d="M6 34c0-14 10-24 28-28-2 18-14 28-28 28Z" />
    <path d="M6 34 22 18" />
  </svg>
);

const ForkIcon = (
  <svg {...iconProps} aria-hidden="true">
    <path d="M13 4v12a4 4 0 0 0 8 0V4" />
    <path d="M17 20v16" />
    <path d="M27 4c-3 0-5 3-5 8s2 8 5 8v16" />
  </svg>
);

const HandshakeIcon = (
  <svg {...iconProps} aria-hidden="true">
    <path d="M4 20l6-6 4 2 6-4 6 2 6 6" />
    <path d="M14 16l5 5 3-2 5 5" />
    <path d="M20 28l3 3" />
    <path d="M24 24l3 3" />
  </svg>
);

const pillars: Pillar[] = [
  {
    title: "Locally sourced",
    body: "Every ingredient on our menu is sourced from farms within 30 miles of our kitchen. No exceptions.",
    icon: LeafIcon,
  },
  {
    title: "Seasonal menu",
    body: "Our menu changes with the seasons. What's on your plate today was in the ground last week.",
    icon: ForkIcon,
  },
  {
    title: "Honest cooking",
    body: "No theatre. No foam. Just carefully prepared food made by people who care.",
    icon: HandshakeIcon,
  },
];

export default function Pillars() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-start">
              <div className="mb-6">{p.icon}</div>
              <h3 className="font-display text-2xl md:text-[28px] text-green-deep mb-3">
                {p.title}
              </h3>
              <p className="font-sans text-base text-text-warm leading-relaxed max-w-sm">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

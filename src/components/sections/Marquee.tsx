'use client';

const items = [
  'Custom Coded',
  '3D Animations',
  'Framer Motion',
  'Next.js',
  'Tailwind CSS',
  'Full Hosting Control',
  'Premium Feel',
  'Built to Convert',
];

export default function Marquee() {
  const content = items.map((item) => `\u2605 ${item} `).join('');

  return (
    <section className="py-8 border-y border-[#1F1F23] overflow-hidden">
      <div className="marquee-container group">
        <div className="marquee-content group-hover:[animation-play-state:paused]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="text-sm md:text-base uppercase tracking-[0.3em] font-medium whitespace-nowrap"
              style={{ color: '#7C3AED' }}
            >
              {content}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

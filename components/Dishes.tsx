// PLACEHOLDER CONTENT: sample weekly menu — replace with real dishes before launch.
const dishes = [
  {
    course: "To begin",
    name: "Heritage tomato & burrata",
    description:
      "Sun Gold tomatoes, house-made burrata, basil oil, sourdough crisp.",
    price: "14",
  },
  {
    course: "Main",
    name: "Slow-roast lamb shoulder",
    description:
      "28-day aged Cotswold lamb, root vegetable gratin, rosemary jus.",
    price: "28",
  },
  {
    course: "To finish",
    name: "Forced rhubarb tart",
    description:
      "Shortcrust pastry, crème pâtissière, Oxfordshire rhubarb, pistachio.",
    price: "9",
  },
];

export default function Dishes() {
  return (
    <section
      id="menu"
      className="relative bg-cream-bg py-20 md:py-32 overflow-hidden grain"
    >
      <div className="relative max-w-content mx-auto px-6 md:px-16">
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow ornament-rule mb-6">
            <span>This week&apos;s harvest</span>
          </p>
          <h2 className="font-display text-green-deep text-3xl md:text-5xl leading-[1.1]">
            A taste of what&apos;s
            <span className="italic font-normal"> on this week</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group relative bg-cream-card border border-cream-border rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(28,58,15,0.22)] hover:border-green-mid/30"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="eyebrow text-green-mid/80">{dish.course}</span>
                <span className="h-px flex-1 mx-4 bg-cream-border" />
                <span className="font-display text-lg text-green-mid tabular">
                  £{dish.price}
                </span>
              </div>
              <h3 className="font-display text-[22px] md:text-2xl text-green-deep mb-4 leading-snug">
                {dish.name}
              </h3>
              <p className="font-sans text-[15px] text-text-warm leading-relaxed font-light flex-1">
                {dish.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center italic text-sm text-text-warm/80 font-display">
          Menu changes weekly. Ask your server about today&apos;s specials.
        </p>
      </div>
    </section>
  );
}

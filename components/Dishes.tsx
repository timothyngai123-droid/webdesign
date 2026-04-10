// PLACEHOLDER CONTENT: sample weekly menu — replace with real dishes before launch.
const dishes = [
  {
    name: "Heritage tomato & burrata",
    description:
      "Sun Gold tomatoes, house-made burrata, basil oil, sourdough crisp.",
    price: "£14",
  },
  {
    name: "Slow-roast lamb shoulder",
    description:
      "28-day aged Cotswold lamb, root vegetable gratin, rosemary jus.",
    price: "£28",
  },
  {
    name: "Forced rhubarb tart",
    description:
      "Shortcrust pastry, creme patissiere, Oxfordshire rhubarb, pistachio.",
    price: "£9",
  },
];

export default function Dishes() {
  return (
    <section id="menu" className="bg-cream-bg py-16 md:py-24">
      <div className="max-w-content mx-auto px-6 md:px-16">
        <h2 className="font-display text-green-deep text-center text-3xl md:text-5xl mb-12 md:mb-16">
          A taste of what&apos;s on this week
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="bg-cream-card border border-cream-border rounded-xl p-8 md:p-10 flex flex-col"
            >
              <h3 className="font-display text-xl md:text-2xl text-green-deep mb-4 leading-snug">
                {dish.name}
              </h3>
              <p className="font-sans text-base text-text-warm leading-relaxed flex-1">
                {dish.description}
              </p>
              <p className="mt-6 text-sm font-medium text-green-mid">
                {dish.price}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center italic text-sm text-text-warm">
          Menu changes weekly. Ask your server about today&apos;s specials.
        </p>
      </div>
    </section>
  );
}

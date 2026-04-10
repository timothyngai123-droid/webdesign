export default function Footer() {
  return (
    <footer className="bg-green-deep border-t border-green-mid">
      <div className="max-w-content mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <p className="font-display text-2xl text-cream-light">
              Grove &amp; Grain
            </p>
            <p className="mt-3 text-sm text-cream-light leading-relaxed max-w-xs">
              A farm-to-table neighbourhood bistro in Aylesbury town centre.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cream-light/70 mb-4">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-cream-light">
              <li>
                <a href="#menu" className="hover:text-cream-bg transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cream-bg transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#reserve" className="hover:text-cream-bg transition-colors">
                  Reserve
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cream-light/70 mb-4">
              Visit
            </p>
            <address className="not-italic text-sm text-cream-light leading-relaxed">
              12 Market Square
              <br />
              Aylesbury, HP20 1TN
            </address>
            <p className="mt-4 text-sm text-cream-light leading-relaxed">
              Tue – Sat: 12 – 22:00
              <br />
              Sun: 12 – 17:00
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-green-mid">
          <p className="text-xs text-cream-light/70">
            © 2025 Grove &amp; Grain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

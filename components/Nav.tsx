import LogoMark from "./LogoMark";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-cream-bg border-b border-cream-border">
      <div className="max-w-content mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Grove & Grain — home"
        >
          <LogoMark className="h-9 w-auto text-green-deep transition-transform duration-300 group-hover:-rotate-3" />
          <span className="font-display text-xl md:text-[22px] text-green-deep tracking-[0.01em] leading-none">
            Grove <span className="italic font-normal">&amp;</span> Grain
          </span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <a
            href="#menu"
            className="hidden sm:inline text-sm font-medium text-green-deep hover:text-green-mid transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-green-mid after:transition-all hover:after:w-full"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hidden sm:inline text-sm font-medium text-green-deep hover:text-green-mid transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-green-mid after:transition-all hover:after:w-full"
          >
            About
          </a>
          <a
            href="#reserve"
            className="inline-flex items-center rounded-full bg-green-mid px-5 py-2.5 text-sm font-medium text-cream-bg hover:bg-green-deep transition-colors shadow-[0_1px_0_rgba(28,58,15,0.15)]"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  );
}

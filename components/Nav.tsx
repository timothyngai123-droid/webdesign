export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-cream-bg border-b border-cream-border">
      <div className="max-w-content mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Grove & Grain home">
          {/* Logo image — upload will be placed at /public/logo.png */}
          <img
            src="/logo.png"
            alt="Grove & Grain"
            className="h-10 w-auto"
          />
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <a
            href="#menu"
            className="hidden sm:inline text-sm font-medium text-green-deep hover:text-green-mid transition-colors"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hidden sm:inline text-sm font-medium text-green-deep hover:text-green-mid transition-colors"
          >
            About
          </a>
          <a
            href="#reserve"
            className="inline-flex items-center rounded-full bg-green-mid px-5 py-2.5 text-sm font-medium text-cream-bg hover:bg-green-deep transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </nav>
  );
}

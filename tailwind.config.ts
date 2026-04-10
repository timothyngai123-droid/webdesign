import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // KeyMaster 24
        "navy-deep": "#0C2340",
        "navy-mid": "#0C447C",
        "navy-light": "#378ADD",
        silver: "#B4B2A9",
        "silver-light": "#F2F3F5",
        "card-bg": "#FFFFFF",
        "text-dark": "#0C2340",
        "text-muted": "#5A6472",
        "urgent-green": "#1D9E75",
        // Grove & Grain
        "green-deep": "#1C3A0F",
        "green-mid": "#2D5A1B",
        "green-light": "#639922",
        "cream-bg": "#FAF6ED",
        "cream-card": "#FDF9F0",
        "cream-border": "#D9CDB4",
        "text-warm": "#5C5043",
        "cream-light": "#C8B99A",
      },
      fontFamily: {
        // `font-display` resolves via a CSS custom property that each
        // brand-scope class (.km-scope / .gg-scope) sets to the right
        // family. Components can keep using `className="font-display"`
        // regardless of which brand page they end up on.
        display: [
          "var(--font-display-active, var(--font-barlow))",
          "system-ui",
          "sans-serif",
        ],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

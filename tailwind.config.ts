import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;

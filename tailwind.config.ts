import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        panel: "rgb(var(--panel-rgb) / <alpha-value>)",
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-strong": "rgb(var(--surface-strong-rgb) / <alpha-value>)",
        copy: "rgb(var(--text-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        quiet: "rgb(var(--quiet-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-deep": "rgb(var(--accent-deep-rgb) / <alpha-value>)",
        sunshine: "rgb(var(--sunshine-rgb) / <alpha-value>)",
        electric: "rgb(var(--accent-rgb) / <alpha-value>)",
        line: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "Newsreader",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        "accent-line": "0 0 0 1px rgba(255, 130, 4, 0.24)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;

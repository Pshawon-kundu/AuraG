import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#070814",
        surface: "#0f1326",
        surfaceSoft: "#13193a",
        line: "rgba(255,255,255,0.08)",
        text: "#f5f7ff",
        muted: "#98a2c7",
        accent: {
          blue: "#3aa0ff",
          cyan: "#18d0d3",
          lime: "#8eff3f",
          pink: "#ff4fa0",
          amber: "#ffba39",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(17, 24, 39, 0.55)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top left, rgba(58,160,255,0.22), transparent 32%), radial-gradient(circle at top right, rgba(255,79,160,0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(24,208,211,0.16), transparent 28%)",
        grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

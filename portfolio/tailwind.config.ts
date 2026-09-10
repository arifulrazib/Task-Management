import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#181B1F",
          secondary: "#1D2126",
          card: "#20252A",
        },
        accent: {
          DEFAULT: "#00E5A0",
          soft: "rgba(0,229,160,0.12)",
          glow: "rgba(0,229,160,0.35)",
        },
        ink: {
          DEFAULT: "#F2F4F5",
          secondary: "#A4A9AE",
          muted: "#70767D",
        },
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        shell: "1240px",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "grid-drift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-40px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
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

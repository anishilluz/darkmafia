/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pitch: {
          950: "#050507",
          900: "#08080A",
          850: "#0D0E13",
          800: "#12141C",
          700: "#1A1D27",
          600: "#242838",
        },
        cyan: {
          DEFAULT: "#00F0FF",
          glow: "rgba(0, 240, 255, 0.4)",
          muted: "#00B4D8",
          dark: "#007799",
        },
        purple: {
          DEFAULT: "#9D00FF",
          glow: "rgba(157, 0, 255, 0.4)",
          deep: "#7209B7",
          dark: "#480CA8",
        },
        devil: {
          DEFAULT: "#FF2A55",
          glow: "rgba(255, 42, 85, 0.4)",
          dark: "#990022",
        },
        chrome: {
          100: "#F8FAFC",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px -5px rgba(0, 240, 255, 0.4)",
        "purple-glow": "0 0 25px -5px rgba(157, 0, 255, 0.4)",
        "devil-glow": "0 0 25px -5px rgba(255, 42, 85, 0.4)",
        "card-dark": "0 8px 30px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "sweep": "sweep 2s ease-in-out infinite",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        }
      }
    },
  },
  plugins: [],
};

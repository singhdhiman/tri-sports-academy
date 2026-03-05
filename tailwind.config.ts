import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a2e0f",
          50: "#f0f7f0",
          100: "#d9edd9",
          200: "#b5ddb6",
          300: "#85c587",
          400: "#52a855",
          500: "#318c35",
          600: "#247028",
          700: "#1f5a22",
          800: "#1c4820",
          900: "#0a2e0f",
        },
        accent: {
          DEFAULT: "#c9a227",
          light: "#e5c04a",
          dark: "#a8851f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s cubic-bezier(0.21, 0.47, 0.32, 0.98) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        steel: {
          dark:   "#0B1F3A",
          yellow: "#FACC15",
        },
      },

      // ── Mobile menu slide animations ──────────────────────────────────────
      keyframes: {
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%":   { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-12px)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.22s ease-out forwards",
        slideUp:   "slideUp 0.22s ease-out forwards",
      },
    },
  },
  plugins: [],
};
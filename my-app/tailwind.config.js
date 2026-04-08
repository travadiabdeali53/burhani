/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        steel: {
          dark: '#0B1F3A',
          yellow: '#FACC15',
        }
      }
    },
  },
  plugins: [],
}
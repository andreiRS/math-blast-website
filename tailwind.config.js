/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        'math-blue': {
          light: '#69A1FF',
          DEFAULT: '#4B87FF',
          dark: '#3B6AD9',
        },
        'math-pink': '#FFB5B5',
        'math-mint': '#B8F4D6',
        'math-orange': '#FFC278',
        'math-purple': '#F2EEFF',
      },
    },
  },
  plugins: [],
}

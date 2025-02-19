/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        'brand': {
          blue: '#4361EE',
          pink: '#FF6B6B',
          mint: '#4ECCA3',
          orange: '#FF9F1C',
          purple: '#7209B7',
          yellow: '#FFD93D',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

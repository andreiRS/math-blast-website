/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB', 
        'primary-light': '#60A5FA',
        'primary-dark': '#1D4ED8',
        'accent': '#FF5722', 
        'accent-light': '#FF7A50',
        'accent-dark': '#F4511E',
        'background': '#EEF2FF',
        'wave': '#93C5FD',
        'success': '#22C55E', 
        'warning': '#EAB308', 
        'error': '#EF4444',  
        'rainbow': {
          'red': '#FF4B4B',
          'orange': '#FF7E47',
          'yellow': '#FFD23F',
          'green': '#4ADE80',
          'blue': '#3B82F6',
          'purple': '#A855F7',
          'pink': '#EC4899',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'wave-pattern': "url('/wave-pattern.svg')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wave': 'wave 25s linear infinite',
        'wave-slow': 'wave 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0) scale(150%)' },
          '100%': { transform: 'translateX(-50%) scale(150%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

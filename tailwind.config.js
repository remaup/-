/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          navy: '#0a192f',
          blue: '#0056b3',
          light: '#e6f1fa',
          dark: '#0a192f',
          primary: '#0056b3',
          secondary: '#8b5cf6',
          accent: '#06b6d4',
        },
        slate: {
          950: '#020618',
        },
        blue: {
          400: '#54a2ff',
          500: '#3080ff',
          600: '#155dfc',
        },
        violet: {
          400: '#c07eff', // Mapping purple-400 from CSS to violet-400 for compatibility
          500: '#ac4bff',
          600: '#9810fa',
        },
        cyan: {
          400: '#00d2ef',
          500: '#00b7d7',
          600: '#0092b5',
        }
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'bounce-once': 'bounce-once 0.6s ease-in-out',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-once': {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(-5px)' },
          '70%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

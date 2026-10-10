/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          navy: '#042B44',
          cerulean: '#096B90',
          ice: '#A1CCDC',
          darkest: '#08171E',
          sky: '#71B7D5',
        },
        dark: {
          950: '#08171E', // Darkest Obsidian Midnight
          900: '#042B44', // Deep Ocean Navy
          850: '#063452', // Surface
          800: '#0A466D', // Card Border / Hover
          750: '#0C5380',
        },
        brand: {
          primary: '#096B90',
          sky: '#71B7D5',
          ice: '#A1CCDC',
          navy: '#042B44',
          darkest: '#08171E',
          cyan: '#71B7D5',
          indigo: '#096B90',
          emerald: '#71B7D5',
          amber: '#A1CCDC',
          rose: '#E06D75',
          purple: '#096B90',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sky': '0 0 25px -5px rgba(113, 183, 213, 0.45)',
        'glow-cerulean': '0 0 25px -5px rgba(9, 107, 144, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(113, 183, 213, 0.4)',
        'glow-indigo': '0 0 25px -5px rgba(9, 107, 144, 0.4)',
        'glow-emerald': '0 0 25px -5px rgba(161, 204, 220, 0.4)',
        'card-light': '0 10px 30px -10px rgba(4, 43, 68, 0.08), 0 0 0 1px rgba(161, 204, 220, 0.35)',
        'card-dark': '0 15px 35px -10px rgba(8, 23, 30, 0.8), 0 0 0 1px rgba(161, 204, 220, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

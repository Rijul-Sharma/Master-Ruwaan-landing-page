/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Master Ruwaan's Forest Theme
        'forest': {
          50: '#f0f4f0',
          100: '#e1e9e1',
          200: '#c3d3c3',
          300: '#a5bda5',
          400: '#87a787',
          500: '#699169',
          600: '#547454',
          700: '#3f573f',
          800: '#2a3a2a',
          900: '#151d15',
          950: '#0a0f0a',
        },
        'sage': {
          50: '#f8f9f6',
          100: '#f1f3ed',
          200: '#e3e7db',
          300: '#d5dbc9',
          400: '#c7cfb7',
          500: '#b9c3a5',
          600: '#949c84',
          700: '#6f7563',
          800: '#4a4e42',
          900: '#252721',
        },
        'mystic': {
          'dark': '#0a0a0a',
          'charcoal': '#1a1a1a',
          'deep-green': '#0f1a0f',
          'forest-green': '#1a2a1a',
          'sage-green': '#4a5d4a',
          'emerald': '#2fd074',
          'moss': '#2a3a2a',
          'text-primary': '#e8e3d8',
          'text-secondary': '#b9ccb7',
          'text-accent': '#dcd6c2',
        }
      },
      fontFamily: {
        'crimson': ['Crimson Pro', 'serif'],
        'cinzel': ['Cinzel Decorative', 'serif'],
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(180deg, #0f1a0f 0%, #1a2a1a 100%)',
        'sage-gradient': 'linear-gradient(160deg, #2a3a2a 0%, #4a5d4a 100%)',
      },
      animation: {
        'shimmer': 'shimmer 4s linear infinite',
        'fade-in': 'fadeIn 3s ease-in',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { 
            opacity: '0.85',
            filter: 'drop-shadow(0 0 2px #2fd07466)'
          },
          '50%': { 
            opacity: '1',
            filter: 'drop-shadow(0 0 8px #2fd074cc)'
          },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #2fd07433, 0 0 10px #2fd07433, 0 0 15px #2fd07433'
          },
          '100%': { 
            boxShadow: '0 0 10px #2fd07466, 0 0 20px #2fd07466, 0 0 30px #2fd07466'
          },
        },
      },
    },
  },
  plugins: [],
}

 
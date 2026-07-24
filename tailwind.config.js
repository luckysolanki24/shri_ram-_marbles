/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        surface: '#141414',
        'surface-2': '#1C1C1C',
        text: '#D7E2EA',
        'text-muted': '#8A9BAB',
        gold: '#C8A96A',
        'gold-light': '#E2C98A',
        'gold-dark': '#A08545',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        sans: ['Kanit', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8A96A 0%, #E2C98A 50%, #C8A96A 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0C0C0C 0%, #1a1a1a 100%)',
        'card-gradient': 'linear-gradient(145deg, #1C1C1C 0%, #141414 100%)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FFF8E7',
        pink: '#FF8FAB',
        brown: '#59382B',
        mint: '#B8E6D0',
        lavender: '#DCD6F7',
        white: '#FFFFFF',
      },
      boxShadow: {
        soft: '0 20px 45px rgba(89, 56, 43, 0.12)',
      },
    },
  },
  plugins: [],
};

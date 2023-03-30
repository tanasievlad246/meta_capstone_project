/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderColor: {
      green: '#495E57',
      yellow: '#F4CE14',
      salmon: '#EE9972',
      beige: '#FBDABB',
      lightgray: '#EDEFEE',
      black: '#333333',
      red: '#E74C3C',
    },
    colors: {
      green: '#495E57',
      yellow: '#F4CE14',
      salmon: '#EE9972',
      beige: '#FBDABB',
      lightgray: '#EDEFEE',
      black: '#333333',
      red: '#E74C3C',
    },
    fontFamily: {
      'sans': ['Karla', 'sans-serif'],
      'serif': ['Markazi Text', 'serif'],
    },
    extend: {},
    keyframes: {
      'open-menu': {
        '0%': { transform: 'scaleY(0)' },
        '80%': { transform: 'scaleY(1.2)' },
        '100%': { transform: 'scaleY(1)' },
      },
      'close-menu': {
        '0%': { transform: 'scaleY(1)' },
        '80%': { transform: 'scaleY(1.2)' },
        '100%': { transform: 'scaleY(0)' },
      }
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
      'close-menu': 'close-menu 0.5s ease-in-out forwards',
    },
    plugins: [],
  }
}

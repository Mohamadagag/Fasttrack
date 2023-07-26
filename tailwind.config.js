/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#eccf2c',
        text: '#cccccc',
      },
      animation: {
        'pulse-fast': 'pulse 0.7s linear infinite',
      },
    },
  },
  plugins: [],
};

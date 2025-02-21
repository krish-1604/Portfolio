/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '128': '32rem',
        '160': '40rem',
      },
      zIndex: {
        '60': '60',
      },
      colors: {
        'nav-dark': '#1E1E1E',
        'nav-orange': '#FF8A52',
      },
      fontFamily: {
        'cygre': ['Cygre', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'baseneuetrial': ['BaseNeueTrial', 'sans-serif'],
        'georgiaI': ['GeorgiaI', 'serif'],
      },
    },
  },
  plugins: [],
}
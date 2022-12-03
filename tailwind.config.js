/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / 1)',
        textColor: 'rgb(var(--text-color) / 1)',
        textColorActive: 'rgb(var(--text-color-active) / 1)',
        primaryGreen: 'rgb(var(--green) / 1)',
        primaryRed: 'rgb(var(--red) / 1)',
      }
    },
  },
  plugins: [],
}
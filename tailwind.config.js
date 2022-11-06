/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray': "#909497",
        'grey': "#B3B6B7",
        'black': "#000000"
      },
      maxHeight:{
        'hfoto': '539'
      }
    },
  },
  plugins: [],
}
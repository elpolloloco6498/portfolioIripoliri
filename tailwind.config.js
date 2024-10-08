/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ffb727",
        background: "#d8d5d200",
        secondary: "#F46E8F"
      },
      fontFamily: {
        prata: ['Prata', 'serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
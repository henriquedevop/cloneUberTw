/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'uber': "url('src/assets/bguber.png')",
        'city': "url('src/assets/bg-city.png')",
      }
    },
  },
  plugins: [],
}
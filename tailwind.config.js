/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#1f0b51',
        gold: '#D4AF37',
        champagne: '#F7E7CE',
        cream: '#FFF9F0',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
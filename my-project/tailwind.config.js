/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphiteblack: '#1A202C', 
        aquagreen: '#38B2AC',
        darkaquagreen: '#2D9D95',
        lightgray: '#E2E8F0',

      }
    },
  },
  plugins: [],
}




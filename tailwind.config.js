/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "pr-black": "#0C0C0C",
        "sr-black": "#0F0F0F",
        "tr-black": "#131313",
        "qt-black": "#1D1D1D",
        "pr-lavender": "#7456FF",
        "sr-lavender": "#8368FF",
        "tr-lavender": "#A693FF",
        "pr-gray": "#707070",
        "sr-gray": "#999999"
      },
      screens: {
        'noteBook': '1145px',
        'tablet': '900px',
        'miniTablet': '700px',
        'ipad': '800px',
        'hp': '500px',
        'miniHp': '400px',
        'mini': '300px'
      },
    }
  },
  plugins: [],
}
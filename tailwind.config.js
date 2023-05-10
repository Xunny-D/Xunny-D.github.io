/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/*.{html}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'houstonNeon': 'url(/Dependencies/img/computersNeon.JPG)'
      },
      fontFamily: {
        'Revamped':['Revamped', 'sans-serif'],
        'cyberpunk':['Cyberpunk', 'sans-serif']
      },
    },
  },
  plugins: [],
}

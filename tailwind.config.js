/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/*.{html}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'vintageNeon': 'url(/Dependencies/img/computersNeon.JPG)',
        'houstonNeon': 'url(/Dependencies/img/houstonBackgroundCyber.png)',
        'neonBackground': 'url(/Dependencies/img/neonBackdrop.png)',
        'neonSpeaker': 'url(/Dependencies/img/neonSpeaker.png)'
      },
      fontFamily: {
        'Cyberpunk':['Cyberpunk', 'sans-serif'],
        'Revamped':['Revamped', 'sans-serif'],
        'Hacked':['Hacked', 'sans-serif'],
        'Alpha':['Alpha', 'sans-serif'],
        'Bohemian':['Bohemian', 'sans-serif']
      },
      animation:{
        'cursor-move': 'spin 3s linear infinite'
      },
      height:{
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem'
      },
      fontSize:{
        '4.2xl': '2.400rem',
        '4.5xl': '2.600rem',
        '7.5xl': '5.000rem'
      }
    },
  },
  plugins: [],
}

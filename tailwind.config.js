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
        'neonSpeaker': 'url(/Dependencies/img/neonSpeaker.png)',
        'neonChip': 'url(/Dependencies/img/neonChip.png)',
        'neonWave': 'url(/Dependencies/img/neonWave.png)'
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
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '272': '68rem',
        '288': '72rem',
        '304': '76rem',
        '320': '80rem',
        '336': '84rem',
        '400': '100rem',
        '800': '200rem',
        '1200': '300rem'
      },
      fontSize:{
        '4.2xl': '2.400rem',
        '4.5xl': '2.600rem',
        '7.5xl': '5.000rem'
      },
      colors:{
        'neonBlue': '#40A4FF',
      },
    },
  },
  plugins: [],
}

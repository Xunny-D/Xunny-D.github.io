/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Dependencies/events.js",
    "./Dependencies/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'vintageNeon': 'url(/Dependencies/img/computersNeon.JPG)',
        'houstonNeon': 'url(/Dependencies/img/houstonBackgroundCyber.png)',
        'neonBackground': 'url(/Dependencies/img/neonBackdrop.png)',
        'neonSpeaker': 'url(/Dependencies/img/neonSpeaker.png)',
        'neonChip': 'url(/Dependencies/img/neonChip.png)',
        'neonWave': 'url(/Dependencies/img/neonWave.png)',
        'neonMicro': 'url(/Dependencies/img/neonMicro.png)',
        'neonCity': 'url(/Dependencies/img/neonCity.jpg)',
        'neonMobile': 'url(/Dependencies/img/neonMobile.png)',
        'neonMobileWave': 'url(/Dependencies/img/neonMobileWave.png)',
        'neonMobileTunnel': 'url(/Dependencies/img/neonMobileTunnel.png)'
      },
      fontFamily: {
        'Cyberpunk':['Cyberpunk', 'sans-serif'],
        'Revamped':['Revamped', 'sans-serif'],
        'Hacked':['Hacked', 'sans-serif'],
        'Alpha':['Alpha', 'sans-serif'],
        'Bohemian':['Bohemian', 'sans-serif']
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
      transitionProperty:{
        'max-height': 'max-height',
        'height': 'height'
      },
      transitionDuration:{
        '0.25s': '0.25s',
        '0.5s': '0.5s',
        '0.75s': '0.75s',
        '1s': '1s',
        '4s': '4s',
        '15s': '15s',
        '20s': '20s'
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in normal",
        expandVertical: "expandVertical 1s linear"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        expandVertical: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lcd: ['"Press Start 2P"', 'sans-serif']
      },
      colors: {
        'light-green': '#86EAAF',
        'medium-gray': 'rgba(210, 210, 211, .25)',
        'light-gray': 'rgb(221, 222, 226)',
        'lightest-gray': '#FCFCFD',
        'dark-gray': '#282828',
        'light-transparent': 'hsl(0deg 0% 100% / 45%)',
        'light-medium': 'hsla(0, 0%, 100%, .7)',
        'button-color': 'rgb(84,179,165)',
        'button-color-hover': 'rgb(99,214,109)',
        'popup-overlay': 'rgba(0, 0, 0, .4)',
        'popup-background': 'rgb(33, 36, 41)',
        'card-dark': '#141A25',
        'card-dark-text': '#AFB3BA',
        'green-punk': '#00ED7B',
        'green-punk-2': '#65E2A2'
      }
    }
  },
  plugins: []
};

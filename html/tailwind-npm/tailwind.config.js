/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',],
  theme: {
    extend: {
      colors: {
        gula: '#D04848',
        calo: '#0B60B0'
      }
    },
  },
  plugins: [],
}


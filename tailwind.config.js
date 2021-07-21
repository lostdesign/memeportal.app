const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: {
    enabled: process.env.NODE_ENV !== 'production',
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.svg']
  },
  theme: {},
  variants: {},
  plugins: []
}

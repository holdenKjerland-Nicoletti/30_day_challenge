const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './node_modules/daisyui'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel Decorative', 'cursive'],
        'megrim': ['Megrim', 'cursive']
      },
      colors: {
        cyan: colors.cyan,
        lime: colors.lime,
      }
    },
  },
  variants: {
    extend: {
      fontSize: ['hover']
    },
  },
  plugins: [
    require('daisyui')
  ],
}

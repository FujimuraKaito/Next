module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        small: '500px',  // sm規定は640
        medium: '800px',  // md規定は768
        large: '1024px',  // lg規定は1024
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

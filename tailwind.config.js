module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: '#232946',
        main: '#b8c1ec',
        secondary: '#fffffe',
        highlight: '#eebbc3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

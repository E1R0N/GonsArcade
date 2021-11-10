module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      gray: {
        dark: '#172A3A',
        light: '#D0D4D7'
      },
      white: {
        DEFAULT: '#EEEEEE'
      },
      blue: {
        light: '#32E0C4'
      },
      green: {
        light: '#09bc8a',
        dark: '#004346'
      }
    }
  },
  variants: {
    extend: {
      display: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
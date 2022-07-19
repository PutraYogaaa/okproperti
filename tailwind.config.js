/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        'primary': '#F3821A',
        'secondary': '#1B2430',
        'text1': '#000000',
        'text2': '#413F42',
        'text3': '#9D9D9D',
        'text4': '#B4B4B4',
      },
    },
  },
  plugins: [],
}
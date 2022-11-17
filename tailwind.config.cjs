/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './src/**/*.jsx',],
  theme: {
    extend: {backgroundImage: {
      'pencil1': "url('../public/util/pencil1.png')",
      'pencil2': "url('../public/util/pencil2.png')",
    },},
  },
  plugins: [],
}

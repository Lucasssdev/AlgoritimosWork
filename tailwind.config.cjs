/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './src/**/*.jsx',],
  theme: {
    extend: {backgroundImage: {
      'gradient': "url('../public/util/gradientjpg.jpg')",
      'blueEyellow': "url('../public/util/blueEyellow.jpg')",
      
    },
    boxShadow: {
      '3xl': '0px 5px 15px rgba(0, 0, 0, 0.35)', 
    }}
  },

  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

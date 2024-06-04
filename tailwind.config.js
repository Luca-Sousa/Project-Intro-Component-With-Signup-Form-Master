/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'col-R': 'hsl(0, 100%, 74%) ',
        'col-G': 'hsl(154, 59%, 51%)',
        'col-B': 'hsl(248, 32%, 49%)',
        'col-DB': 'hsl(249, 10%, 26%)',
        'col-GB': 'hsl(246, 25%, 77%)'
      },
      fontFamily: {
        'P': 'Poppins'
      },
      backgroundImage: {
        'Img-D': "url('/images/bg-intro-desktop.png')",
        'Img-M': "url('/images/bg-intro-mobile.png')"
      },
      boxShadow: {
        'bS': '0px 8px 0px 0px rgba(0,0,0,0.15)',
        'bSG': '0px 5px 0px 0px rgba(73,174,132,255)'
      }
    },
  },
  plugins: [],
}


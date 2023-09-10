/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#0E2954',
        secondary : '#1F6E8C',
        tertiary : '#00B9FF',
        quaternary : '#4ED9EF'
      },
      fontFamily : {
        'poppins' : ['Poppins']
      },
      keyframes : {
        zoomIn : {
          '0%' : {transform : 'scale(0.8)'},
          '100%' : {transform : 'scale(1)'}
        },
        float : {
          '0%,100%' : {transform : 'translateY(-12px)'},
          '50%' : {transform : 'translateY(0px)'}
        }
      },
      animation : {
        'zoom-in' : 'zoomIn 0.5s ease-in-out',
        'float' : 'float 1.5s infinite linear'
      }
    },
  },
  plugins: [],
}


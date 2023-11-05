/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        primaryColor : '#557A95' ,
        primaryColorLight : '#7395AE',
        secondaryColor : '#FCCD04',
        paragraphColor : '#fff',
        whiteColor : '#fff',
        blueColor : '#3AAFA9',
        blackColor : '#000',
        yellowColor : '#EDD40E',
        orangeColor: '#FF6F00',
        purpleColor: '#673AB7',
        greenColor : '#007936',
        redColor : '#cc3433',
        darkColor : '#000',
        darkColorLight : '#171717',
      },
      keyframes:{
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite'
      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT:'0.2rem',
        sm: '1.5rem'
      }
    },
    fontFamily:{
      oswald: ['Oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    }
  },
  plugins: [],
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
      },
      colors: {
        'wild-sand': '#F5F5F5',
        'gallery': '#EAEAEA',
        'harp': '#DDEFE0',
        'parchment': '#F4ECDD',
        'bizarre': '#EFDADA',
        'snuff': '#DEE0EF',
        'feijoa': '#9BDD7C',
        'tonysPink': '#E9A0A0',
        'light-gray': '#858585',
        'lite-yellow': '#F6DC7D',
        'lite-burgandy': '#EE8484',
        'lite-purple': '#6972C3',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'sm': '700px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      width: {
        '30': '30%',
        '42': '42%',
        '58': '58%',
        '70': '70%',
      },
      height: {
        'box-with-margin': 'calc(100vh - 100px)'
      }
    },
  },
  plugins: [],
}
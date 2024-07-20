/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
     screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'amber': '#f59e0b',
      'orange': '#F59E0B',
      'white': '#ffffff',
      'gray': '#9BA0AF',
      
    },
    extend: {
       fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
      },
       letterSpacing: {
        '1.43px': '1.43px',
      },
      spacing: {
         '257': '257px',
        '395': '395px',
        '650': '650px',
        '136': '136px',
      },
      inset: {
         '257': '257px',
        '395': '395px',
      },
      width: {
       '650': '650px',
      },
      height: {
         '136': '136px',
      },
    },
    
  },
  plugins: [],
}
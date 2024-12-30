/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#282220',
          background: '#f9f6f6',
          primary: '#ebc6b7',
          secondary: '#282220',
          accent: '#9c7163',           
        },
        dark: {
          text: '#e8beac',
          background: '#282220',
          primary: '#c8a595',
          secondary: '#FFFFFF',
          accent: '#9c7163',
        },
      },
      fontFamily: {
        ukijru: ['UKIJRu', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
  darkMode: 'class'
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#00B3A4', 
        accent: '#48A14D',
        dark: '#333',
      },
    },
  },
  plugins: [],
}


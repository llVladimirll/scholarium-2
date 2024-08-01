const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config}*/
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}'
    ],theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/graduate.jpg')"
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      fontFamily:{
        sans: ["Raleway", ...fontFamily.sans],
        body: ["Raleway", ...fontFamily.sans],
        head: ["Raleway", ...fontFamily.sans]
      },
      colors:{
        'night' : "#121212",
        'light' : "#E9E9E9",
        'hover' : "#222222",

      }
    
    },

  }
}
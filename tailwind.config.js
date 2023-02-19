/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        text: "#525252",

        background: "#fffff",
        brand: {


          DEFAULT: "#b9e39a",

          secondary: {


            DEFAULT: "#5957bb",
            dark: "#2e2c68"

          },
          tertiary: {
            light: "#6c6b71",
            DEFAULT: "#2d2e37",
            dark: "#0e0e18"
          }



        }
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        display: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}



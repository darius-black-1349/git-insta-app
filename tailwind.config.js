module.exports = {

  mode : 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : false,
  theme: {
    extend: {

      

    },
  },
  plugins: [

    require("@tailwindcss/forms"),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')

  ],
}

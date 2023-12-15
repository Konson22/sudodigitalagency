/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // cl1:'rgb(201,168,75)',
        cl1:'rgb(155,112,191)',
        rd:'rgb(130, 40, 39)',
        cl2:'rgb(249,140,145)',
        cl3:'rgb(88,212,240)',
        cl4:'rgb(237, 32, 119)',
        cl5:'rgb(135,92,172)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

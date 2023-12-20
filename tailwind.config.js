/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkbg:'rgb(28, 36, 49)',
        greenbg:'rgb(14, 250, 116)',
        bluebg:'#4F98CA',
        yellowgreenbg:'#A7D129',
        lightgreenbg:'#7FDA89',
      }
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{html, jsx, tsx, js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


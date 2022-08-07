/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sourceCode :["Source Code Pro", "monospace"],
        righteous:["Righteous", "cursive"],
        chakra:['Chakra Petch', "sans-serif"]
      },
      colors:{
          puprpule_1:"rgb(213, 184, 255)",
          dark_1:"rgba(0,0,0,1)",
          light_1:"rgba(255,255,255,1)",
          xx:"#161922"
      }
    },
  },
  plugins: [],
}
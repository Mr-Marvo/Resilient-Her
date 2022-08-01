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
          puprpule_1:"#9e0084",
          dark_1:"rgba(0,0,0,.9)",
          light_1:"rgba(255,255,255,0.6)"
      }
    },
  },
  plugins: [],
}
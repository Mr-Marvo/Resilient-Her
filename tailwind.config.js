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
          puprpule_1:"rgb(89,6,80)",
      }
    },
  },
  plugins: [],
}
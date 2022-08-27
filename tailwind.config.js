/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '320px',
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2500px',
    },
    extend: {
      fontFamily: {
        custome: ['NeueKabelW01', 'Aquatico', 'Regular'],
      },
      colors: {
        puprpule_1: 'rgb(213, 184, 255)',
        dark_1: 'rgba(0,0,0,0.6)',
        light_1: 'rgba(255,255,255,1)',
        xx: '#161922',
      },
    },
  },
  plugins: [],
};

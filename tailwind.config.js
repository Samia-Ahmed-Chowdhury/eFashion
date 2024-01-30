/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:
    {
      colors: {
       textC1: '#333333',
       textC9: '#776C6C',
       mainColor:'#F2575D',
       sideColor:'#B0D0E3'

      },

      backgroundImage: {
        primaryColor: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        bgColor: 'linear-gradient(118deg, rgba(255, 225, 226, 0.44) 30.35%, rgba(215, 240, 255, 0.44) 103.26%)',
        myBg:' linear-gradient(112deg, #FFE1E2 19.23%, #D7F0FF 94.22%)'
      }
    }
  },
  plugins: [require("daisyui")],
}

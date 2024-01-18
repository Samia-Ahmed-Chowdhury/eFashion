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

      },

      backgroundImage: {
        primaryColor: 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)',
        bgColor: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)',
        myBg:' linear-gradient(112deg, #FFE1E2 19.23%, #D7F0FF 94.22%)'
      }
    }
  },
  plugins: [require("daisyui")],
}

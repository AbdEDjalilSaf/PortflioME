/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
'blue':'#2e68b2',
'white':'#ffffff',
    },
   
    extend: {
      screens:{
        'lo':'350px',
        },
    },
  },
  plugins: [],
}
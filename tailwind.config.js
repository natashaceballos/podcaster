/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/*.{html,js,jsx,ts,tsx}", './src/components/**/*.{html,js,jsx,ts,tsx}','./src/pages/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow:{
        card : '0 3px 3px 3px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary : "#15263e",
      secondary: "#31576f",
      "t-color": "#151515", // this is for primary text colors
      "st-color": "#5c5c5c", //this is for secondary text colors
      "h-color": "#101d30",//this is for heading colors
      "link-color": '#457b9d'
    },
    borderRadius: {
      button: '16px'
    },
    fontFamily: {
      istok: ["Istok Web", "sans-serif"]
    }
  },
  plugins: [],
}


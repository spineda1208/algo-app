/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{tsx,ts,jsx,js,css}",
    "./src/**/*.{tsx,ts,jsx,js,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro": ["SF-Pro", "sans-serif"],
      },
      colors: {
        "dark-primary": "#121212",
        "dark-secondary": "#4D4D4D",
        "dark-tertiary": "#404040",

        "green-primary": "#30C246",
        "green-shade": "#28A13B",

        "blue-primary": "#2FC3E7",
        "blue-secondary": "#7372CA",

        accent: "#B0EDDC",
        success: "#6AC23A",
        fail: "#C93C3C",
      },
    },
  },
  plugins: [],
};

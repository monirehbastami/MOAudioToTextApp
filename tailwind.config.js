/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        dark: {
          primary: "#221530",
          secondary: "#2a1246",
          heading: "#ffffff",
          content: "#AAAAAA",
          error: "#9474b8",
          hover: "#1ebdff",
        },
        light: {
          primary: "#cdcdcd",
          secondary: "#cfcdcf",
          heading: "#3d3d3d",
          content: "#555555",
          error: "#30106b",
          hover: "#005a9c",
          rate1: "#5f9ed4",
          rate2: "#a751d3",
          rate3: "#dc5c97",
        },
      },
      keyframes: {
        enlarge: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        enlarge: "enlarge 5s linear",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

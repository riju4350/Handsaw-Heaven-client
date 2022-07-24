/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fa8805",
          secondary: "#020e73",
          accent: "#f5ed05",
          neutral: "#2384d9",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

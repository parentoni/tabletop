/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      primary: "#00218D"
    },
  },
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        "primary": "00218D",
        "hover": "rgb(0, 0, 0, 0.05)"
      }
    }]
  },
 plugins: [require("daisyui")],
}

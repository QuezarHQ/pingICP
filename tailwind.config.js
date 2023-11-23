/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "emerald"],
  }
}
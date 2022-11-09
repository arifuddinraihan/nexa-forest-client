/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5def34",

          "secondary": "#22d3ee",

          "accent": "#f472b6",

          "neutral": "#047857",

          "base-100": "#f1f5f9",

          "info": "#3b82f6",

          "success": "#2EC27D",

          "warning": "#fde047",

          "error": "#FC6F5F",
        },
      },
    ],
  },
  plugins: [require("daisyui", '@tailwindcss/forms')],
}

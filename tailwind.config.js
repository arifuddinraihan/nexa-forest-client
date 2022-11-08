/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "primary": "#75d112",

      "secondary": "#8eedb2",

      "accent": "#09ad03",

      "neutral": "#1D2A35",

      "base-100": "#E6E8EA",

      "info": "#81C6E4",

      "success": "#4FD88D",

      "warning": "#F59B2E",

      "error": "#ED313A",
    },
    fontFamily: {
      'poorStory': 'Poor Story'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

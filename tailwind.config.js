/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily:{
      ins: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
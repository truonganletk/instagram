/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      ins: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        "ig-primary-button": "rgba(0, 149, 246)",
        "ig-primary-text": "rgb(38, 38, 38)",
        "ig-secondary-text": "rgb(142, 142, 142)",
        "ig-primary-background": "rgb(255, 255, 255)",
        "ig-secondary-background": "rgb(250, 250, 250)",
        "ig-link": "rbg(0, 55, 107)",
        "ig-stroke": "rgb(219, 219, 219)",
        "ig-error-or-destructive": "rgb(237, 73, 86)",
        "ig-elevated-separator": "rgb(219, 219, 219)",
        "ig-highlight-background": "rgb(239, 239, 239)",
        "ig-green-active": "#78de45",
        "ig-explore-post-hover": "rgba(0, 0, 0, 0.3)",
        // dark mode
        "ig-dark-elevated-separator": "rgb(54, 54, 54)",
        "ig-dark-secondary-background": "rgb(18, 18, 18)",
        "ig-dark-highlight-background": "rgb(38, 38, 38)",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

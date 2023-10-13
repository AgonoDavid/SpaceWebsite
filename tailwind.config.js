/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barslow: ["Barlow Condensed"],
        Belleflair: ["Bellefair"],
      },
    },
  },
  plugins: [],
});

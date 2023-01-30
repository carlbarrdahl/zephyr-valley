const theme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--karla-font)", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

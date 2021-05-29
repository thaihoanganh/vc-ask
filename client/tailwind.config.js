/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        960: "960px",
      },
      rotate: {
        0: "0",
        45: "45deg",
        90: "90deg",
        135: "135deg",
        180: "180deg",
        270: "270deg",
      },
    },
    colors: {
      gray: colors.trueGray,
      red: colors.red,
      overlay: {
        light: "rgba(255, 255, 255, 0.36)",
        dark: "rgba(0, 0, 0, 0.36)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first", "last"],
      opacity: ["active"],
    },
  },
  plugins: [],
};

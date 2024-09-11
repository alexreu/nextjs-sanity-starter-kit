export default {
  tabWidth: 4,
  endOfLine: "lf",
  trailingComma: "es5",
  printWidth: 120,
  arrowParens: "avoid",
  endingPosition: "absolute-with-indent",
  plugins: [
    require("prettier-plugin-classnames"),
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-merge"),
  ],
};

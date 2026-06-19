import type { Config } from "tailwindcss";

const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  plugins: [require("tailwindcss/nesting"), require("postcss-preset-env")],
};

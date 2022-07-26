/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: "",
  content: [
    "./projects/amp-digital-eno/aem-amp-ng-components/**/*.{html,ts,css,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@amp-digital-eno/aem-amp-ui")],
  ampui: {
    noDarkTheme: true,
  },
  corePlugins: {
    preflight: false,
  },
};

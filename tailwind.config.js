/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bright-blue": "#3a7bfd",
        light_theme: {
          "very-light-gray": "#fafafa",
          "very-light-grayish-blue": "#e4e5f1",
          "light-grayish-blue": "#d2d3db",
          "dark-grayish-blue": "#9394a5",
          "very-dark-grayish-blue": "#484b6a",
        },
        dark_theme: {
          "very-dark-blue": "#171823",
          "very-dark-desaturated-blue": "#25273c",
          "light-grayish-blue": "#cacde8",
          "light-grayish-blue-hover": "#e4e5f1",
          "dark-grayish-blue": "#777a92",
          "very-dark-grayish-blue": "#4d5066",
          "very-dark-grayish-blue-hover": "#393a4c",
        },
      },
      backgroundImage: {
        "bg-desktop-dark": "url('./src/assets/images/bg-desktop-dark.jpg')",
        "bg-desktop-light": "url('./src/assets/images/bg-desktop-light.jpg')",
        "bg-mobile-dark": "url('./src/assets/images/bg-mobile-dark.jpg')",
        "bg-mobile-light": "url('./src/assets/images/bg-desktop-light.jpg')",
      },
    },
  },
  plugins: [],
};

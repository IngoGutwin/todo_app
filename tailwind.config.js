/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
        "./components/**/*.{vue,js}",
        "./components/icons/**/*.{vue,js}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xs: { max: "475px" },
                sm: "475px",
            },
            colors: {
                "bright-blue": "#3a7bfd",
                light_theme: {
                    gray: "#fafafa",
                    "grayish-blue": "#d2d3db",
                    "grayish-blue-100": "#e4e5f1",
                    "grayish-blue-200": "#9394a5",
                    "grayish-blue-300": "#484b6a",
                },
                dark_theme: {
                    "dark-blue": "#171823",
                    "dark-blue-desaturated": "#25273c",
                    "grayish-blue": "#cacde8",
                    "grayish-blue-hover": "#e4e5f1",
                    "grayish-blue-100": "#777a92",
                    "grayish-blue-200": "#4d5066",
                    "grayish-blue-hover-200": "#393a4c",
                },
            },
            backgroundImage: {
                "desktop-dark": "url('@/assets/images/bg-desktop-dark.jpg')",
                "desktop-light": "url('@/assets/images/bg-desktop-light.jpg')",
                "mobile-dark": "url('@/assets/images/bg-mobile-dark.jpg')",
                "mobile-light": "url('@/assets/images/bg-mobile-light.jpg')",
            },
        },
    },
    plugins: [],
};

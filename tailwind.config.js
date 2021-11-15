/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#22D3EE",
                secondary: "#A5F3FC",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                warm: {
                    50: "#f8f5f2",
                    100: "#f2eee8",
                    200: "#e9e0d4",
                    300: "#d8cbbf",
                    400: "#c1a88d",
                    500: "#a98c6c",
                    600: "#8d735a",
                    700: "#6d5746",
                    800: "#4d4138",
                    900: "#332b26"
                }
            },
            boxShadow: {
                soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
                glass: "0 12px 40px rgba(17, 24, 39, 0.08)",
                glow: "0 0 0 1px rgba(255,255,255,0.35), 0 20px 50px rgba(76, 93, 120, 0.12)"
            }
        }
    },
    plugins: []
};
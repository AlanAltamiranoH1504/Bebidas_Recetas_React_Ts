/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                fjalla: ['"Fjalla One"', 'sans-serif'],
                orbitron: ["Orbitron", "sans-serif"],
            },
            backgroundImage: {
                "header" : "url('/bg.jpg')",
            }
        },
    },
    plugins: [],
}


/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./resources/views/**/*.blade.php",
        "./resources/scripts/**/*.{js,ts,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    "dark-blue": "hsl(233, 26%, 24%)",
                    "lime-green": "hsl(136, 65%, 51%)",
                    "bright-cyan": "hsl(192, 70%, 51%)",
                    "custom-red": "#CC191C",
                    "custom-brown": "#833012",
                    "custom-orange": "#F19200",
                    "custom-purple": "#9c27b0",
                },
                neutral: {
                    "grayish-blue": "hsl(233, 8%, 62%)",
                    "light-grayish-blue": "hsl(220, 16%, 96%)",
                    "very-light-gray": "hsl(0, 0%, 98%)",
                    white: "hsl(0, 0%, 100%)",
                },
            },
            backgroundImage: (theme) => ({
                "header-desktop": "url('/images/bg-intro-desktop.svg')",
                "header-mobile": "url('/images/bg-intro-mobile.svg')",
                "image-mockups": "url('/images/image-mockups.png')",
                "image-logo": "url('/images/logo.svg')",
            }),
            backgroundSize: {
                "custom-mobile-header-size": "100% 50%",
                "custom-mobile-mockup-size": "auto 60%",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1.25rem",
                    sm: "2rem",
                    lg: "3rem",
                    xl: "4rem",
                    "2xl": "5rem",
                },
            },
            inset: {
                "-42.6%": "-42.6%",
            },
        },
    },
    plugins: [require("@tailwindcss/forms", "@tailwindcss/aspect-ratio")],
};

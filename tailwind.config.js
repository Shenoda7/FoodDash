/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "rgb(42 42 42 / <alpha-value>)",
      orange: {
        dark: "rgb(255 96 0 / <alpha-value>)",
        mid: "rgb(255 123 43 / <alpha-value>)",
        light: "rgb(255 239 230 / <alpha-value>)",
      },
      grey: {
        dark: "rgb(147 147 147 / <alpha-value>)",
        mid: "rgb(179 179 179 / <alpha-value>)",
        light: "rgb(186 186 186 / <alpha-value>)",
      },
      yellow: "rgb(255 199 0 / <alpha-value>)",
      white: "rgb(255 255 255 / <alpha-value>)",
    },
    fontSize: {
      "heading-lg": "3rem", // 48px
      "heading-md": "2.5rem", // 40px
      "heading-sm": "2.25rem", // 36px
      "heading-xs": "2rem", // 32px
      "body-lg": "1.5rem", // 24px
      "body-md": "1.25rem", // 20px
      "body-sm": "1rem", // 16px
      "body-xs": "0.875rem", // 14px
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1320px",
      },
    },
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
    },
    extend: {},
  },
  plugins: [daisyui],
};

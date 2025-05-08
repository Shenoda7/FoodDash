/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "rgb(42 42 42 / <alpha-value>)", // #2A2A2A
      orange: {
        dark: "rgb(255 96 0 / <alpha-value>)", // #FF6000
        mid: "rgb(255 123 43 / <alpha-value>)", // #FF7B2B
        light: "rgb(255 239 230 / <alpha-value>)", // #FFEFE6
      },
      grey: {
        dark: "rgb(147 147 147 / <alpha-value>)", // #939393
        mid: "rgb(179 179 179 / <alpha-value>)", // #B3B3B3
        light: "rgb(186 186 186 / <alpha-value>)", // #BABABA
      },
      yellow: "rgb(255 199 0 / <alpha-value>)", // #FFC700
      white: "rgb(255 255 255 / <alpha-value>)", // #FFFFFF
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
});

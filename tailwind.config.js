/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': 'rgb(42 42 42 / <alpha-value>)',
      'orange': {
        'dark': 'rgb(255 96 0 / <alpha-value>)',
        'mid': 'rgb(255 123 43 / <alpha-value>)',
        'light': 'rgb(255 239 230 / <alpha-value>)',
      },
      'grey': {
        'dark':'rgb(179 179 179 / <alpha-value>)',
        'light':'rgb(186 186 186 / <alpha-value>)',
      },
      'yellow': 'rgb(255 199 0 / <alpha-value>)',
      'white': 'rgb(255 255 255 / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
};

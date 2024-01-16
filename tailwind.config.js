/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        senior: {
          "blue-100": "#EAF5F8",
          "blue-200": "#8EC5D5",
          "blue-300": "#B7E3F0",
          "yellow-100": "#FFC633",
          "purple-100": "#3C3E64",
          "white-100": "#FFFFFF",
          "white-200": "#F1F1F1",
          "gray-100": "#888787",
          black: "#3C3E64",
        },
      },
    },
  },
  plugins: [],
};

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
        "buttons-orange": "#FFC633",
        "buttons-blue": "#8EC5D5",
        "error-teal": "#8fc4d5",
        senior: {
          "blue-100": "#EAF5F8",
          "blue-200": "#8EC5D5",
          "blue-300": "#B7E3F0",
          "yellow-100": "#FFC633",
          "purple-100": "#3C3E64",
          "white-100": "#FFFFFF",
          "white-200": "#F1F1F1",
          "gray-100": "#888787",
        },
        projects: {
          "emb-100": "#CA6EF5",
          "database-100": "#B283FF",
          "network-100": "#FF8755",
          "game-100": "#8BC7A1",
          "compiler-100": "#73ACE1",
          "operating-100": "#FFB320",
          "ai-100": "#87CDD1",
          "others-100": "#C5C154",
        },
      },
    },
  },
  plugins: [],
};

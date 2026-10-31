/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#152021",
          teal: "#00686B",
          tealDark: "#005456",
          paper: "#F6F9F8",
          mint: "#EAF3F1",
          peach: "#FFF1D9",
          line: "#DFE9E7",
          muted: "#687674",
          white: "#FFFFFF",
        },
      },
    },
  },

  plugins: [],
};
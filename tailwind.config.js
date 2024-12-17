/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "/css"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "hsl(249, 10%, 26%) ",
          light: "hsl(246, 25%, 77%)",
          default: "hsl(248, 32%, 49%)"
        },
        red: "hsl(0, 100%, 74%) ",
        green: "hsl(154, 59%, 51%)"

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}


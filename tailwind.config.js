/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "/css"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "hsl(249, 10%, 26%) ",
          light: "hsl(246, 25%, 77%)",
          default: "hsl(248, 32%, 49%)"
        },
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",
        white: "#FFFFFF",
        gray: "#DEDEDE"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        mobile: "url('/images/bg-intro-mobile.png')",
        desktop: "url('/images/bg-intro-desktop.png')",
      }
    },
  },
  plugins: [],
}


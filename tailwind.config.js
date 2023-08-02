/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/bg-main-mobile.png')",
      },
      fontFamily: {
        epilogue: "Epilogue, sans-serif",
      },
      colors: {
        grad1: "hsl(249, 99%, 64%) ",
        grad2: "hsl(278, 94%, 30%)",
      },
    },
  },
  plugins: [],
};

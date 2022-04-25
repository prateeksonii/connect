module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SUIT", "sans-serif"],
        head: ["Gilroy-Bold", "SUIT", "sans-serif"],
      },
      colors: {
        secondary: "#D8D8FF",
        primary: "#5481D2",
      },
    },
  },
  plugins: [],
};

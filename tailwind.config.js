module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bglight: "#263238",
        bgdark: "#192227",
        keyword: "#F12C7D",
        function: "#26ABF4",
        declaration: "#6BE02F",
        variable: "#FD971F",
        text: "#E6DB74",
        bracket: "#C7CA00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

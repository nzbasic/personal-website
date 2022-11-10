module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "monokai-light": "#263238",
        "monokai-dark": "#192227",
        keyword: "#F12C7D",
        function: "#26ABF4",
        declaration: "#6BE02F",
        variable: "#FD971F",
        text: "#E6DB74",
        bracket: "#C7CA00",
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1921px',
        '5xl': '2560px',
      }
    },
    gridTemplateColumns: (theme) => {
      const spacing = theme("spacing");
  
      return Object.keys(spacing).reduce((accumulator, spacingKey) => {
        return {
          ...accumulator,
          [`fill-${spacingKey}`]: `repeat(auto-fill, minmax(${spacing[spacingKey]}, 1fr))`,
        };
      }, {});
    },
  },
  plugins: [],
};

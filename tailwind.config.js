module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "993px",
      xl: "1281px",
    },

    extend: {
      colors: {
        green: "#72b626",
        lightGrey: "#666",
        mustard: "#ffb703",
      },
      fontFamily: {
        raleway: "'Raleway', 'sans - serif'",
      },
      boxShadow: {
        "3xl": "0 -3px 6px 0",
      },
    },
  },
  plugins: [],
};

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
        offWhite: "#f5f5f5",
      },
      fontFamily: {
        raleway: "'Raleway', 'sans - serif'",
        poppins: "'Poppins','sans - serif'",
      },
      boxShadow: {
        "3xl": "inset 0px 1px 4px 0px rgb(0 0 0 / 10%)",
        "4xl": "0 0 5px 0 #8080805c",
      },
    },
  },
  plugins: [],
};

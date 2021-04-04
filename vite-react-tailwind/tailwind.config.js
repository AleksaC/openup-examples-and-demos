module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turquoise: "#61dafb",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

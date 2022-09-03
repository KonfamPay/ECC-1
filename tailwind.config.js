module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              "eccblue": "#0B63C5",
              "clearblue": "#F1F7FE",
              "darkblue": "#031830",
              "white": "#fff",
              "grey-100": "#F0F0F0",
              "grey-200": "#666666"
          }
      }
  },
  variants: {
      extend: {}
  },
  plugins: []
};

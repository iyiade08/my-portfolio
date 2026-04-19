/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        pryColor: "#2eb2ab",
        pryForeground: "#fff",

        secColor: "#1f2830",
        secForeGround: "#20b2a6",

        mutedColor: "#252e37",
        mutedForeGroundColor: "#7a8491",

        borderColor: "#242b32",

        highlightColor: "#f5a623",
        surfaceColor: "#1a2329",
      },
    },
  },
  plugins: [],
};

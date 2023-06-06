module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_3f": "#0000003f",
          "900_26": "#00000026",
          "900_01": "#010101",
        },
        gray: {
          100: "#f2f5fa",
          200: "#f0f0f0",
          500: "#a5a3a3",
          600: "#828282",
          "500_01": "#a3a3a3",
          "100_01": "#f5f5f5",
          "200_01": "#e8e9e9",
        },
        white: { A700: "#ffffff" },
        red: { A700: "#ff0000" },
        blue_gray: {
          100: "#d9d9d9",
          300: "#a1a3b0",
          900: "#2e2e2e",
          "900_a2": "#2e2e2ea2",
        },
        teal: { 700: "#008b56" },
        light_green: { 500: "#76ee58" },
        indigo: { 600: "#28629a" },
        purple: { 500: "#9900b8", 800: "#64009c" },
        colors: "#64009cff",
      },
      fontFamily: { poppins: "Poppins", tajawal: "Tajawal" },
      boxShadow: {
        bs3: "0px 4px  4px 0px #0000000c",
        bs: "0px 2px  12px 7px #0000000c",
        bs1: "-1px 1px  10px 0px #0000003f",
        bs2: "-1px 1px  12px 0px #00000026",
      },
      backgroundImage: { gradient: "linear-gradient(180deg ,#ffffff,#e8e9e9)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

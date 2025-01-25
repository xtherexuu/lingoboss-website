import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shiny-green": "#2bc016",
        light: "#aaefdf",
        "very-light": "#cffcff",
        "light-green": "#9ee37d",
        "primary-green": "#63c132",
        "dark-primary-green": "#119822",
        "blacked-green": "#2a7221",
        "light-blacked-green": "#358600",
        "black-gray-green": "#1a1f16",
        "dark-gray-green": "#1e3f20",
        "gray-green": "#345830",
        "light-gray-green": "#4a7856",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundImage: {
        "green-gradient":
          "linear-gradient(342deg, rgba(170,239,223,1) 0%, rgba(154,233,197,1) 39%, rgba(48,194,30,1) 59%, rgba(17,152,34,1) 87%)",
      },
    },
    screens: {
      "1440": "1440px",
      "1150": "1150px",
      "800": "800px",
      "600": "600px",
      "320": "320px",
    },
  },
  plugins: [],
} satisfies Config;

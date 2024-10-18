/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white01: "#F8FAFC",
        red01: "#DD524C",
        yellow02: "#F5D565",
        green01: "#32D657",
        blue01: "#3662E3",
        gray01: "#97A3B6",
        yellow01: "#E9A23B",
        green02: "#A0ECB1",
        red02: "#F7D4D3",
        lightSilver: "#E3E8EF",
        lightBrown: "#F5E8D5",
        lightGray: "#00000033",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

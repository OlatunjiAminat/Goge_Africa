/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-rgba" : "rgba(255, 247, 233, 1)",
        "light-orange-rgba" : "rgba(255, 192, 0, 1)",
        "deep-orange-rgba" : "rgba(255, 138, 0, 1)",
        "normal-orange-rgba" : "rgba(255, 247, 223, 1)",
        "grey-rgba": "rgba(92, 92, 92, 1)",
        "gray-rgba": "rgba(33, 33, 33, 1)"
      },
      myCustomImage:{
        "background-image" : "url(assets/signin3.png)"
      },
      fontFamily: {
        abc: ["Ibarra Real Nova","Bona Nova", "Lexend Deca", "Roboto", "Space Grotesk"]
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      dropShadow: {
        bigbox: "10px 10px 0px #000",
        smbutton: "0px 2.5px 0px #000",
        smbuttonhov: "0px 4px 0px #000",
        button: "0px 3.5px 0px #000",
        buttonhov: "0px 5px 0px #000",
        box: "5px 5px 0px #000",
        title: "4px 4px 0px #000",
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#1F496F",
      },
      extend: {},
    },
  },
  plugins: [],
};

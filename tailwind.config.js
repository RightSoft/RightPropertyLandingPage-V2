/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#212E44",
        accordionItemBg: "var(--accordionItemBg)",
        accordionItemDescColor: "var(--accordionItemDescColor)",
        actionOrange: "#EBA43A",
        buttonWhite: "#EEEEF0",
      },
    },
  },
  plugins: [],
};

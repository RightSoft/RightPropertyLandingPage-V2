/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize:{
        "36" : ["2.25rem", "2.7425rem"],
        "28" : ["1.75rem", "2.133125rem"],
        "24" : ['1.5rem', '1.828125rem'],
        "22" : ["1.375rem", "1.671875rem"],
        "20" : ["1.25rem", "1.52375rem"],
        "18" : ["1.125rem", "1.37125rem"],
        "12" : ["0.75rem", "0.914375rem"],
        "8" : ["0.5rem", "0.609375rem"],
      },
      colors: {
        bodyColor: "#212E44",
        accordionItemBg: "var(--accordionItemBg)",
        accordionItemDescColor: "var(--accordionItemDescColor)",
        actionOrange: "#EBA43A",
        rpBlue: "#5EC6D3",
        buttonWhite: "#EEEEF0",
        keywordColor: "#FF3F79",
      },
      screens: {
        mobile: { max: "800px" },
        xsMobile: { max: "393px" },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    
      colors: {
        light: {
          12: "#000000",
          11: "#18191B",
          10: "#242527",
          9: "#2F3130",
          8: "#575958",
          7: "#616161",
          6: "#7C7C7B",
          5: "#B5B6BA",
          4: "#CECFD4",
          3: "#E8E9ED",
          2: "#EEEBE9",
          1: "#FEFFFF",
          
          
          // 1: "#000000",
          // 2: "#18191B",
          // 3: "#242527",
          // 4: "#2F3130",
          // 5: "#575958",
          // 6: "#65666A",
          // 7: "#616161",
          // 8: "#B5B6BA",
          // 9: "#CECFD4",
          // 10: "#E8E9ED",
          // 11: "#FEFFFF",
        },
        red1: "#C3291C",
        yellow1: "#FAE179",
        blue1:"#2238FF",
        blue2:"#8EC0FF",
        blue3:"#E7F1FF"
      },
      fontFamily: {
        LilitaOne: "Lilita One",
        Abel:"Abel"
      },
    },
  },
  plugins: [],
};

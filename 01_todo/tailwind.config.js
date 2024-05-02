/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#EBEBEA",
        secondaryColor: "#CAC5EB",
        todoColor: "#917FAA",
        shortColor: "#313D5B",
        textColor: "#000000",
      },
    },
  },
  plugins: [],
};

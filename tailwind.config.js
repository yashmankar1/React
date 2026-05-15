/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
    },
  },
  plugins: [],
};

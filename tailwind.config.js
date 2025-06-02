/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-24": "span 24 / span 24",
        "span-15": "span 15 / span 15",
        "span-20": "span 20 / span 20",
      },
      gridRow: {
        "span-16": "span 16 / span 16",
      },
    },
  },
  plugins: [],
};

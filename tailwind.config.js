/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Use "colors" instead of "color"
        Pink: "#FF3389",
      },
      backgroundImage: {
        footer: "url('/assets/Home/footerbg.svg')",
      },
    },
  },
  plugins: [],
};

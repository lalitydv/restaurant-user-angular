/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Use "colors" instead of "color"
        Pink: "#FF3389",
        LightPink: "#FDD4E5",
        blue: "#2E108E",
        Admin: "#F97316",
        Customer: "#10B981",
        Manager: "#0284C7",
        Operator: "#A855F7",
      },
      backgroundImage: {
        footer: "url('/assets/Home/footerbg.svg')",
      },
    },
  },
  plugins: [require("preline/plugin")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Use "colors" instead of "color"
        Pink: "#FF3389",
        LightPink: "#FDD4E5",
        blue: "#2E108E",
        Admin: "#F97316",
        Admin: "#10B981",
        Admin: "#F97316",
        
      },
      backgroundImage: {
        footer: "url('/assets/Home/footerbg.svg')",
      },
    },
  },
  plugins: [],
};

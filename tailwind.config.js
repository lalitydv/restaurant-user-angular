/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        Pink: "#FF3389",
        LightPink: "#FDD4E5",
        blue: "#2E108E",
        Admin: "#F97316",
        Customer: "#10B981",
        Manager: "#0284C7",
        Operator: "#A855F7",
        cartbg: "#D0D0D0",
        Gray: "#f8f9fc",
      },
      backgroundImage: {
        footer: "url('/assets/Home/footerbg.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

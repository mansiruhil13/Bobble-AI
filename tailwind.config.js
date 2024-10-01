// tailwind.config.js
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
    "./styles/**/*.css",
    // Add any other specific directories where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
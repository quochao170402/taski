/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.{js,jsx,ts,tsx}", // Include your entry point (e.g., index.js)
    "./App.{js,jsx,ts,tsx}", // Include if you use App.js
    "./app/**/*.{js,jsx,ts,tsx}", // For Expo Router
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

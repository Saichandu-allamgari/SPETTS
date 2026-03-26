// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ✅ IMPORTANT (you are using app folder)
    "./components/**/*.{js,ts,jsx,tsx}" // ✅ IMPORTANT
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
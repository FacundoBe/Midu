/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./srv/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


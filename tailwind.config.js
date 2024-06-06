const { TWconfig } = require('./src/configs/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}', './dist/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [TWconfig],
};

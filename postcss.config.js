const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: {
    tailwindcss,
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
  // plugins: ['postcss-preset-env', tailwindcss],
};

const { override, addPostcssPlugins } = require('customize-cra');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = override(
  addPostcssPlugins([
    tailwindcss,
    autoprefixer
  ])
);
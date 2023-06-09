/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: true,
  printWidth: 100,
  plugins: [require('prettier-plugin-tailwindcss')],
};

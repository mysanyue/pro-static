const autoprefixer = require('autoprefixer')
const postcssENV = require('postcss-preset-env')

module.exports = {
  plugins: [postcssENV, autoprefixer],
}

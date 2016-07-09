const
  postcssImport = require('postcss-import'),
  autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    postcssImport(),
    autoprefixer()
  ],
  options: {
    map: { inline: false }
  }
}

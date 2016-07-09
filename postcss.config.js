const
  postcssImport = require('postcss-import'),
  autoprefixer = require('autoprefixer')

module.exports = [
  postcssImport(),
  autoprefixer()
]

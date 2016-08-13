'use strict'
const
  postcss = require('../'),
  cssnext = require('postcss-cssnext')

module.exports = {
  src: 'fixture',
  handlers: {
    '.css': postcss({
      plugins: [
        cssnext()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}

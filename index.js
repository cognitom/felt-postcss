'use strict'
const
  co = require('co'),
  fsp = require('fs-promise'),
  path = require('path'),
  postcss = require('postcss')

/** default config file name */
const defaultConfigFileName = 'postcss.config.js'

module.exports = function(config) {
  if (typeof config == 'string' || !config) {
    try {
      const
        root = process.cwd(),
        configFile = path.join(root, config || defaultConfigFileName)
      config = require(configFile)
    } catch(e) {
      config = require(path.join(__dirname, defaultConfigFileName))
    }
  }
  return co.wrap(function* (from, to){
    const
      options = Object.assign({}, config.options, { from, to }),
      css = yield fsp.readFile(from, 'utf8'),
      result = yield postcss(config.plugins).process(css, options)

    yield fsp.writeFile(to, result.css)
    if (result.map)
      yield fsp.writeFile(`${ to }.map`, result.map)

    // TODO: return dependencies
  })
}

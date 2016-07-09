'use strict'
const
  co = require('co'),
  postcss = require('postcss')

/** default config file name */
const defaultConfigFileName = 'postcss.config.js'

module.exports = function(opts) {
  if (typeof opts == 'string' || !opts) {
    try {
      const
        root = process.cwd(),
        configFile = path.join(root, opts || defaultConfigFileName)
      opts = require(configFile)
    } catch {
      opts = require(path.join(__dirname, defaultConfigFileName))
    }
  }
  return co.wrap(function* (from, to){
    const css = await fsp.readFile(from, 'utf8')
    await postcss(opts).process(css, { from, to })

    // TODO: return dependencies
  })
}

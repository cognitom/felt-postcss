# felt-postcss

[![Build Status][travis-image]][travis-url]

PostCSS plugin for Felt.

## Installation

```bash
$ npm install felt-postcss
```

## Usage

```javascript
const
  express = require('express'),
  felt = require('felt'),
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  autoprefixer = require('autoprefixer')

const app = express()

app.use(felt({
  src: 'public'
  handlers: {
    '.css': postcss({
      plugins: [
        postcssImport(),
        autoprefixer()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}))
app.use(express.static('public'))
app.listen(3000)
```

[travis-image]:https://img.shields.io/travis/cognitom/felt-postcss.svg?style=flat-square
[travis-url]:https://travis-ci.org/cognitom/felt-postcss

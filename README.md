# felt-postcss

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
  postcss = require('felt-postcss')

const app = express()

app.use(felt({
  src: 'public'
  compilers: {
    '**/*.css': postcss('postcss.config.js')
  }
}))
app.use(express.static('public'))
app.listen(3000)
```

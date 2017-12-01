# dedash

> small module that removes all instances of various dashes from a string

returns a new string with all dashes removed

## Usage

```js
var dedash = require('dedash')

var str = 'hey-cool!'
console.log(dedash(str)) // 'heycool!'
```

## types of dashes removed

 * figure: '‒'
 * en: '–'
 * em: '—'
 * horizontal bar: '―'
 * swung: '⁓'

[learn more about dashes here](https://en.wikipedia.org/wiki/Dash)


## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install dedash
```


## License

MIT


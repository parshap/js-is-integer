# is-integer

[![build status](https://secure.travis-ci.org/parshap/js-is-integer.svg?branch=master)](http://travis-ci.org/parshap/js-is-integer)

Polyfill for [ES6 `Number.isInteger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger).

# Example
```js
var isInteger = require("is-integer");
isInteger("hello") // -> false
isInteger(4) // -> true
isInteger(4.0) // -> true
isInteger(4.1) // -> false
```

# Installation
```
npm install is-integer
```

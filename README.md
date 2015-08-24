# is-integer [![build status](https://secure.travis-ci.org/parshap/js-is-integer.svg?branch=master)](http://travis-ci.org/parshap/js-is-integer)

ES2015 (ES6) [`Number.isInteger`][isInteger] and
[`Number.isSafeInteger`][isSafeInteger] ponyfill.

> Ponyfill: A polyfill that doesn't overwrite the native method.

## Example

```js
var isInteger = require("is-integer");
isInteger("hello") // -> false
isInteger(4) // -> true
isInteger(4.0) // -> true
isInteger(4.1) // -> false
```

## API

### `isInteger(number)`

```js
var isInteger = require("is-integer");
```

Determines whether the provided value is an integer.

See [`Number.isInteger`][isInteger].

### `isSafeInteger(number)`

```js
var isSafeInteger require("is-integer").isSafeInteger;
```

Determines whether the provided value is a number that is a safe
integer. A safe integer is an integer that

 * can be exactly represented as an IEEE-754 double precision number,
   and
 * whose IEEE-754 representation cannot be the result of rounding any
   other integer to fit the IEEE-754 representation.

The safe integers consist of all integers from `-(2^53 - 1)` inclusive
to `2^53 - 1` inclusive.

See [`Number.isSafeInteger`][isSafeInteger].

### `MAX_SAFE_INTEGER`

```js
var MAX_SAFE_INTEGER = require("is-integer").MAX_SAFE_INTEGER;
```

`2^53 - 1`

See [`Number.MAX_SAFE_INTEGER`][MAX_SAFE_INTEGER].

### `MIN_SAFE_INTEGER`

```js
var MIN_SAFE_INTEGER = require("is-integer").MIN_SAFE_INTEGER;
```

`-(2^53 - 1)`

See [`Number.MIN_SAFE_INTEGER`][MIN_SAFE_INTEGER].

## Install

```
npm install is-integer
```

[isInteger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger "Number.isInteger - MDN Documentation"
[isSafeInteger]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger "Number.isSafeInteger - MDN Documentation"
[MIN_SAFE_INTEGER]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
[MAX_SAFE_INTEGER]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER

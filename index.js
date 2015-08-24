// This module provides an implementation of the following:
//
//  * Number.isInteger
//  * Number.isSafeInteger
//  * Number.MAX_SAFE_INTEGER
//  * Number.MIN_SAFE_INTEGER
//
"use strict";

var isFinite = require("is-finite");
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || require("max-safe-integer");
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -MAX_SAFE_INTEGER;

// ## Integer
//
// > Determines whether the passed value is an integer.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// See http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
//
var isInteger = Number.isInteger || function isInteger(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};

// ## Safe Integer
//
// > A safe integer is an integer that
// >
// > * can be exactly represented as an IEEE-754 double precision number, and
// > * whose IEEE-754 representation cannot be the result of rounding any other
// >   integer to fit the IEEE-754 representation.
// >
// > The safe integers consist of all integers from -(2^53 - 1) inclusive to
// > (2^53 - 1) inclusive.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
// See http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger
//
var isSafeInteger = Number.isSafeInteger || function isSafeInteger(val) {
  return isInteger(val) &&
    val >= MIN_SAFE_INTEGER &&
    val <= MAX_SAFE_INTEGER;
};

// ## Exports
//

module.exports = isInteger;
module.exports.isSafeInteger = isSafeInteger;
module.exports.MAX_SAFE_INTEGER = MAX_SAFE_INTEGER;
module.exports.MIN_SAFE_INTEGER = MIN_SAFE_INTEGER;

// jshint node:true
"use strict";

// Tests taken directly from es6-shim number tests
// https://github.com/paulmillr/es6-shim/blob/master/test/number.js

var test = require("tape");
var isInteger = require("./");
var isSafeInteger = require("./").isSafeInteger;
var MAX_SAFE_INTEGER = require("./").MAX_SAFE_INTEGER;
var MIN_SAFE_INTEGER = require("./").MIN_SAFE_INTEGER;

// Values that are integers
var INTEGERS = [
  5295, -5295, -9007199254740991, 9007199254740991, 0, -0,
  4,
  4.0,
  1801439850948,
  // Big numbers
  1000000000000000000000,
  1000000000000000000000000000000000000,
  MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER,
];

// Values that are not integers at all
var NON_INTEGERS = [
  4.2,
  Infinity,
  -Infinity,
  NaN,
  true,
  false,
  "",
  "str",
  null,
  undefined,
  function () {},
  /a/g,
  {},
  {
    valueOf: function() { return 3; }
  },
  {
    valueOf: function() { return 0/0; }
  },
  {
    valueOf: function() { throw 17; }
  },
  {
    toString: function() { throw 17; }
  },
  {
    valueOf: function() { throw 17; },
    toString: function() { throw 42; }
  },
];

// Integers that are "safe"
var SAFE_INTEGERS = [
  MAX_SAFE_INTEGER,
  MIN_SAFE_INTEGER,
  0,
  -0,
  5295,
  -5295,
  4,
  4.0,
  1801439850948,
];

// Integers that are not "safe"
var NON_SAFE_INTEGERS = [
  MIN_SAFE_INTEGER - 1,
  MAX_SAFE_INTEGER + 1,
  1000000000000000000000,
  100000000000000000000000000000000000000000000000000000000,
];

// *Integers* should pass isInteger()
test("integers should pass isInteger()", function(t) {
  INTEGERS.forEach(function(val) {
    t.ok(isInteger(val), JSON.stringify(val));
  });
  t.end();
});

// *Safe integers* should pass isSafeInteger() and isInteger()
test("safe integers should pass isSafeInteger() and isInteger()", function(t) {
  SAFE_INTEGERS.forEach(function(val) {
    t.ok(isSafeInteger(val), JSON.stringify(val));
    // *Safe integers* are also integers
    t.ok(isInteger(val), JSON.stringify(val));
  });
  t.end();
});

// *Non-integers* should fail isInteger() and isSafeInteger()
test("non-integers should fail isInteger() and isSafeInteger()", function(t) {
  NON_INTEGERS.forEach(function(val) {
    t.notOk(isInteger(val), JSON.stringify(val));
    t.notOk(isSafeInteger(val), JSON.stringify(val));
  });
  t.end();
});

// *Non-safe integers* should fail isSafeInteger()
test("non-safe integers should fail isSafeInteger()", function(t) {
  NON_SAFE_INTEGERS.forEach(function(val) {
    t.notOk(isSafeInteger(val), JSON.stringify(val));
  });
  t.end();
});

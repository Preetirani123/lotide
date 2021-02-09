const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  
  else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' })
console.log("------------------")
assertObjectsEqual({ a: '1', b: 2 }, {a: "1", b: "2", c: "3" })
console.log("------------------")
assertObjectsEqual({ c: "1", d: ["2", 3] },{ d: ["2", 3], c: "1" })
console.log("------------------")
assertObjectsEqual({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4] })

module.exports = assertObjectsEqual;

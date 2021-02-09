const assertEqual = require('./assertEqual')

const findKey = function(obj, callback) {
  i = 0;

  while (callback(Object.values(obj)[i]) === false){
    i ++ 
  }

  return Object.keys(obj)[i];
 
}

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   }
  
//   else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
  
// };

let output = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

// TEST CODE
assertEqual(output, 'noma');

module.exports = findKey;





const assertArraysEqual = require('./assertArraysEqual')

const words = ["ground", "control", "to", "major", "tom"];
const wordMapped = ['g','c', 't','m','t'];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
return results;
}

assertArraysEqual((map(words, word => word[0])), wordMapped)// => true

module.exports = map;
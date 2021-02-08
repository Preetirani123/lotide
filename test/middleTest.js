const middle = require('../middle');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(middle([]))
console.log(middle([1]))
 console.log(middle([1, 2]))

console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4, 5, 6]))

console.log(eqArrays([1, 2, 3], [1, 2, 3]))// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false

console.log(eqArrays(middle(["1", "2", "3"], ["1", "2", "3"]))) // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

 assertEqual(eqArrays(middle([1, 2, 3], [1, 2, 3]), true)); 

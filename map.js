const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }


  return results;
}

const results1 = map(words, word => word[0]);

console.log('Answer: ', results1);



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqArrays = function(array1, array2) {
  if (array1 === undefined || 
      array2 === undefined || 
      array1.length !== array2.length) 
        {
          return false;
        }
  for (let i = 0; i < array1.length; i++) {
          if (array1[i] !== array2[i]) 
        {
            return false;
      }
    }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]))// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
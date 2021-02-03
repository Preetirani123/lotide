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

const middle = function(array) {
  let middleNew = [];
  
  if (array.length <= 2){
  }

  else {
    if(array.length % 2 === 0){
      middleNew.push(array[((array.length)/2)-1])
      middleNew.push(array[(array.length)/2])
    }

    else{
      middleNew.push(array[(array.length-1)/2])
    }
  }

  return middleNew;
}

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
// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  
  else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

const eqArrays = function(array1, array2) {
  
  if (array1 === undefined || array2 === undefined || array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(object1, object2) {
  
  const keyObject1 = Object.keys(object1);
  const keyObject2 = Object.keys(object2);
  
  if (keyObject1.length !== keyObject2.length){
    return false;
  }
  
  else {

    let output;

    for (let element of keyObject1) {
      
      if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        output = eqArrays(object1[element], object2[element]);
      }
      
      else {
          output = (object1[element] === object2[element])
      }

     
    }
    
    return output;

  }

  
};

console.log(assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' }))
console.log("------------------")
console.log(assertObjectsEqual({ a: '1', b: 2 }, {a: "1", b: "2", c: "3" }))
console.log("------------------")
console.log(assertObjectsEqual({ c: "1", d: ["2", 3] },{ d: ["2", 3], c: "1" }))
console.log("------------------")
console.log(assertObjectsEqual({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4] }))


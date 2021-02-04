const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
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






const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
 console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); //false



// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

// TEST CODE
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
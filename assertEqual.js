/*// FUNCTION IMPLEMENTATION by first method
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + "=== " + expected);
  }
  
  else {
    console.log("Assertion Failed: " + actual + "!== " + expected);
  }
  
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/




// FUNCTION IMPLEMENTATION by second method
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:   ${actual} ` === `  ${expected}`);
  }
  
  else {
    console.log(`Assertion Failed:  ${actual} ` !== `  ${expected}`);
  }
  
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
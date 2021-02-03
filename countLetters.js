const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  
};


const countLetters = function(str) {
  const results = {};

  for (const item of str){
    if(results[item]){
      results[item] += 1;
    }else {
      results[item] = 1;
    }

  }
  return results;
}
console.log(countLetters('LHL'));

// TEST CODE
assertEqual(countLetters("Lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);
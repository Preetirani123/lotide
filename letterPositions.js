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
  let position = 0;

  for (const item of str) {

    if(item !== " ") {

      if(results[item]) {
        results[item].push(position);
      }
      else {
        results[item] = [position]; 
      }
    }
    
    position += 1;
  }

  return results;
};

console.log(countLetters('Lighthouse Labs'));

// TEST CODE
assertEqual(countLetters("Lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);
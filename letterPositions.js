const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  };
  
};


const letterPositions = function(sentence) {
  const results = {};
  let position = 0;

  for (const item of sentence) {

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

console.log(letterPositions('Lighthouse in the house'));

// TEST CODE
assertEqual(letterPositions("Lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);
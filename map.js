const words = ["ground", "control", "to", "major", "tom"];
const wordMapped = ['g','c', 't','m','t'];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
return results;
}

console.log(map(words, word => word[0]));

const assertArraysEqual = function(array1, array2) {
  
  let output;

  if (array1 === undefined || 
      array2 === undefined || 
      array1.length !== array2.length) 
        {
          output =  false;
        }
  for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]){
        output =  false;
      }
    }
  output = true;

  
  if(output = true) {
      console.log(`Assertion Passed: ${array1} === ${array2}`);
    }
    else {
      console.log(`Assertion Failed: ${array1} !== ${array2}`);
    }


    return output;
    
};

console.log(assertArraysEqual((map(words, word => word[0])), wordMapped))// => true

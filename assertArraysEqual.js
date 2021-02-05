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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))// => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]))// => fals
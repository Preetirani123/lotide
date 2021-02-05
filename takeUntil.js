const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const data1TakeUntil = [ 1, 2, 5, 7, 2 ];
const data2TakeUntil = [ "I've", "been", "to", "Hollywood" ];

const takeUntil = function(array, callback) {
  const results = [];
  i = 0;
  while (callback(array[i]) == false){
    results.push(array[i]);
    i ++ 
  }
 return results;
}


console.log(takeUntil(data1, x => x < 0));
console.log('---');
console.log(takeUntil(data2, x => x === ','));

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

console.log(assertArraysEqual((takeUntil(data1, x => x < 0)), data1TakeUntil))// => true

console.log(assertArraysEqual((takeUntil(data2, x => x === ',')), data2TakeUntil))// => true


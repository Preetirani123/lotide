const eqArrays = function(array1, array2) {
  
  let output = true;

  if (array1.length !== array2.length) {
    return false ;
  }
  
  else {

    for (let i = 0; i < array1.length; i++) {


      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        output = output && eqArrays(array1[i], array2[i]);
        
      }
      

      else {
          output = output && (array1[i] === array2[i])
      }

     
    }
    
    return output;

  }
  
};

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]));

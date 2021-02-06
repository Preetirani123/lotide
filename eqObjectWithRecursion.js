const eqObjects = function(object1, object2) {
  
  const keyObject1 = Object.keys(object1);
  const keyObject2 = Object.keys(object2);


  let output = true;

  if (keyObject1.length !== keyObject2.length) {
    return false ;
  }
  
  else {

    for (let element of keyObject1) {


      if ((typeof(object1[element]) === "object") && (typeof(object2[element]) === "object")) {
        output = output && eqObjects(object1[element], object2[element]);
        
      }
      

      else {
          output = output && (object1[element] === object2[element])
      }

     
    }
    
    return output;

  }
  
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));

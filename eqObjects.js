const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2) {
  
  const keyObject1 = Object.keys(object1);
  const keyObject2 = Object.keys(object2);
  
  if (keyObject1.length !== keyObject2.length){
    return false;
  }
  
  else {

    let output;

    for (let element of keyObject1) {
      
      if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        output = eqArrays(object1[element], object2[element]);
      }
      
      else {
          output = (object1[element] === object2[element])
      }

     
    }
    
    return output;

  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
 console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); //false

module.exports = eqObjects;
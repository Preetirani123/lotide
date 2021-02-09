const assertEqual = require('./assertEqual')

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(inputObject, value) {
  const findKey = Object.keys(inputObject);

  for (const key of findKey) {
   if(inputObject[key] === value){
     return key;
   }
  }
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;

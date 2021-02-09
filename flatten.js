let flatten = function(array) {
  
  let newArr = [];
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    }
    else {
      newArr.push(array[i]);
    }
  }

  return newArr;

};


console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;
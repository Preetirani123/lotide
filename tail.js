let tail = function(array) {
  let newARRAY = [];
  for (let i = 1; i < array.length; i++){
    newARRAY.push(array[i]);
  }
  return newARRAY;
};

module.exports = tail;


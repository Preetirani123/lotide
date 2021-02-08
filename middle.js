
const middle = function(array) {
  let middleNew = [];
  
  if (array.length <= 2){
  }

  else {
    if(array.length % 2 === 0){
      middleNew.push(array[((array.length)/2)-1])
      middleNew.push(array[(array.length)/2])
    }

    else{
      middleNew.push(array[(array.length-1)/2])
    }
  }

  return middleNew;
}

module.exports = middle;


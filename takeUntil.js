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

module.exports = takeUntil;

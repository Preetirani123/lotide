
const countLetters = function(str) {
  const results = {};

  for (const item of str){
    if(results[item]){
      results[item] += 1;
    }else {
      results[item] = 1;
    }

  }
  return results;
}

console.log(countLetters('lighthouse in the house'));

module.exports = countLetters;
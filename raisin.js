//stretch code 
const raisin = function(cookie) {
  let raisin = []  
  for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].includes('🍇')) {
      raisin.push("Raisin alert!");
    } else {
      raisin.push("All good!");
  }
  } return raisin;
};

console.log(raisin(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));

module.exports = raisin;

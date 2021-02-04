const raisinAlarm = function(cookie) {
  
  for (let i = 0; i < cookie.length; i++) {
      if (cookie[i] === '🍇') {
      return "Raisin alert!";
    }
  } return "All good!";
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// Raisin alert!
// All good!


//stretch code 
const raisinAlarmArray = function(cookie) {
  let raisin = []  
  for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].includes('🍇')) {
      raisin.push("Raisin alert!");
    } else {
      raisin.push("All good!");
  }
  } return raisin;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// // TEST CODE
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
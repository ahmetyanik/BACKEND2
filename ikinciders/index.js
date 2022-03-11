const {argv} = require ('process');



const a = argv[2];
const b = argv[3];

const ergebnis = parseInt(a) + parseInt(b);

console.log("Ergebnis = " + ergebnis);
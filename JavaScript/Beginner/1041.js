var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x, y] = lines[0].split(' ').map(Number);

// Calculate the average
var average = ((x * 2) + (y * 3)) / 5;

if (x === 0 && y === 0) {
  console.log("Origem");
} else if (x === 0) {
  console.log("Eixo Y");
} else if (y === 0) {
  console.log("Eixo X");
} else if (x > 0 && y > 0) {
  console.log("Q1");
} else if (x > 0 && y < 0) {
  console.log("Q4");
} else if (x < 0 && y > 0) {
  console.log("Q2");
} else {
  console.log("Q3");
}
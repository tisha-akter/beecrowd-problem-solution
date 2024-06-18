var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines[0]); // Convert the input line to a floating-point number

var pi = 3.14159; // Value of π

var A = pi * R * R; 

console.log("A=" + A.toFixed(4)); 
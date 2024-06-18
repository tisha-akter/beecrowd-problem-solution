var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

const weightedAverage = (A * 2 + B * 3 + C * 5) / (2 + 3 + 5);

console.log(`MEDIA = ${weightedAverage.toFixed(1)}`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);

const weightedAverage = (A * 3.5 + B * 7.5) / (3.5 + 7.5);

console.log(`MEDIA = ${weightedAverage.toFixed(5)}`);
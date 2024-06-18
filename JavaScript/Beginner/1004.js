var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);
const prod = a * b;

console.log(`PROD = ${prod}`);
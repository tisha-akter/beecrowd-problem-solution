var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = lines[0].split(' ').map(Number);

const greatest = Math.max(A, B, C);

console.log(`${greatest} eh o maior`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const distance = parseInt(lines[0]);
const time = distance * 2; // Car Y covers 1 km in 2 minutes

console.log(time + ' minutos');
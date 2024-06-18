var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const X = parseInt(lines[0]);
const Y = parseFloat(lines[1]);

const averageConsumption = X / Y;

console.log(`${averageConsumption.toFixed(3)} km/l`);
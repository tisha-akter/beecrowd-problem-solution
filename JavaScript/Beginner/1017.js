var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const time = parseInt(lines[0]);
const speed = parseInt(lines[1]);
const averageConsumption = 12; // Car consumes 12 km/L

const distance = time * speed; 
const fuelNeeded = distance / averageConsumption; 

console.log(fuelNeeded.toFixed(3)); 
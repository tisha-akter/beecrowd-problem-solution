var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const sellerName = lines[0];
const fixedSalary = parseFloat(lines[1]);
const totalSales = parseFloat(lines[2]);

const commission = totalSales * 0.15;
const totalSalary = fixedSalary + commission;

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [code1, units1, price1] = lines[0].split(' ').map(Number);
const [code2, units2, price2] = lines[1].split(' ').map(Number);

const totalAmount = units1 * price1 + units2 * price2;

console.log(`VALOR A PAGAR: R$ ${totalAmount.toFixed(2)}`);
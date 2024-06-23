var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var x = parseFloat(input);

// define arrays for banknotes and coins denominations
var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

// output for banknotes
console.log('NOTAS:');
for (var nota of notas) {
  var count = Math.floor(x / nota);// how many notes of current denomination
  console.log(`${count} nota(s) de R$ ${nota.toFixed(2)}`);
  x %= nota; // Update x to the remainder after using this denomination
}

// Output for coins (same as banknotes)
console.log('MOEDAS:');
for (var moeda of moedas) {
  var count = Math.floor(x / moeda);
  console.log(`${count} moeda(s) de R$ ${moeda.toFixed(2)}`);
  x = (x % moeda).toFixed(2); 
}
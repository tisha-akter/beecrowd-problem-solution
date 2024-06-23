var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// Convert the input string to an integer
let valor = parseInt(input);

// Print the original input value
console.log(valor);

let denominations = [100, 50, 20, 10, 5, 2, 1];

denominations.forEach(note => {
    // Calculate the number of banknotes of the current denomination
    let count = parseInt(valor / note);
    // Print the number of banknotes for the current denomination
    console.log(`${count} nota(s) de R$ ${note},00`);
    // Update the remaining amount
    valor %= note;
});

const readline = require('readline');

// Create an interface for reading input from stdin and outputting to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// input and handle the input once received
rl.question('', (input) => {
  const N = parseInt(input);

  // Calculate the number of hours
  const hours = Math.floor(N / 3600);

  // Calculate the remaining seconds after extracting hours
  const remainingAfterHours = N % 3600;

  // Calculate the number of minutes from the remaining seconds
  const minutes = Math.floor(remainingAfterHours / 60);

  // Calculate the remaining seconds after extracting minutes
  const seconds = remainingAfterHours % 60;

  // Print resulT 
  console.log(`${hours}:${minutes}:${seconds}`);

  // close the reAdline interface
  rl.close();
});

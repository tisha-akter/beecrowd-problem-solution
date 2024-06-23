const readline = require("readline");

// Create an interface for reading input from stdin and outputting to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// input and handle the input once received
rl.question("", (input) => {
  // Convert the input from a string to an integer
  const n = parseInt(input);

  // Calculate years, months, and days
  const years = Math.floor(n / 365);
  const remainingAfterYears = n % 365;
  const months = Math.floor(remainingAfterYears / 30);
  const days = remainingAfterYears % 30;

  // Print the result
  console.log(`${years} ano(s)`);
  console.log(`${months} mes(es)`);
  console.log(`${days} dia(s)`);

  // Close the readline interface
  rl.close();
});

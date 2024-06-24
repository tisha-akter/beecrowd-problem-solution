const { readFileSync } = require("fs");
const input = readFileSync("/dev/stdin", "utf8").trim().split("\n");

function main() {
  let caseNumber = 1;
  let inputIndex = 0;

  while (true) {
    const [n, q] = input[inputIndex++].split(" ").map(Number);

    if (n === 0 && q === 0) break;

    const marbles = [];
    for (let i = 0; i < n; i++) {
      marbles.push(Number(input[inputIndex++]));
    }
    
    marbles.sort((a, b) => a - b);

    const responses = [`CASE# ${caseNumber++}:`];
    for (let i = 0; i < q; i++) {
      const query = Number(input[inputIndex++]);
      const position = marbles.indexOf(query) + 1;
      
      if (position) {
        responses.push(`${query} found at ${position}`);
      } else {
        responses.push(`${query} not found`);
      }
    }

    console.log(responses.join("\n"));
  }
}

main();
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var [N1, N2, N3, N4] = lines[0].split(" ").map(parseFloat);

var average = (N1 * 2 + N2 * 3 + N3 * 4 + N4) / 10;

console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7.0) {
  console.log("Aluno aprovado.");
} else if (average >= 5.0 && average <= 6.9) {
  console.log("Aluno em exame.");
  var N5 = parseFloat(lines[1]);
  console.log(`Nota do exame: ${N5.toFixed(1)}`);
  var recalaverage = (average + N5) / 2;

  if (recalaverage >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${recalaverage.toFixed(1)}`);
} else if (average < 5.0) {
  console.log("Aluno reprovado.");
}

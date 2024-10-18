var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
const [A, B, C] = lines[0].split(" ").map(Number);

if (A + B > C && B + C > A && A + C > B) {
  const perimeter = A + B + C;
  console.log(`Perimetro = ${perimeter.toFixed(1)}`);
} else {
  const area = ((A + B) * C) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}

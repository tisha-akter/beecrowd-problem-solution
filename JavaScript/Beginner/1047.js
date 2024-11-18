var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const [startHour, startMinute, endHour, endMinute] = lines[0]
  .split(" ")
  .map(Number);

let totalMinutes = endHour * 60 + endMinute - (startHour * 60 + startMinute);

if (totalMinutes <= 0) {
  totalMinutes += 24 * 60;
}

const durationHours = Math.floor(totalMinutes / 60);
const durationMinutes = totalMinutes % 60;

console.log(
  `O JOGO DUROU ${durationHours} HORA(S) E ${durationMinutes} MINUTO(S)`
);

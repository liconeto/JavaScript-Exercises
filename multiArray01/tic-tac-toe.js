arrayBi = [];

arrayBi.push(["x", "o", "o"], ["o", "x", "x"], ["x", "o", "o"]);

for (i = 0; i < arrayBi.length; i += 1) {
  for (j = 0; j < arrayBi[i].length; j += 1) {
    // console.log(arrayBi[i][j]);
  }
}

console.log(`| ${arrayBi[0][0]} | ${arrayBi[0][1]} | ${arrayBi[0][2]} |`);
console.log(`| ${arrayBi[1][0]} | ${arrayBi[1][1]} | ${arrayBi[1][2]} |`);
console.log(`| ${arrayBi[2][0]} | ${arrayBi[2][1]} | ${arrayBi[2][2]} |`);

if (
  arrayBi[0][0] === arrayBi[0][1] &&
  arrayBi[0][1] === arrayBi[0][2] &&
  arrayBi[0][0] === arrayBi[0][2]
) {
  console.log(`${arrayBi[0][1]} is de Winner!`);
} else if (
  arrayBi[1][0] === arrayBi[1][1] &&
  arrayBi[1][1] === arrayBi[1][2] &&
  arrayBi[1][0] === arrayBi[1][2]
) {
  console.log(`${arrayBi[1][1]} is de Winner!`);
} else if (
  arrayBi[2][0] === arrayBi[2][1] &&
  arrayBi[2][1] === arrayBi[2][2] &&
  arrayBi[2][0] === arrayBi[2][2]
) {
  console.log(`${arrayBi[2][1]} is de Winner!`);
} else if (
  arrayBi[0][0] === arrayBi[1][1] &&
  arrayBi[1][1] === arrayBi[2][2] &&
  arrayBi[0][0] === arrayBi[2][2]
) {
  console.log(`${arrayBi[1][1]} is de Winner!`);
} else if (
  arrayBi[0][2] === arrayBi[1][1] &&
  arrayBi[1][1] === arrayBi[2][0] &&
  arrayBi[0][2] === arrayBi[2][0]
) {
  console.log(`${arrayBi[1][1]} is de Winner!`);
} else if (
  arrayBi[0][0] === arrayBi[1][0] &&
  arrayBi[1][0] === arrayBi[2][0] &&
  arrayBi[0][0] === arrayBi[2][0]
) {
  console.log(`${arrayBi[1][0]} is de Winner!`);
} else if (
  arrayBi[0][1] === arrayBi[1][1] &&
  arrayBi[1][1] === arrayBi[2][1] &&
  arrayBi[0][1] === arrayBi[2][1]
) {
  console.log(`${arrayBi[1][1]} is de Winner!`);
} else if (
  arrayBi[0][2] === arrayBi[1][2] &&
  arrayBi[1][2] === arrayBi[2][2] &&
  arrayBi[0][2] === arrayBi[2][2]
) {
  console.log(`${arrayBi[2][1]} is de Winner!`);
} else {
  console.log(`Draw game!`);
}

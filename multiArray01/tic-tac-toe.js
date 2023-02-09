let tb00 = document.querySelector("input#tb00");
let tb01 = document.querySelector("input#tb01");
let tb02 = document.querySelector("input#tb02");
let tb10 = document.querySelector("input#tb10");
let tb11 = document.querySelector("input#tb11");
let tb12 = document.querySelector("input#tb12");
let tb20 = document.querySelector("input#tb20");
let tb21 = document.querySelector("input#tb21");
let tb22 = document.querySelector("input#tb22");

arrayBi = [];

arrayBi.push(["x", "o", "o"], ["o", "x", "x"], ["x", "o", "o"]);

function chooseOp(id) {
  let idBtn = id.id;
  let optionXorO = prompt(
    "you can choose between X or O \n what you preffer ?"
  );

  if (optionXorO === "X" || optionXorO === "O") {
    alert(`Agora sim ${optionXorO} botão clicado ${idBtn}`);
    document.getElementById(`${idBtn}`).inputMode(`${optionXorO}`);
  } else {
    alert(`Invalid option try again! ${optionXorO}`);
  }
}

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

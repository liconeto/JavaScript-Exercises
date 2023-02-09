/*
let tb00 = document.querySelector("input#tb00");
let tb01 = document.querySelector("input#tb01");
let tb02 = document.querySelector("input#tb02");
let tb10 = document.querySelector("input#tb10");
let tb11 = document.querySelector("input#tb11");
let tb12 = document.querySelector("input#tb12");
let tb20 = document.querySelector("input#tb20");
let tb21 = document.querySelector("input#tb21");
let tb22 = document.querySelector("input#tb22");
*/
arrayBi = [];

arrayBi.push([1, 2, 3], [4, 5, 6], [7, 8, 9]);

function turn90degrees(id) {
  let idBtn = id.id;
}
let newArray = [];
let column = arrayBi.length - 1;
let cell = 0;
//newArray = [[]];
console.log(`Tamanho de ${column}`);
for (j = 0; j <= column; j += 1) {
  cell = j;

  for (i = column; i >= 0; i -= 1) {
    newArray.push(arrayBi[i][cell]);
    console.log(`${newArray.length}`);
  }
}
console.log(arrayBi);
console.log(newArray);

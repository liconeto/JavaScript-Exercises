let numInt = document.querySelector("input#numInt");
let multtable = document.querySelector("div#multtable");

function multiply() {
  let num1 = Number(numInt.value);

  let multiplyTable = document.createElement("table");
  let theadTable = document.createElement("thead");
  let tbodyTable = document.createElement("tbody");

  let tableLine = document.createElement("tr");
  let titleTable = document.createElement("th");
  let titleTable2 = document.createElement("th");
  let titleTable3 = document.createElement("th");

  titleTable.innerText = "Operator";
  titleTable2.innerText = "Multiply";
  titleTable3.innerText = "Result";

  tableLine.appendChild(titleTable);
  tableLine.appendChild(titleTable2);
  tableLine.appendChild(titleTable3);

  theadTable.appendChild(tableLine);
  multiplyTable.appendChild(theadTable);

  for (i = 0; i < 11; i += 1) {
    let tableLine = multiplyTable.insertRow();
    let cellOperator = tableLine.insertCell(0);
    let cellMultiply = tableLine.insertCell(1);
    let cellResult = tableLine.insertCell(2);
    cellOperator.innerHTML = `${num1}  X`;
    cellMultiply.innerHTML = `${i}  =`;
    cellResult.innerHTML = `${num1 * i}`;
  }
  document.getElementById("multtable").appendChild(multiplyTable);
}

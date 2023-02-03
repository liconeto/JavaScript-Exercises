let num1 = document.querySelector("input#num1");
let num2 = document.querySelector("input#num2");
let operation = document.querySelector("select#operation");
let respCheck = document.querySelector("div#respCheck");

function calculator(n1, n2, op) {
  let numFir = Number(n1.value);
  let numSec = Number(n2.value);
  let operator = op.value;

  let alertInf = document.createElement("p");

  switch (operator) {
    case "+":
      alertInf.innerText = `${numFir} + ${numSec} = ${numFir + numSec}`;
      break;
    case "-":
      alertInf.innerText = `${numFir} - ${numSec} = ${numFir - numSec}`;
      break;
    case "*":
      alertInf.innerText = `${numFir} * ${numSec} = ${numFir * numSec}`;
      break;
    case "/":
      alertInf.innerText = `${numFir} / ${numSec} = ${(numFir / numSec).toFixed(
        2
      )}`;
      break;
    default:
      alertInf.innerText = `Insert two numbers and select the operator ! ${numFir} ,${numSec} , ${operator}`;
  }
  document.getElementById("respCheck").appendChild(alertInf);
}

calculator(num1, num2, operation);

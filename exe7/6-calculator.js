let num1 = document.querySelector("input#num1");
let num2 = document.querySelector("input#num2");
let operation = document.querySelector("select#operation");
let respCheck = document.querySelector("div#respCheck");

function calculator(n1, n2, op) {
  let numFir = Number(n1.value);
  let numSec = Number(n2.value);
  let operator = op.value;

  let aviso = document.createElement("p");

  if (!numFir == 0 && !numSec == 0 && !operator == "") {
    //alert(`${numFir}, ${operator}, ${numSec}`);
    switch (operator) {
      case "+":
        aviso.innerText = `${numFir} + ${numSec} = ${numFir + numSec}`;
        break;
      case "-":
        aviso.innerText = `${numFir} - ${numSec} = ${numFir - numSec}`;
        break;
      case "*":
        aviso.innerText = `${numFir} * ${numSec} = ${numFir * numSec}`;
        break;
      case "/":
        aviso.innerText = `${numFir} / ${numSec} = ${(numFir / numSec).toFixed(
          2
        )}`;
        break;
      default:
        aviso.innerText = `Nada para nada! ${numFir} ,${numSec} , ${operator}`;
    }
    document.getElementById("respCheck").appendChild(aviso);
  }
}

calculator(num1, num2, operation);

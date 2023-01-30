let num1 = document.querySelector("input#num1");
let num2 = document.querySelector("input#num2");

function greatestNumber(num1, num2) {
  let numero1 = Number(num1.value);
  let numero2 = Number(num2.value);

  if (numero1 == 0 || numero2 == 0 || numero1 == null || numero2 == null) {
  } else if (numero1 > numero2) {
    alert(`O número ${numero1} é maior que o número ${numero2}`);
  } else {
    alert(`O número ${numero2} é maior que o número ${numero1}`);
  }
}

greatestNumber(num1, num2);

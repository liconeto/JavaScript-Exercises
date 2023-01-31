let num1 = document.querySelector("input#num1");
let num2 = document.querySelector("input#num2");

function greatestNumber(num1, num2) {
  let firstNum = Number(num1.value);
  let secondNum = Number(num2.value);

  if (
    firstNum == 0 ||
    secondNum == 0 ||
    firstNum == null ||
    secondNum == null
  ) {
  } else if (firstNum > secondNum) {
    alert(`The number ${firstNum} is bigger than number ${secondNum}`);
  } else {
    alert(`The number ${secondNum} is bigger than number ${firstNum}`);
  }
}

greatestNumber(num1, num2);

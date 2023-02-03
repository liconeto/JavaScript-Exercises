let inputsN = document.getElementsByName("num[]");

let respCheck = document.querySelector("div#respCheck");

function largest() {
  numbersInputed = [];
  bigNumber = 0;
  for (const i in inputsN) {
    if (Object.hasOwnProperty.call(inputsN, i)) {
      const element = inputsN[i];
      numbersInputed.push(element.value);
    }
  }
  for (i = 0; i < numbersInputed.length; i += 1) {
    //alert(`O valor no segundo for ${numbersInputed[i]}`);
    if (i === 0) {
      bigNumber = numbersInputed[i];
    }
    if (bigNumber < numbersInputed[i]) {
      bigNumber = numbersInputed[i];
    }
  }
  alert(`Greatest number : ${bigNumber}`);
  const para = document.createElement("p");
  para.innerText = `Greatest number : ${bigNumber}`;
  document.body.appendChild(para);
}

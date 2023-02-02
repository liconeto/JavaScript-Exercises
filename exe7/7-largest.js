let inputsN = document.getElementsByName("num[]");

let respCheck = document.querySelector("div#respCheck");

function largest() {
  for (const i in inputsN) {
    if (Object.hasOwnProperty.call(inputsN, i)) {
      const element = inputsN[i];
      alert(`${element.value}`);
    }
  }
}

largest();

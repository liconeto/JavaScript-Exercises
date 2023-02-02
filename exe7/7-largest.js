let inputsN = document.getElementsByName("num[]");

let respCheck = document.querySelector("div#respCheck");

function largest() {
  valores = [];
  maior = 0;
  for (const i in inputsN) {
    if (Object.hasOwnProperty.call(inputsN, i)) {
      const element = inputsN[i];
      valores.push(element.value);
    }
  }
  for (i = 0; i < valores.length; i += 1) {
    //alert(`O valor no segundo for ${valores[i]}`);
    if (i === 0) {
      maior = valores[i];
    }
    if (maior < valores[i]) {
      maior = valores[i];
    }
  }
  alert(`Greatest number : ${maior}`);
  const para = document.createElement("p");
  para.innerText = `Greatest number : ${maior}`;
  document.body.appendChild(para);
}

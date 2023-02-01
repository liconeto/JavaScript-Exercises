let numInt = document.querySelector("input#numInt");
let respCheck = document.querySelector("div#respCheck");

function verifiyAge(numInt) {
  let num1 = Number(numInt.value);
  let aviso = document.createElement("p");

  if (!num1 == 0) {
    if (num1 >= 18) {
      aviso.innerText = `Congratulation, You has ${num1}, is the legal age`;
    } else {
      aviso.innerText = `Alert!. You has ${num1}, is not the legal age, returns with your responsable!`;
    }
  }
  document.getElementById("respCheck").appendChild(aviso);
}

verifiyAge(numInt);

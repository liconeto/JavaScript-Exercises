let num = document.querySelector("input#fnum");
let listNumbers = document.querySelector("select#flist");
let res = document.querySelector("div#res");
let valuesN = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function insertNumber() {
  if (isNumber(num.value) && !inList(num.value, valuesN)) {
    valuesN.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Value ${num.value} inserted.`;
    listNumbers.appendChild(item);
    //res.innerHTML = "";
  } else {
    window.alert("Invalid number or in list");
  }
  num.value = "";
  num.focus();

  window.alert(valuesN);
}

function sequenceNumber() {
  if (valuesN.length == 0) {
    window.alert("Insert values before the end!!");
  } else {
    let tot = valuesN.length;
    let maior = valuesN[0];
    let mnenor = valuesN[0];
    let soma = 0;
    let media = 0;

    for (let pos in valuesN) {
      soma += valuesN[pos];

      if (valuesN[pos] > maior) maior = valuesN[pos];
      if (valuesN[pos] < mnenor) mnenor = valuesN[pos];
    }
    media = soma / tot;

    //let para = document.createElement("p");
    let para = document.createElement("p");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");

    para.innerText += `The numbers informed are  ${tot} `;
    document.body.appendChild(para);
    para1.innerText += `The bigger number is ${maior}.`;
    document.body.appendChild(para1);
    para2.innerText += `The lower number is ${mnenor}.`;
    document.body.appendChild(para2);
    para3.innerText += `The sum of all numbers is ${soma}.`;
    document.body.appendChild(para3);
    para4.innerText += `The average of numbers is ${media}`;
    document.body.appendChild(para4);
  }
}

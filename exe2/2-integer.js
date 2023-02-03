let num1 = document.querySelector("input#num1");
let list = document.querySelector("select#flist");
let response = document.querySelector("div#res");

function integerInLoop() {
  let intNum = Number(num1.value);

  for (i = 0; i <= intNum; i += 1) {
    let listItem = document.createElement("option");
    listItem.text = `${i}, `;
    alert(`Number =${i} &&  inserted integer: ${intNum}`);
    list.appendChild(listItem);
    response.innerHTML = "";
  }
}

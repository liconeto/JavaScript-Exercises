let num1 = document.querySelector("input#num1");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");

function integerInLoop() {
  let numero1 = Number(num1.value);

  for (i = 0; i <= numero1; i += 1) {
    let itemLista = document.createElement("option");
    itemLista.text = `${i}, `;
    alert(`Número =${i} &&  inteiro inserido: ${numero1}`);
    lista.appendChild(itemLista);
    res.innerHTML = "";
  }
}

let numInt = document.querySelector("input#numInt");
let tabuada = document.querySelector("table#tabuada");
let res = document.querySelector("div#res");

function multiply() {
  let num1 = Number(numInt.value);

  let tabela = document.createElement("table");
  let cabecalho = document.createElement("thead");
  let corpo = document.createElement("tbody");

  tabela.appendChild(cabecalho);
  tabela.appendChild(corpo);

  document.getElementById("tabuada").appendChild(tabela);
  for (i = 1; i < 11; i += 1) {
    let itemLista = document.createElement("td");
    itemLista.text = `${i}, `;
    alert(`Letra =${i} da palavra: ${i * num1}`);
    lista.appendChild(itemLista);
    res.innerHTML = "";
  }
}

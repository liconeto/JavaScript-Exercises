let word = document.querySelector("input#word");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");

function wordInLoop() {
  let wordS = String(word.value);

  for (i = 0; i < wordS.length; i += 1) {
    let itemLista = document.createElement("option");
    itemLista.text = `${wordS[i]}, `;
    alert(`Letra =${wordS[i]} da palavra: ${wordS}`);
    lista.appendChild(itemLista);
    res.innerHTML = "";
  }
}

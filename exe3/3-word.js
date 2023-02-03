let word = document.querySelector("input#word");
let list = document.querySelector("select#flist");
let response = document.querySelector("div#res");

function wordInLoop() {
  let wordS = String(word.value);

  for (i = 0; i < wordS.length; i += 1) {
    let listItem = document.createElement("option");
    listItem.text = `${wordS[i]}, `;
    alert(`Letra =${wordS[i]} da palavra: ${wordS}`);
    list.appendChild(listItem);
    response.innerHTML = "";
  }
}

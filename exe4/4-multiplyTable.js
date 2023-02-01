let numInt = document.querySelector("input#numInt");
let multtable = document.querySelector("div#multtable");

function multiply() {
  let num1 = Number(numInt.value);

  //let tableM = document.getElementById("multtable");
  let tabela = document.createElement("table");
  let cabecalho = document.createElement("thead");
  let corpo = document.createElement("tbody");
  let linha = document.createElement("tr");
  let titulo = document.createElement("th");
  let titulo2 = document.createElement("th");
  let titulo3 = document.createElement("th");
  let data1 = document.createElement("td");
  let data2 = document.createElement("td");
  let data3 = document.createElement("td");

  titulo.innerText = "Operador";
  titulo2.innerText = "multiplicado";
  titulo3.innerText = "Resultado";

  linha.appendChild(titulo);
  linha.appendChild(titulo2);
  linha.appendChild(titulo3);

  cabecalho.appendChild(linha);
  tabela.appendChild(cabecalho);

  for (i = 1; i < 11; i += 1) {
    data1.innerText = `${num1} *`;
    data2.innerText = `${i} =`;
    data3.innerText = `${num1 * i}`;

    linha.appendChild(data1);
    linha.appendChild(data2);
    linha.appendChild(data3);

    corpo.appendChild(linha);
    tabela.appendChild(corpo);
    document.getElementById("multtable").appendChild(tabela);
  }
}

let wordS = document.querySelector("input#word");
let res = document.querySelector("div#respCheck");
let stringN = [];

function checkPalindrome() {
  let dados = [];
  for (const i in wordS) {
    if (Object.hasOwnProperty.call(wordS, i)) {
      const element = wordS[i];
      dados[i].push(element);
    }
  }
  alert(`${dados}`);
  let para = document.createElement("p");

  para.innerText += `The numbers informed are  ${tot} `;
  document.body.appendChild(para);
}

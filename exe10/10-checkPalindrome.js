let wordS = document.querySelector("input#word");
let response = document.querySelector("div#respCheck");
let stringN = [];

function checkPalindrome() {
  let reverseWord = "";

  reverseWord = String(wordS.value).split("").reverse().join("");

  if (String(wordS.value) === reverseWord) {
    alert(`it is a palindrome`);
  } else {
    alert(`not is a palindrome`);
  }

  let para = document.createElement("p");

  para.innerText += `The word informed :  ${wordS.value} and ${reverseWord}`;
  document.body.appendChild(para);
}

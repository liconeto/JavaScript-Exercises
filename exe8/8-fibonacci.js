let param = document.querySelector("input#num1");

let respCheck = document.querySelector("div#respCheck");

function fibonacci() {
  let fibo = Number(param.value);
  fiboSeq = [];
  fiboSeq[0] = 0;
  fiboSeq[1] = 1;

  console.log(`FIbo ${fibo}`);
  console.log(`Param ${typeof param}`);
  for (i = 2; i < fibo; i += 1) {
    fiboSeq[i] = fiboSeq[i - 1] + fiboSeq[i - 2];
    alert(`Greatest number : ${fiboSeq}`);
  }

  const para = document.createElement("p");
  para.innerText = `Greatest number : ${fiboSeq}`;
  document.body.appendChild(para);
}

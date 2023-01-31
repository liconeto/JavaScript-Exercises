let numInt = document.querySelector("input#numInt");
let multtable = document.querySelector("div#multtable");
let res = document.querySelector("div#res");

function multiply() {
  let num1 = Number(numInt.value);

  let tableM = document.getElementById("multtable");
  tableM.innerHTML += [
    "<table>" +
      "<thead>" +
      "<tr>" +
      "<th>Operator</th>" +
      "<th>Multiplicator</th>" +
      "<th>Result</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>",
  ];
  for (i = 1; i < 11; i += 1) {
    tableM.innerHTML += [
      `<tr>
         <td>${num1} * </td>
         <td> ${i} = </td>
         <td>${num1 * i}</td>
       </tr>`,
    ];
  }
  tableM.innerHTML += ["</tbody>" + "</table>"].join("\n");
}

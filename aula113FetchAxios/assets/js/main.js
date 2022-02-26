// // Com axios bem mais fácil
// axios("pessoas.json")
//   .then(response => carregaElementosNaPagina(response.data))


fetch("pessoas.json")
  .then(response => response.json())
  .then(json => loadElementsInPage(json));

function loadElementsInPage(json) {
  const tbodyOfTable = document.createElement("tbody");

  for (let person of json) {
    const tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerHTML = person.nome;
    tr.appendChild(tdName);

    let tdAge = document.createElement("td");
    tdAge.innerHTML = person.idade;
    tr.appendChild(tdAge);

    let tdSalary = document.createElement("td");
    tdSalary.innerHTML = person.salario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    tr.appendChild(tdSalary);

    tbodyOfTable.appendChild(tr);
  }

  const renderTable = document.querySelector(".resultado");
  renderTable.after(tbodyOfTable)
}

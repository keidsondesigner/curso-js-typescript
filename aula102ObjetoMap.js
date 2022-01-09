const funcionarios = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'João' },
  { id: 1, nome: 'Pedro' },
];


// const novosFuncionarios = {};
// for (const funcionario of funcionarios) {
//   const { id } = funcionario;
//   novosFuncionarios[id] = { ...funcionario };
// }
// console.log(novosFuncionarios);

const novosFuncionarios = new Map();
for (const funcionario of funcionarios) {
  const { id } = funcionario;
  novosFuncionarios.set(id, { ...funcionario });
}
console.log(novosFuncionarios);
console.log(novosFuncionarios.get(2));
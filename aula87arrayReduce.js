// filter - filtra o Array não altera o Array original
// filter retorna "True" para adicionar elemento e "False" para não adicionar
// map - altera o Array original
// reduce - reduz o Array



/////////////////////////  Função .reduce  ////////////////


// some todos os numero do Array
const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = num.reduce((acc,value) => {
//    acc.push(value * 2); retorna o dobro dos valores do array original
    return acc += value;
}, 0);

console.log(total);


// retorne a pessoa mais velha  do Array
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Marcos', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce((acc, value) => {
    if ( acc.idade > value.idade )  return acc;
    return value;
})

console.log(pessoaMaisVelha);

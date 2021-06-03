// filter - filtra o Array não altera o Array original
// filter retorna "True" para adicionar elemento e "False" para não adicionar
// map - mapeando o Array
// reduce - reduz o valor do Array


/////////////////////////  Função .filter  //////////////// 


const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numFilters = num.filter((valor) => {
    return valor > 10;
});
console.log(numFilters);




// retorne pessoas que tenham nome com mais de 5 letras

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Marcos', idade: 47},
];

const pessoasComNomeGrade = pessoas.filter((obj) => {
    return obj.nome.length > 5;
});
console.log(pessoasComNomeGrade);



// retorne pessoas com mais de 50 anos

const pessoasComMaisDeCinquenta = pessoas.filter((obj) => {
    return obj.idade > 50;
});
console.log(pessoasComMaisDeCinquenta);



// retorne pessoas cujo nome começa com letra L

const pessoasComecaComM = pessoas.filter((obj) => {
    return obj.nome.toLocaleLowerCase().startsWith('m');
});
console.log(pessoasComecaComM);
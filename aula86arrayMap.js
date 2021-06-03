// filter - filtra o Array não altera o Array original
// filter retorna "True" para adicionar elemento e "False" para não adicionar
// map - altera o Array original
// reduce - reduz o Array


/////////////////////////  Função .map  ////////////////

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobre os números do Array original
const numEmDobro = num.map((value) =>{
    return value * 2;
});
console.log(numEmDobro);


// Retorne apenas uma string com nome da pessoa
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Marcos', idade: 47},
];

const nomes = pessoas.map((obj) => {
    return obj.nome;
});
console.log(nomes);


// Remova apenas a chave "nome" do objeto
const idades = pessoas.map((obj) => {
    return { idade: obj.idade }
})
console.log(idades);


// Adicione chave de "id" no Array
const pessoasComId = pessoas.map((obj, i) => {
    const newObj = { ...obj };
    newObj.id = i;
    return newObj;
})

console.log(pessoasComId);
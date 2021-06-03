const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes);
console.log(nomes.length);
// length, mostrar quando elemento possui o Array


// nomes[2] = 'João';

// delete nomes[2];

const removerUltimo = nomes.pop();
console.log(nomes, removerUltimo);
// pop, remove o último elemento do Array


const removerPrimeiro = nomes.shift();
console.log(nomes, removerPrimeiro);
// shift, remove o primeiro elemento do Array

const addNome = nomes.push('Karol');
console.log(nomes, addNome);
// push, adiciona elemento no final do Array



const novoNome = 'Luiz Otávio Miranda';
const separaNome = novoNome.split(' ');
// split, converte uma string em Array, sendo espaço ' '  virgula ','  ponto '.' outros.
console.log(separaNome);


const unirNomes = ['Keidson', 'Roby', 'Siqueira'];
const nomeUnico = unirNomes.join(' ');
// join, uni um array separados em uma única string 
console.log(nomeUnico);
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, 'elemto1', 'elemto2', 'elemto3');

// pop e shift com splice, delete pode remover 1 ou mais elementos
const removidos = nomes.splice(0, 2);
console.log(nomes, removidos);
console.log('\n');


// push com splice adicionando no final do Array

const addNoFim = nomes.splice(nomes.length, 0, 'Keidson', 'Arthur');
console.log(nomes);
console.log('\n');

// push com splice adicionando no começo  do Array

const addNoInicio = nomes.splice(0, 0, 'Karol');
console.log(nomes);
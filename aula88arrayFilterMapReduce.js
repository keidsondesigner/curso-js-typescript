// filter - filtra o Array não altera o Array original
// filter retorna "True" para adicionar elemento e "False" para não adicionar
// map - altera o Array original
// reduce - reduz o Array

// #####################################################

// 1. Retorne a soma do dobro de todos os pares
// 2. Filtrar os pares
// 3. Dobrar os valores
// 4. Reduzir o Array (somar tudo)


const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numPares = numbers.filter((current) => {
    return current % 2 === 0;
}).map((current) => {
    return current * 2;
}).reduce((acc, current) => {
    return acc + current;
}, 0);
console.log(numPares);
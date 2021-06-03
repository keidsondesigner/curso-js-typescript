const nomes = ['Luiz', 'Henrique', 'Karol'];

// for clássico
for (let i =0; i < nomes.length; i++) {
    console.log(nomes[i]);
};

console.log('\n');

// for in , também pode ser usado para objeto
for (let i in nomes) {
    console.log(nomes[i]);
};

console.log('\n');

// for of
for (let index of nomes) {
    console.log(index);
};

console.log('\n');

// for Each
nomes.forEach((value, i, array) => {
    console.log(value, i, array);
});








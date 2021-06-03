const frutas = ['pera', 'maça', 'uva'];

/*  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

*/

/*
for (let index in frutas) {
    console.log(frutas[index]);
};

const person = {
    name: 'Luiz',
    last_name: 'Otavio',
    age: 30
}

console.log(person.name);
console.log(person['name']);
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

for (let index in pessoa) {
    console.log(index, pessoa[index]);
    console.log(index);
}
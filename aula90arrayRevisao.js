const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 35,
}
console.log(pessoa.idade);

const pessoa2 = new Object();
pessoa2.nome = 'Keidson';
pessoa2.sobrenome = 'Roby';

delete pessoa2.nome;
console.log(pessoa2);
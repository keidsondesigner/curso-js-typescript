const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 35,
}
console.log(pessoa.idade);



const pessoa2 = new Object();
pessoa2.name = 'Keidson';
pessoa2.lastName = 'Roby';
pessoa2.age = 30;

pessoa2.falaNome = function () {
    console.log(`${this.name}`);
};
pessoa2.falaNome();


pessoa2.getAnoNascimento = function () {
    const anoAtual = new Date();
    return anoAtual.getFullYear() - this.age;
};
console.log(pessoa2.getAnoNascimento());


function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
};

const pessoa1 = criaPessoa('Luiz', 'Eduardo');

const pessoa2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(pessoa1, pessoa2);



function escreva(comeco) {
    function escrevaResto(resto) {
        return comeco + ' ' + resto;
    }
    return escrevaResto;
}

const olaMundo = escreva('Olá');
console.log(olaMundo('mundo!'))



/*

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

*/
function criaMultiplicador (multiplicador){
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao;

}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2), triplica(2), quadriplica(2));
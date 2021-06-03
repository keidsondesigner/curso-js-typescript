/*
Escreva uma função que recebe um número e
retorne o seguinte:

Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = retorne o próprio número
Checar se o número é realmente um número = retorne o próprio número
use a função com número de 0 a 100
*/


function somaDeGauss(numeroMaximo){
    return numeroMaximo; 
}

for (let numeroMaximo = 0; numeroMaximo <= 55; numeroMaximo++){
}
console.log(somaDeGauss(numeroMaximo))

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('*', 1, 20, 30, 40, 50);
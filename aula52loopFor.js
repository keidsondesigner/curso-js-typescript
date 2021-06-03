const frutas = ['Maça', 'Pêra', 'Uva']

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i])
}




function somaDeGauss(numeroMaximo) {
    let total = 0;
    for (let i = 1; i <= numeroMaximo; i++) {
        total += i;
    }
    return total;
}

console.log(somaDeGauss(10));
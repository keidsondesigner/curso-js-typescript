function criaPessoa(nome, sobrenome, altura, peso) {
    return { 
        nome,
        sobrenome,
        fala(assunto) {
            return `${nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        imc() {
            const indices = this.peso / (this.altura ** 2);
            return indices.toFixed(2);
        }
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(pessoa1.fala('falando sobre JS'))
console.log(pessoa1.imc());

const pessoa2 = criaPessoa('Maria', 'Otáviana', 1.7, 65);
console.log(pessoa2.fala('falando sobre JS'))
console.log(pessoa2.imc());
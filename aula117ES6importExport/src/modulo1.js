const name = "Luiz";
const sobrenome = "Miranda";
const idade = 30;

function soma(x, y) {
  return x + y;
}

class Carro {
  constructor(carro, marca) {
    this.carro = carro;
    this.marca = marca;
  }
}

export default class Pessoa {
  constructor(sexo, cor) {
    this.sexo = sexo;
    this.cor = cor;
  }
}

export { name, sobrenome, idade, soma, Carro };

//renomeado export com mesmo nome de variaveis
// export { name as name2, sobrenome as sobrenome2, idade as idade2, soma as soma2 };
// no deve ficar assim import { name2, sobrenome2, idade2, soma2 }

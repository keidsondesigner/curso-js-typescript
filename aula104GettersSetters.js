class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Keidson', 'Roby');
// console.log(p1.nomeCompleto)

//Set com novo nome
p1.nomeCompleto = 'Arthur Diego'
console.log(p1.nome)
console.log(p1.sobrenome)


/////////////////////////


class Carro {
  constructor(nome) {
    this.nome = nome;
    this.velocidade = 0;
  }

  acelerar() {
    if (this.velocidade >= 100) return;
    this.velocidade++;
  }

  freiar() {
    if (this.velocidade <= 0) return;
    this.velocidade--;
  }
}

const carro1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
  carro1.acelerar();
}
console.log(carro1)



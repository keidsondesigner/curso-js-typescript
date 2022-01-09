class Lampada {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligada!`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligada!`);
      return;
    }

    this.ligado = false;
  }
}

const lampada1 = new Lampada('Lampada quarto');
lampada1.ligar();
console.log(lampada1);



//Herdando a Class
class Tomada extends Lampada {
  constructor(nome, volts) {
    super(nome);
    this.volts = volts;
  }
};

const tomada1 = new Tomada('Fogão', 220);
console.log(tomada1);

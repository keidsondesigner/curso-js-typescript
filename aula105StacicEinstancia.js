class Lampada {
  constructor(nome) {
    this.nomeDaLampada = nome;
    this.ligado = false;
  }

  // Método de Instância com new e cria um novo objeto
  // Só é possivel acessar criando um New Lampada
  // const lampada1 = new Lampada('Lampada quarto');
  // lampada1.ligar();
  // console.log(lampada1);

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

  //Método Estático
  //Só é possivel acessar passando a Class primeiro - Lampada.trocarLampada();

  static trocarLampada(nome) {
    console.log("Ok, vou mudar de lampada!")
  }

  static somar(n1, n2) {
    return n1 + n2;
  }
}

Lampada.trocarLampada();

console.log(Lampada.somar(2, 2));


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



const obj = { a: "one", b: "two", c: "three" }
console.log(obj)

//Factory functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const novaPessoa = criaPessoa("Pedro", "Miranda");
console.log(novaPessoa.nomeCompleto);



// Constructor functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Luiz", "Miranda");
const p2 = new Pessoa("Maria", "Miranda");
console.log(p1);

//Class
class Person {
  
}
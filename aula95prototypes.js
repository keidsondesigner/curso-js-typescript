//Função constutora => é um modelo ou molde (classe), a forma do bolo;

function Pessoa(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = () => {
    this.nome + ' ' + this.sobrenome
  }
}

// Instância
const pessoa1 = new Pessoa('Keidson', 'Roby') // new Pessoa é a função construtora;
const pessoa2 = new Pessoa('Ana', 'Karol') // new Pessoa é a função construtora;

console.log(pessoa1)
console.log(pessoa2)

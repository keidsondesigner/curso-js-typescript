// Factory Fuctions
function Pessoa1(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  }
}
const p1 = Pessoa1('Keidson', 'Roby')
console.log(p1.nomeCompleto)

// Constructor Fuctions

function Pessoa2(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}
const p2 = new Pessoa2('Arthur', 'Diego')
console.log(p2)

const pessoa = {
  nome: 'Keidson',
  sobrenome: 'Roby'
}

console.log(pessoa['nome'])
console.log(pessoa.sobrenome)

pessoa.falarNome = function () {
  console.log(`${this.nome} está falando seu nome`)
}

pessoa.falarNome()

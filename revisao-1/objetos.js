const pessoa = new Object()
pessoa.nome = 'Keidson'
pessoa.sobrenome = 'Roby'
pessoa.idade = 30

pessoa.falarNome = function () {
  console.log(`${this.nome} está falando seu nome`)
}
pessoa.falarNome()

pessoa.getDataNascimento = function () {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}
console.log(pessoa.getDataNascimento())

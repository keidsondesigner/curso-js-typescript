function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100)
}

const p1 = new Produto('Camisa', 50)
p1.desconto(20)
console.log(p1)

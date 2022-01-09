function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
};
Produto.prototype.aumento = function (valor) {
  this.preco += valor;
};
Produto.prototype.desconto = function (valor) {
  this.preco -= valor;
};

// Herdando função construtora de Produto para Camiseta
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco, cor);
  this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (valor) {
  this.preco = this.preco + (this.preco * (valor / 100));
};

// Herdando função construtora de Produto para Sapato
function Sapato(nome, preco, material, estoque) {
  Produto.call(this, nome, preco, material);
  this.material = material;
  this.estoque = estoque; 4
};
Sapato.prototype = Object.create(Produto.prototype);
Sapato.prototype.constructor = Sapato;


const camiseta = new Camiseta('Regata', 67, 'branca');
console.log(camiseta);

const sapato = new Sapato('Nike', 700, 'Couro', 12);
console.log(sapato);

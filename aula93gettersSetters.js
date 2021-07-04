function Produto (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  
  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true,  // mostra a chave?
    configurable: true,    // Configurável?
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      estoquePrivado = valor;
    }
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(`Produto: ${p1.nome} em Estoque: ${p1.estoque}`);

p1.estoque = 'O valor que eu quero aqui';
console.log(p1.estoque);

function Produto(name, preco, estoque) {
  this.name = name;
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

//passando o produto, valor, estoque
const p1 = new Produto('Camiseta Batman', 34.99, 3);
console.log(`Produto: ${p1.name} ${p1.preco} em Estoque: ${p1.estoque}`);

p1.estoque = 'quantitade de estoque ou valor que eu quero aqui';
console.log(p1.estoque);

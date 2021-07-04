function Produto (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,  // mostra a chave?
    value: estoque,     // Valor
    writable: true,       // pode alterar?
    configurable: true     // Configurável?
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(`Produto: ${p1.nome} em Estoque: ${p1.estoque}`);
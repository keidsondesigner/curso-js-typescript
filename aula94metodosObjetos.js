/*
Métodos úteis em Objetos

Object.keys => Retorna mostrando apenas as chaves do objeto;
Object.values => Retorna mostrando os valores das chaves do objeto;
Object.entries => Retorna um array mostrando as chaves e valores do objeto;
Object.assign({}, any);
Object.getOwnPropertyDescriptor(objeto, 'propriedade') => mostra as propriedades do objeto;
...(spread) => Espalha os valores da variável;

--------------------

Object.freeze => Congela o objeto
Object.defineProperties => Define várias propriedades
Object.defineProperty => Define uma única  propriedade
*/

const produto = { nome: 'Caneca', preco: 1.8 }
const outraCoisa = { ...produto }
const qualquerCoisa = { nome: produto.nome, preco: produto.preco }

// alterando valores originais da variável produto
outraCoisa.preco = 5.4
outraCoisa.nome = 'Copo'
console.log(produto)
console.log(outraCoisa)
console.log(qualquerCoisa)
console.log(Object.keys(produto))
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

//for of em Object.entries
for (let entry of Object.entries(produto)) {
  console.log(entry)
}
//Destructuring em laço for of no Object.entries
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor)
}

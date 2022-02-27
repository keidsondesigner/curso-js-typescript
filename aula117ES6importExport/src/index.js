// import { name, sobrenome, idade, soma } from "./modulo1";

//renomeado import com mesmo nome de variaveis
import Pessoa, { name as name2, sobrenome, idade, soma, Carro } from "./modulo1";

// Pessoa é um export default, não precisa de chaves
//para ser importado


// import tudo do modulo1 e ronomeando com as
// import * as meuModulo1 from "./modulo1";

const name = "keidson";

const carro1 = new Carro("Fusca", "fiat")

const p1 = new Pessoa("masculino", "Parda");

console.log(carro1);
console.log(idade);
console.log(name2);
console.log(name);
console.log(sobrenome);
console.log(soma(4, 16));

console.log(p1);

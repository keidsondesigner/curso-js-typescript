// https://www.javascripttutorial.net/javascript-dom/javascript-createelement/

function createMenuItem(name) {
  let criaLi = document.createElement('li');
  criaLi.textContent = name;
  return criaLi;
}

// pega o ul#menu do html
const minhaUl = document.querySelector('#menu');

// add item na lista
minhaUl.appendChild(createMenuItem('Home'));
minhaUl.appendChild(createMenuItem('Serviços'));
minhaUl.appendChild(createMenuItem('Sobre'));

// ----------------------------------------------------------------
// cria div
// let criaDiv = document.createElement('div');
let criaP = document.createElement('p');
// div.id = 'meu id'; /**add um id**/
// div.className = 'minha class'; /**add uma class**/
// div.innerHTML = '<p>CreateElement example</p>'; /**evite usar innerHTML**/

// Criar um texto e add na div
let text = document.createTextNode('Texto exemplo aqui');
criaP.appendChild(text);

const minhaSection = document.querySelector('#minhaSection');
minhaSection.appendChild(criaP);
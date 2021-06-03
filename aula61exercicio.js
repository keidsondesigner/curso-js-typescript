//escreva uma função chamada modoPaisagem,
// que recebe 2 argumentos, largura e altura
// de uma imagem (number)
// retorne true se a imagem estiver no modo paisagem

/*
function modoPaisagem(largura, altura){
    return largura > altura ? true : false;
}

console.log(modoPaisagem(1920, 1080));
*/

const modoPaisagem = (largura, altura) => {
    return largura > altura ? true : false;
}

console.log(modoPaisagem(1920, 1080));
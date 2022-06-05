const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const geraMaiuscula = () => {
    return String.fromCharCode(rand(65, 91));
}

const geraMinuscula = () => {
    return String.fromCharCode(rand(97, 123));
}

const geraNumero = () => {
    return String.fromCharCode(rand(48, 58));
}

const simbolos = ',.;~^[]{}!@#$%*()_+=-<>:?';

const geraSimbolo = () => {
    return simbolos[rand(0, simbolos.length)];
}

//export default para usar essa função em outro módulo;

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    // convertendo ' qtd ' em strig para number
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        // avaliação de curto circuito, se for 'maiuscula' verdadeiro vai executar e passa pro próximo;
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    //console.log(senhaArray)
    // removendo os separdo '' com o método join()
    //console.log(senhaArray.join(''))
    // separando por quantitade com o método slice()
    //console.log(senhaArray.join('').slice(0, qtd))
    return senhaArray.join('').slice(0, qtd);
}

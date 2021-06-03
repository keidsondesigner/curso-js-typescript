function mostraHora(){
    let data = new Date();

    return data.toLocaleString('pt-BR', {hour12: false});
}

const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);

setInterval(() => {
    clearInterval(timer);
}, 3000);

setTimeout(() => {
    console.log('Parou aqui!');
}, 5000);
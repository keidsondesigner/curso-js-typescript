function segAleatorios(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esparaAi(msg, tempo) {
  setTimeout(() => {
    console.log(msg);
  }, tempo);
}

esparaAi("Frase 1", segAleatorios(1, 3));
esparaAi("Frase 2", segAleatorios(1, 3));
esparaAi("Frase 3", segAleatorios(1, 3));

function segAleatorios(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

function esparaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject("CAI NO ERRO");
        return;
      }

      resolve(msg.toUpperCase() + "Passei na promise");
      return;
    }, tempo);
  });
};

async function executa() {
  try {

    const fase1 = await esparaAi("Fase 1", segAleatorios());
    console.log(fase1);

    const fase2 = await esparaAi("Fase 2", segAleatorios());
    console.log(fase2);

    const fase3 = await esparaAi("Fase 3", segAleatorios());
    console.log(fase3);

  } catch (error) {
    console.log(error);
  }
};

executa()

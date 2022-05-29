function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
  if (operacao === '+') {
    return numero + outroNumero;

  } else if (operacao === '-') {
    return numero - outroNumero;

  } else if (operacao !== '-' && operacao !== '+') {
    return 0;
  }
}

console.log(calculadoraAdicaoSubtracao(3, 2, '-'));
console.log(calculadoraAdicaoSubtracao(6, 1, '+'));
console.log(calculadoraAdicaoSubtracao(9, 5, '*'));


function somaDeGauss(numeroMaximo) {
  let total = 0;
  for (let i = 1; i <= numeroMaximo; i++) {
    total += i;
  }
  return total;
}

console.log(somaDeGauss(10));




function vezesLetraAparece(frase, letra) {
  var resultado = [];

  for (var letra = 0; letra < frase.length; letra++) {
    resultado.push(frase[letra]);
  }

  return resultado;
}

console.log(vezesLetraAparece(frase[i]));

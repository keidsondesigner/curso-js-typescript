exports.users = (req, res) => {
  console.log(req.params);
  res.send('Rota users');

  // query strig é passada diretamente na url com chave e valor:  /?qualquertexto=Texto e separada por &
  console.log(req.query);
  res.send(req.query.qualquertexto);
};

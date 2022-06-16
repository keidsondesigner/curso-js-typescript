module.exports = (req, res, next) => {
  console.log('Passei no middleware global!');
  if(req.body.cliente){
    console.log(`Seja bem vindo(a) ${req.body.cliente}!`)
    req.body.cliente = req.body.cliente.replace(1, 'NÃO USE NÚMEROS ')
  }

  next();
};

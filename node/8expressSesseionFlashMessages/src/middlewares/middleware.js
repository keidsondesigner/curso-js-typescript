exports.middlewareGlobal = (req, res, next) => {
  console.log('Passei no middleware global!');
  if(req.body.cliente){
    console.log(`Seja bem vindo(a) ${req.body.cliente}!`)
    req.body.cliente = req.body.cliente.replace(1, 'NÃO USE NÚMEROS ')
  }

  next();
};


exports.checkCsrError = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' === err.code){
    return res.render('404')
  }
};


exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}

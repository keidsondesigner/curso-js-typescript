const HomeModel = require('../models/HomeModel');

HomeModel.create({
  titulo: 'Meu título de teste',
  descricao: 'minha descrição aqui.'

}).then(dados => console.log(dados).catch(err => console.log(err)));

exports.pageHome = (req, res) => {
	res.render('index');
};

exports.pageHomeFormTratado = (req, res) => {
	console.log(req.body);
	//vamos pegar o valor enviado no form do nome e no sobrenome
	res.send(`Você enviou para o Form: <b>${req.body.cliente}</b>`);
};

exports.pageHome = (req, res) => {
	res.render('index');
};

exports.pageHomeFormTratado = (req, res) => {
	console.log(req.body);
	//vamos pegar o valor enviado no form do nome e no sobrenome
	res.send(`Você enviou para o Form: <b>${req.body.nome} ${req.body.sobrenome}</b>`);
};

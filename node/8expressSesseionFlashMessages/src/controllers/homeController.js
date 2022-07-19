exports.pageHome = (req, res) => {
	res.render('index', {
    title: 'Meu título com ejs',
    numbers: [1, 2, 3, 6, 7, 8, 9, 10],
    letras: ['a', 'b', 'c', 'd', 'e']
  });
};

exports.pageHomeFormTratado = (req, res) => {
	console.log(req.body);
	//vamos pegar o valor enviado no form do nome e no sobrenome
	res.send(`Você enviou para o Form: <b>${req.body.cliente}</b>`);
};

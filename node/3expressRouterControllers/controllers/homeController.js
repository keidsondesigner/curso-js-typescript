exports.pageHome = (req, res) => {
	res.send(`
		<form action="/" method="POST">

		Nome: <input type="text" name="nome"><br>
		Sobrenome: <input type="text" name="sobrenome"><br>
		<button>Enviar</button>

		</form>
	`);
};

exports.pageHomeFormTratado = (req, res) => {
	console.log(req.body);
	//vamos pegar o valor enviado no form do nome e no sobrenome
	res.send(`Você enviou para o Form: <b>${req.body.nome} ${req.body.sobrenome}</b>`);
};

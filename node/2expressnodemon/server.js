const express = require('express');
const app = express();

app.use(express.urlencoded(
  {
    extended: true
  }
))

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome"><br>
  Sobrenome: <input type="text" name="sobrenome"><br>
  <button>Enviar</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  console.log(req.body);
  //vamos pegar o valor enviado no form do nome e no sobrenome
  res.send(`O que você me enviou foi o nome: <b>${req.body.nome} ${req.body.sobrenome}</b>`);
});

app.get('/users', (req, res) => {
  console.log(req.params);
  res.send('Test');

  // query strig é passada diretamente na url com chave e valor:  /?qualquertexto=Texto e separada por &
  console.log(req.query);
  res.send(req.query.qualquertexto);
})

app.get('/user/:id', (req, res) => {
  // /users/1
  res.send(`Id do usuário: ${req.params.id}`);
})

app.get('/cliente/:id_cliente?/:params_opcional?', (req, res) => {
  // como Json - http://localhost:3000/cliente/11/3
  res.send(req.params);
})


app.listen(3000, () => {
  console.log('🟢 Executando servidor na porta: 3000 \n 👉 Acesse http://localhost:3000')
})

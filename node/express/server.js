const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/contato', (req, res) => {
  res.send('Página de Contato');
});

app.listen(3000, () => {
  console.log('🟢 Executando servidor na porta: 3000 \n 👉 Acesse http://localhost:3000')
})

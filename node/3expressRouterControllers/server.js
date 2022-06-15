const express = require('express');
const app = express();
const routes = require('./routes');


app.use(express.urlencoded(
  {
    extended: true
  }
))

// Importando routes.js
app.use(routes);

app.listen(3000, () => {
  console.log('🟢 Executando servidor na porta: 3000 \n 👉 Acesse http://localhost:3000')
})

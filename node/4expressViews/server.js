const express = require('express');
const app = express();
const routes = require('./routes');
//resolvendo caminho absoluto do path
const path = require('path');


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

// Caminho absoluto das views
app.set('views', path.resolve(__dirname, 'src', 'views'));
// 'view engine', 'ejs' é semenhante a um framework front end
app.set('view engine', 'ejs');

// Importando routes.js
app.use(routes);

app.listen(3000, () => {
  console.log('🟢 Executando servidor na porta: 3000 \n 👉 Acesse http://localhost:3000')
})

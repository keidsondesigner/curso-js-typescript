// importando .env e nossa CONNECTIONSTRING
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// quando a promessa for resolvida ou rejeitada emitir o app.emit('pronto')
// ou emitir o error
mongoose.connect(process.env.CONNECTIONSTRING, {useNewURLParser: true, useUnifiedTopology: true})
	.then(() => {
		app.emit('pronto');
	}).catch(error => console.log(error));

const routes = require('./routes');
//resolvendo caminho absoluto do path
const path = require('path');
// importando o middleware
const meuMiddleware = require('./src/middlewares/middleware');


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

// Caminho absoluto das views
app.set('views', path.resolve(__dirname, 'src', 'views'));
// 'view engine', 'ejs' é semenhante a um framework front end
app.set('view engine', 'ejs');

// Todas as requisições e rotas vão pssar pelo middleware
app.use(meuMiddleware);

// Importando routes.js
app.use(routes);

app.on('pronto', () => {
	app.listen(3000, () => {
		console.log('🟢 Servidor na porta: 3000 \n 👉 Acesse http://localhost:3000');
	});
});

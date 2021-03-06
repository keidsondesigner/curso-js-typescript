// importando .env e nossa CONNECTIONSTRING
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// quando a promessa for resolvida ou rejeitada emitir o app.emit('pronto')
// ou emitir o error
mongoose.connect(
  process.env.CONNECTIONSTRING, {useNewURLParser: true, useUnifiedTopology: true})
	.then(() => {
		app.emit('pronto');
	}).catch(error => console.log(error)
);

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
//resolvendo caminho absoluto do path
const path = require('path');
// importando o helmet
const helmet = require('helmet');
// importando CRSF
const csrf = require('csurf');
// importando o middleware
const { middlewareGlobal, checkCsrError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'adad adadafojsfpj',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());
// Caminho absoluto das views
app.set('views', path.resolve(__dirname, 'src', 'views'));
// 'view engine', 'ejs' é semenhante a um framework front end
app.set('view engine', 'ejs');

app.use(csrf());
// Todas as requisições e rotas vão pssar pelo middleware
app.use(middlewareGlobal);
app.use(checkCsrError);
app.use(csrfMiddleware);

// Importando routes.js
app.use(routes);

app.on('pronto', () => {
	app.listen(3000, () => {
		console.log('🟢 Servidor na porta: 3000 \n 👉 Acesse http://localhost:3000');
	});
});

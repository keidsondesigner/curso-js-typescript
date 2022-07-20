//geralmente o model é uma class
//Schema é a modelagem dos dados

const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.valida();
    //se meu erros estiver vazio
    if(this.errors.length > 0) {
      return;
    }

    try {
      this.user = await LoginModel.create(this.body);
    } catch(err) {
      console.error(err);
    }
  }

  valida(){
    this.cleanUp();
    // Validação

    // O email precisa ser válido
    // se meu email não for válido faz um push no array de errors
    if(!validator.isEmail(this.body.email)){
      this.errors.push('Email inválido.');
    }
    // A senha precisa ter entre 6 e 50 caracters
    if(this.body.password.length < 6 || this.body.password.length > 50){
      this.errors.push('🥺 A senha precisa ter entre 6 e 50 caracteres.');
    }
  }
  cleanUp(){
    for(const key in this.body){
      if(typeof this.body[key] !== 'string'){
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;

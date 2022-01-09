function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.verSaldo = function () {
  console.log(`Ag/Cc: ${this.agencia} ${this.conta} \n` + `Saldo: R$${this.saldo.toFixed(2)}`)
};

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

const minhaConta = new Conta(11, 22, 100);
//console.log(minhaConta);


minhaConta.verSaldo();
minhaConta.depositar(159);
minhaConta.sacar(59);
minhaConta.sacar(199.90);
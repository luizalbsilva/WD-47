function Conta() {
	this.cliente=arguments[0] || null;
	this.numero = Math.random();
	this.saldo = arguments[1] || 0;
};

Conta.prototype.deposita = function(valor) {
	this.saldo += valor;
};

var contaDoZezinho = new Conta("José Luiz",151.20);
var contaDoLuizinho = new Conta("Luiz José",295.50);

console.log(contaDoZezinho);
console.log(contaDoLuizinho);


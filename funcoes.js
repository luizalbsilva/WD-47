function add(a,b) {
	return a+b;
}

console.log("add", add(2,4))

function add2() {
	var soma = 0
	for(x=0; x<arguments.length; x++)
		soma +=arguments[x]
	return soma;
}
console.log("add2", add2(1,2,4))

console.log(add.name, add.length, add.constructor)
console.log(add2.name, add2.length, add2.constructor)

// var testeDoCacete = new function("function(){alert(0);}");
// teste()

// Declaração de função anonima

var soma = function(){
	return arguments[0] + arguments[1]
}

console.log("soma", soma(5,10))
console.log(soma.name, soma.length, soma.constructor)


var global = "global"
function escopo() {
	console.log(global);
	local2 = "global!!!"	// Declaração sem var é global
	var local = "local"
	var global = "global 2";
}
escopo()
console.log(local2)
console.log(global)
// Objeto literal
var pessoa = {} // objeto vazio
var propriedade = "nome completo"
console.log("pessoa=>", pessoa)
console.dir("pessoa=>", pessoa)

pessoa.peso = 80
pessoa["altura"] = 1.87
pessoa[propriedade] = "Leonardo Faria"

console.log("pessoa=>", pessoa)
console.dir("pessoa=>", pessoa)





// Exenmplo autocontido
var people = {
	  peso : 80
	, altura : 1.5
	, nomeCompleto: "Maria"
	, idade : 18
	, sexo : "f"
	, cor : "branca"
	, "outra prop" : true
};

console.log("people=>", people)
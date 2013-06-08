var validaCep = /^\d{2}\.?\d{3}(-\d{3})?$/
var validaEmail= /[\w][\w\.]+\@\w+(\.\w+)+/

console.log("luiz".match(validaCep))
console.log("luiz 12.421-520".match(validaCep))
console.log("12.421-520".match(validaCep))

console.log(validaCep.test("12.421-520"))
console.log(validaCep.exec("12.421-520"))

console.log(validaCep.test("Meu cep: 12.421-520"))
console.log(validaCep.exec("Meu cep: 12.421-520"))




// Exemplo prático
var input="<script>alert(10)</script>"

console.log("Muda apenas o primeiro:", input.replace(/<\/?\w+>/, ""))
console.log("Mata todos os elementos:", input.replace(/<\/?\w+>/g, ""))
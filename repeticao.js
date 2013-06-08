var carros=["fox", "spaceFox", "crossFox", "gol", "fusca", "new Beettle"]

console.log(carros)
console.dir(carros)
console.log(carros[0])

// while
var cont=0
while(cont<carros.length)
	console.log(carros[cont++])

console.log("de novo !!!")
for(cont=0; cont<carros.length; cont++)
	console.log(carros[cont])

console.log("de novo !!!")
for(var cont in carros)
	console.log(carros[cont])

// Sṕ funciona no firefox
//console.log("de novo !!!")
//for each(carro in carros)
//	console.log(carro)

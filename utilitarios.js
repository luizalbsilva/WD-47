function mostra(carros){
	$.each(carros, function(index, value){
		console.log("Indice:", index, "valor: ", value);
	});	
	console.log()
}

$(document).ready(function(){
	var carros = ["gol", "fox", "palio", "corsa", "elba"];

	mostra(carros);

	var cars = ["Ferrari", "Lamborguini", "Mustang", "Mercedez"];
	var allCars = $.merge(carros, cars);
	mostra(allCars);	
});



$(document).ready(function(){
	var pai = {
		nome: "José"
	};

	var filho = {
		sobrenome : "Silva"
	}

	$.extend(filho,  pai);
	console.log(
			  filho
			, $.trim("     Caelum     ")
	);
});
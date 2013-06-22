$(document).ready(function(){
	$.ajax({
		  url: "http://www.mocky.io/v2/51c5e02f2189d0a300eeb5f4?callback=?"
		, method: "get"
		, dataType: "jsonp"
		, success: function(j){
			$("tbody").empty();
			$.each(j, function(i,v){
//				console.log(i,v);
				var line = $("#linha").text();
				$(line).find(".ID").text(v.ID).end()
					.find(".Nome").text(v.Nome).end()
					.find(".Endereco").text(v.Endereco).end()
					.find(".Telefone").text(v.Telefone).end()
					.appendTo("tbody");

				/*
				$.each($($("#linha").html()).children("td"), function(a, b){
					console.log(a, b);

				});
*/
			});
			$("table").zebra("red", "yellow").css("border", "5px solid");
		}
		, error : function(){
			console.log("erro");
		}
	});
});
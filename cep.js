$(document).ready(function(){
	$("#cep").on("keypress", function(e){
		if((e.which<48)|| (e.which>59)){
			e.preventDefault();
		}
	}).on("blur", function(){
		var endereco =  "http://cep.correiocontrol.com.br/"+ $(this).val() + ".json";
		console.log(endereco)
		$.ajax({
			  url: endereco
			, dataType : "json"
			, success: function(j){
				$.each(j, function(i,v){
					$("#" + i).val(v)	
				})
				
			}
			, error: function() {
				alert("Fudeu");
			}
		});
	});
});
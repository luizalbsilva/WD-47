/*
$(document).ready(function(){
	$("h1").on("mouseover", function(){
		$(this).text("jQuery");
	}).on("mouseout", function(){
		$(this).text("Javascript framework")
	})
})

$(document).ready(function(){
	$(".lista li:eq(2)").on("click", function(){
		$("<img>").attr("src", "http://lorempixel.com/100/100/").appendTo("#target");
	});

	$(".lista li:eq(3)").on("click", function(){
		$("#target").empty();
	});

});
*/

$(document).ready(function(){
	$("a").on("click", function(){
//		$(".lista").slideUp();
		$(".lista").slideToggle();
//		var state = $(this).text();
//		$(this).text($(this).attr("rel")).attr("rel", state);
	});

	$(".lista li:eq(3)").on("click", function(){
		$("#target").empty();
	});
});

window.onload = function(){
	console.log("Javascript");
}

//	$(document).ready(function(){
//		jQuery("li").eq(2).hide().end().eq(5).fadeOut();
//		console.log( $("#slogan").text() )
//		console.log( $("#slogan").text("Write less do more").attr("title","no") )
//		console.log( $(".lista").parent().children("div").prev().next() )
//	})

console.log(
$("h1,h2,ul")
	)

console.log(
	  $("li:even").css({bacground : "gray", color : "white"})
	, $("li:nth-child(2)")
	, $("h1:contains('Javascript')")
	);
(function($){
	$.fn.zebra = function(color, color2) {
		$(this).find("tr:odd").css("background", color);
		$(this).find("tr:even").css("background", color2);
		$(this).find("tr:first").css("background", "gray");
		return $(this);
	}
})(jQuery);
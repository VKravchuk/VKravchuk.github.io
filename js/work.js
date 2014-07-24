$(document).ready(function(){
	var scrollWindow = $(".topmenu").offset().top-35;
	var changeMenuPosition = function(){
		if($( document ).width() <= 768){
			$(".topmenu").appendTo("#small-device-menu");
			$("#small-device-menu").addClass("col-xs-12");
		}
		if($( document ).width() > 768){
			$(".topmenu").appendTo("#default-menu-position");
			$("#small-device-menu").removeClass("col-xs-12");
		}
	}
	changeMenuPosition();
	$(window).scroll(function() {
		var position = $(window).scrollTop();
		if (position > $(window).height()) {
			$(".back-to-top").fadeIn("slow");	
		}
		if (position <= scrollWindow) {
			$(".back-to-top").fadeOut("slow");
		}
	});
	$( "#btn-back-to-top" ).click(function() {
		$("html, body").animate({scrollTop: scrollWindow+"px"},"slow");
	});
	$(window).resize(function() {
		changeMenuPosition();
	});
});
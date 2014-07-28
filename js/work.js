$(document).ready(function(){
        var scrollWindow = $(".topmenu").offset().top - 35;
        var changeMenuPosition = function() {
            if ($(document).width() <= 768) {
                $(".topmenu").appendTo("#small-device-menu");
                $("#small-device-menu").addClass("col-xs-12");
            }
            if ($(document).width() > 768) {
                $(".topmenu").appendTo("#default-menu-position");
                $("#small-device-menu").removeClass("col-xs-12");
            }
        }
        changeMenuPosition();
	var facebookComment="<div class='row'>\
		<div id='fb-root'></div>\
		<script>(function(d, s, id) {\
		  var js, fjs = d.getElementsByTagName(s)[0];\
		  if (d.getElementById(id)) return;\
		  js = d.createElement(s); js.id = id;\
		  js.src = '//connect.facebook.net/uk_UA/sdk.js#xfbml=1&appId=763991130332138&version=v2.0';\
		  fjs.parentNode.insertBefore(js, fjs);\
		}(document, 'script', 'facebook-jssdk'));</script>\
		<div class='fb-comments col-md-12' data-href='http://example.com/comments' data-width="
		+$('.bg-titles').width()+ 
		"data-numposts='5' data-colorscheme='light'></div>\
	</div>"
	$("#fbcomment").append(facebookComment);
	
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
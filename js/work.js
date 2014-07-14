$(document).ready(function(){
	var scrll=$(".navbar:first").offset().top;
	$(window).scroll(function() {
		if($(window).height() < $(".back-to-top").offset().top){
			$(".back-to-top").fadeIn("slow");	
		}
		//мигає якщо тут до $(window).height() додати scrll, щоб скролило не до самого верху а до
		if($(window).height() >= $(".back-to-top").offset().top){
			$(".back-to-top").fadeOut("slow");
		}
		
		// console.log($(".back-to-top").offset().top);
		// console.log($(window).height());
	});
	$( "#btn-back-to-top" ).click(function() {
		//$(document).animate({scrollTo(0,0);},"fast");
	/*	while(x!=0)
		{
			scrollTo(0,0);
		}*/

		$("html, body").animate({scrollTop: scrll+"px"},"slow");
		// console.log(scrll);
		// while(scrll>0){
		// 	$(document).delay(100).scrollTop(scrll);
		// 	$(document).delay(100);
		// 	scrll-=10;
		// }
		// console.log(scrll);
	});
});
$(document).ready(function(){


	$(window).scroll(function() {
		if($(this).scrollTop() > 30) {
			$(".navbar").fadeOut(3000);
		}
		else {
			$(".navbar").fadeIn();
		}
	});

	$(document).ready(function(){  
			$("#fadeout").fadeOut();
		
	});

	$(document).ready(function(){  
		$( ".advancedClick").click(function() {
		  $("#fadeout").fadeIn("slow");
		});
	});


});